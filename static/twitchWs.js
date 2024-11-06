class TwitchChat {
    constructor(channel, onMessage) {
        this.channel = channel.toLowerCase();
        this.onMessage = onMessage;
        this.ws = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
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
                return {
                    displayName: match[1] || match[2],
                    username: match[2],
                    message: match[3].trim()
                };
            }
        } catch (error) {
            console.error('Error parsing Twitch message:', error);
        }
        return null;
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
} 