class TwitchChat {
    constructor(channel, onMessage) {
        this.channel = channel.toLowerCase();
        this.onMessage = onMessage;
        this.ws = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.userMessageTimes = new Map();
        this.rateLimit = {
            messages: 4,    // Maximum messages
            timeWindow: 120000 // Time window in milliseconds (2 minutes)
        };
    }

    connect() {
        this.ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443');
        
        this.ws.onopen = () => {
            console.log('Connected to Twitch chat');
            // Anonymous connection
            this.ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands');
            this.ws.send('PASS SCHMOOPIIE');
            this.ws.send('NICK justinfan' + Math.floor(Math.random() * 100000));
            this.ws.send('JOIN #' + this.channel);
        };

        this.ws.onmessage = (event) => {
            const message = event.data;
            
            if (message.startsWith('PING')) {
                this.ws.send('PONG :tmi.twitch.tv');
                return;
            }

            if (message.includes('PRIVMSG')) {
                const parsedMessage = this.parseMessage(message);
                if (parsedMessage) {
                    this.onMessage(parsedMessage);
                }
            }
        };

        this.ws.onclose = () => {
            console.log('Disconnected from Twitch chat');
            if (this.reconnectAttempts < this.maxReconnectAttempts) {
                this.reconnectAttempts++;
                setTimeout(() => this.connect(), 5000);
            }
        };

        this.ws.onerror = (error) => {
            console.error('Twitch WebSocket error:', error);
        };
    }

    parseMessage(message) {
        try {
            const regex = /display-name=([^;]*)[^:]*:([^!]*)![^:]*:(.+)/;
            const match = message.match(regex);
            
            if (match) {
                const username = match[2];
                const messageText = match[3].trim();
                
                // Only process messages that contain a question mark
                // if (!messageText.includes('?')) {
                //     return null;
                // }
                
                if (this.isRateLimited(username)) {
                    console.log(`Rate limited message from ${username}`);
                    return null;
                }

                const userTimes = this.userMessageTimes.get(username) || [];
                userTimes.push(Date.now());
                this.userMessageTimes.set(username, userTimes);

                return {
                    displayName: match[1] || match[2],
                    username: username,
                    message: messageText
                };
            }
        } catch (error) {
            console.error('Error parsing Twitch message:', error);
        }
        return null;
    }

    isRateLimited(username) {
        const now = Date.now();
        const userTimes = this.userMessageTimes.get(username) || [];
        
        const recentMessages = userTimes.filter(time => 
            time > now - this.rateLimit.timeWindow
        );
        
        this.userMessageTimes.set(username, recentMessages);
        
        return recentMessages.length >= this.rateLimit.messages;
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
} 