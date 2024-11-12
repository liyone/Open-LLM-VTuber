const interestingPrompts = [
    {
      "title": "The Lost Art of Handwritten Love Letters",
      "text": "Hey, have you ever noticed that nobody writes love letters by hand anymore? It's fascinating how we've swapped heartfelt penmanship and the anticipation of waiting for a letter to arrive for quick texts and emojis. Makes you wonder what other timeless traditions we've left behind without even realizing it! [sadness]",
      "emotion": "sadness",
      "viral_score": 85,
      "interest": 90,
      "interactivity": 80,
      "relatability": 88
    },
    {
      "title": "Childhood Unplugged: The Vanishing Outdoor Play",
      "text": "Hey, isn't it wild that kids don't play outside unsupervised these days? The whole 'be home by sunset' vibe just vanished, replaced by screens and scheduled activities. Makes you think about how much childhood has changed without us noticing! [surprise]",
      "emotion": "surprise",
      "viral_score": 88,
      "interest": 92,
      "interactivity": 85,
      "relatability": 90
    },
    {
      "title": "Memory Lapse: Not Remembering Phone Numbers Anymore",
      "text": "Have you realized people don't memorize phone numbers anymore? We totally rely on our phones to remember everything, even our closest contacts' numbers. Makes you wonder what other skills we've lost without thinking about it! [smirk]",
      "emotion": "smirk",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 75,
      "relatability": 95
    },
    {
      "title": "Navigating Change: From Paper Maps to GPS",
      "text": "Hey, have you noticed that nobody buys physical maps these days? GPS has made paper maps almost extinct, and the adventure of charting a course is now a digital affair. Makes you think about how technology silently erases old habits! [surprise]",
      "emotion": "surprise",
      "viral_score": 82,
      "interest": 87,
      "interactivity": 78,
      "relatability": 85
    },
    {
      "title": "The Cashless Society: Tapping into the Future",
      "text": "Isn't it crazy we rarely see people using cash anymore? We're tapping cards and phones like it's second nature, moving toward a fully digital economy. Makes you wonder what else is disappearing from our wallets without us noticing! [joy]",
      "emotion": "joy",
      "viral_score": 90,
      "interest": 88,
      "interactivity": 82,
      "relatability": 89
    },
    {
      "title": "From Film to Digital: The Evolution of Photography",
      "text": "Have you thought about how we don't develop film from cameras anymore? Digital photos have made printed pictures a rarity, and photo albums are now in the cloud. Makes you think about how we store memories differently now! [sadness]",
      "emotion": "sadness",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 70,
      "relatability": 80
    },
    {
      "title": "Goodbye Dial-Up: The Silence of the Modem",
      "text": "Hey, isn't it interesting we don't dial up internet connections anymore? That screeching modem sound is a relic, a soundtrack of the early internet era. Makes you wonder what other sounds have vanished from our lives! [smirk]",
      "emotion": "smirk",
      "viral_score": 75,
      "interest": 80,
      "interactivity": 68,
      "relatability": 77
    },
    {
      "title": "Streaming Ahead: The Death of Video Rental Stores",
      "text": "Have you noticed nobody rents movies from video stores anymore? Streaming has completely taken over, turning 'Friday night movie rentals' into a nostalgic memory. Makes you think about how quickly entire industries can change! [surprise]",
      "emotion": "surprise",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "The Digital Newsfeed: Decline of Print Newspapers",
      "text": "Isn't it wild we don't read newspapers in print as much these days? We're all scrolling through news feeds instead, getting instant updates from around the world. Makes you wonder what other paper-based traditions are fading away! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 82,
      "interactivity": 75,
      "relatability": 83
    },
    {
      "title": "GPS Dependency: Forgetting How to Navigate",
      "text": "Hey, have you realized people don't memorize directions anymore? We just follow GPS voices blindly, turning when we're told to. Makes you think about how navigation skills are becoming obsolete! [smirk]",
      "emotion": "smirk",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 87
    },
    {
      "title": "Wristwatches Evolved: From Timekeeping to Tech",
      "text": "Isn't it funny we rarely see people wearing wristwatches just to tell time? Now they're smart gadgets or fashion statements, doing everything from tracking steps to receiving calls. Makes you wonder how everyday items evolve over time! [joy]",
      "emotion": "joy",
      "viral_score": 83,
      "interest": 88,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Vacation Sharing: Postcards to Posts",
      "text": "Have you noticed nobody sends postcards from vacations anymore? It's all instant photo uploads and stories now, sharing moments in real-time. Makes you think about how sharing experiences has changed! [joy]",
      "emotion": "joy",
      "viral_score": 86,
      "interest": 90,
      "interactivity": 85,
      "relatability": 88
    },
    {
      "title": "Binge Culture: The End of Waiting for TV Shows",
      "text": "Hey, isn't it crazy we don't have to wait for TV shows to air weekly? Binge-watching entire seasons is the new norm, changing how we consume stories. Makes you wonder how patience has become a lost art! [smirk]",
      "emotion": "smirk",
      "viral_score": 88,
      "interest": 92,
      "interactivity": 83,
      "relatability": 90
    },
    {
      "title": "From CDs to Streams: Music's Digital Transformation",
      "text": "Have you thought about how we don't listen to music on CDs anymore? Streaming services have taken over, putting millions of songs at our fingertips. Makes you think about how physical media is disappearing! [sadness]",
      "emotion": "sadness",
      "viral_score": 82,
      "interest": 87,
      "interactivity": 75,
      "relatability": 83
    },
    {
      "title": "Riding the App Wave: Decline of Street Hailing Taxis",
      "text": "Isn't it wild we don't hail taxis on the street as much anymore? Ride-sharing apps have changed the game, bringing transportation to our doorsteps. Makes you wonder what other industries are being reinvented! [surprise]",
      "emotion": "surprise",
      "viral_score": 90,
      "interest": 93,
      "interactivity": 88,
      "relatability": 85
    },
    {
      "title": "Manuals to Tutorials: Learning in the Digital Age",
      "text": "Hey, have you noticed people don't read instruction manuals anymore? We just watch tutorials online, learning visually and interactively. Makes you think about how learning methods are evolving! [joy]",
      "emotion": "joy",
      "viral_score": 84,
      "interest": 88,
      "interactivity": 82,
      "relatability": 86
    },
    {
      "title": "Tech Reminders: Forgetting Special Dates",
      "text": "Isn't it interesting we don't memorize birthdays and anniversaries anymore? Our phones remind us of everything, keeping us on track with notifications. Makes you wonder how much we rely on technology for personal connections! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 90
    },
    {
      "title": "Password Managers: Outsourcing Our Security",
      "text": "Have you realized we don't have to remember passwords anymore? Password managers do it for us, handling complex combinations we can't recall. Makes you think about how we outsource even our security! [surprise]",
      "emotion": "surprise",
      "viral_score": 85,
      "interest": 88,
      "interactivity": 80,
      "relatability": 82
    },
    {
      "title": "The All-in-One Device: Phones Replacing Gadgets",
      "text": "Hey, isn't it crazy we don't use alarm clocks as standalone devices anymore? Our phones have absorbed so many gadgets, serving as cameras, calendars, and more. Makes you wonder what other devices are becoming obsolete! [joy]",
      "emotion": "joy",
      "viral_score": 87,
      "interest": 90,
      "interactivity": 85,
      "relatability": 88
    },
    {
      "title": "Digital Payments: The Decline of Writing Checks",
      "text": "Have you noticed nobody writes checks at stores anymore? Electronic payments have taken over, making transactions faster and easier. Makes you think about how money exchange is evolving! [surprise]",
      "emotion": "surprise",
      "viral_score": 83,
      "interest": 87,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Email Era: Farewell to Fax Machines",
      "text": "Isn't it wild we don't send faxes anymore? Emails and messaging apps have made them relics, streamlining communication. Makes you wonder what other communication methods have faded away! [smirk]",
      "emotion": "smirk",
      "viral_score": 76,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Instant Previews: No More Waiting for Photos",
      "text": "Hey, have you thought about how we don't have to wait to develop photos to see how they turned out? Instant previews are the norm now, capturing and sharing moments instantly. Makes you think about how instant gratification has become standard! [joy]",
      "emotion": "joy",
      "viral_score": 88,
      "interest": 92,
      "interactivity": 85,
      "relatability": 90
    },
    {
      "title": "The Smartphone Dictionary: Words at Our Fingertips",
      "text": "Isn't it interesting we don't carry around pocket dictionaries anymore? We just look up words on our phones, expanding our vocabulary on the go. Makes you wonder how information accessibility has changed learning! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Streaming Playlists: The New Music Albums",
      "text": "Have you noticed we don't buy music albums as physical copies anymore? Streaming playlists are where it's at, customizing our listening experience. Makes you think about how we consume art differently! [smirk]",
      "emotion": "smirk",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Google It: The End of Memorizing Facts",
      "text": "Hey, isn't it crazy we don't need to memorize facts anymore? We just 'Google' everything, accessing information instantly. Makes you wonder how this affects our knowledge retention! [smirk]",
      "emotion": "smirk",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 83,
      "relatability": 88
    },
    {
      "title": "Digital Presets: Tuning Out Manual Radio",
      "text": "Isn't it wild we don't have to manually tune radio stations anymore? Digital presets have made it so easy, bringing clarity at the touch of a button. Makes you think about how convenience shapes our habits! [joy]",
      "emotion": "joy",
      "viral_score": 78,
      "interest": 82,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Hobbies Evolved: The Decline of Stamp Collecting",
      "text": "Have you realized people don't collect stamps or coins as hobbies as much anymore? Digital entertainment has taken over, shifting interests to virtual worlds. Makes you wonder what hobbies the next generation will cherish! [sadness]",
      "emotion": "sadness",
      "viral_score": 75,
      "interest": 80,
      "interactivity": 70,
      "relatability": 75
    },
    {
      "title": "Cursive's Fade: Typing Over Handwriting",
      "text": "Hey, isn't it interesting we don't write in cursive as much anymore? Typing has become the primary way to communicate, and elegant handwriting is becoming rare. Makes you think about how handwriting might become a lost art! [sadness]",
      "emotion": "sadness",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 72,
      "relatability": 80
    },
    {
      "title": "Mobile Banking: Depositing Checks from Home",
      "text": "Isn't it crazy we don't need to go to the bank to deposit checks anymore? Mobile deposits have made banking so convenient, saving us time and trips. Makes you wonder what other errands we can do from our couches! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 88,
      "interactivity": 82,
      "relatability": 87
    },
    {
      "title": "Online Directories: The Obsolescence of Phone Books",
      "text": "Have you noticed nobody uses phone books anymore? Online directories have replaced them entirely, making information access instantaneous. Makes you think about how information access has transformed! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Digital Knowledge: Farewell to Encyclopedias",
      "text": "Hey, isn't it wild we don't buy encyclopedias anymore? The internet has all the answers we need, updating knowledge in real-time. Makes you wonder how education resources have evolved! [joy]",
      "emotion": "joy",
      "viral_score": 83,
      "interest": 87,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Cutting the Cord: Mobile Phones Over Landlines",
      "text": "Isn't it interesting we don't use landline phones as much anymore? Mobile phones have become our lifelines, keeping us connected anywhere. Makes you think about how communication has untethered us! [joy]",
      "emotion": "joy",
      "viral_score": 87,
      "interest": 90,
      "interactivity": 85,
      "relatability": 88
    },
    {
      "title": "Digital Recipes: The New Family Cookbook",
      "text": "Have you thought about how we don't write down recipes on cards anymore? Online recipes and cooking videos are the new cookbooks, altering how traditions are passed down. Makes you wonder how traditions are passed down now! [sadness]",
      "emotion": "sadness",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Streaming Solutions: No More Adjusting TV Antennas",
      "text": "Hey, isn't it crazy we don't have to adjust the TV antenna for better reception? Streaming services have made that struggle obsolete, offering clear content anytime. Makes you think about how technology smooths out life's little annoyances! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 82,
      "relatability": 87
    },
    {
      "title": "Calculators and Apps: Forgetting Math Formulas",
      "text": "Isn't it wild we don't have to remember mathematical formulas? Calculators and apps do it all for us, making complex calculations simple. Makes you wonder about the impact on our problem-solving skills! [smirk]",
      "emotion": "smirk",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 75,
      "relatability": 83
    },
    {
      "title": "Digital Invites: The Evolution of Event Planning",
      "text": "Have you noticed people don't send handwritten invitations anymore? Digital invites have taken over, making event planning quicker and more efficient. Makes you think about how social etiquette is changing! [surprise]",
      "emotion": "surprise",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 78,
      "relatability": 84
    },
    {
      "title": "Instant News: The Death of Scheduled Broadcasts",
      "text": "Hey, isn't it interesting we don't have to wait for the news at specific times? We get updates instantly on our devices, staying informed around the clock. Makes you wonder how patience and anticipation are fading! [smirk]",
      "emotion": "smirk",
      "viral_score": 83,
      "interest": 87,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Digital Memories: Photo Albums in the Cloud",
      "text": "Isn't it crazy we don't develop personal photos to put in albums? Social media galleries have become our photo albums, changing how we preserve memories. Makes you think about how we preserve memories! [sadness]",
      "emotion": "sadness",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 75,
      "relatability": 82
    },
    {
      "title": "E-Tickets: The New Way to Attend Events",
      "text": "Have you realized we don't carry around physical tickets for events as much anymore? E-tickets on our phones are the norm, simplifying entry. Makes you wonder what else will become digital! [surprise]",
      "emotion": "surprise",
      "viral_score": 85,
      "interest": 88,
      "interactivity": 82,
      "relatability": 86
    },
    {
      "title": "E-Books and Audiobooks: Rethinking Reading",
      "text": "Hey, isn't it wild we don't need to own physical books to read them? E-books and audiobooks have changed the reading game, offering convenience and portability. Makes you think about the future of libraries! [sadness]",
      "emotion": "sadness",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Mobile Check-Ins: Boarding Passes Go Digital",
      "text": "Isn't it interesting we don't print boarding passes anymore? Mobile check-ins have simplified travel, making the process smoother. Makes you wonder how much paper we've saved! [joy]",
      "emotion": "joy",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Streaming Dominance: Goodbye DVD Kiosks",
      "text": "Have you noticed nobody rents DVDs from kiosks anymore? Streaming has made physical media seem outdated, altering how we access entertainment. Makes you think about how fast entertainment consumption changes! [surprise]",
      "emotion": "surprise",
      "viral_score": 83,
      "interest": 87,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Typing Takes Over: The End of Shorthand Writing",
      "text": "Hey, isn't it crazy we don't learn how to write in shorthand anymore? Typing and voice notes have replaced it, changing how we take quick notes. Makes you think about how professions evolve! [smirk]",
      "emotion": "smirk",
      "viral_score": 76,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Pagers to Smartphones: Staying Connected",
      "text": "Isn't it wild we don't use pagers anymore? Mobile phones made them disappear, consolidating multiple devices into one. Makes you wonder what current tech will become obsolete next! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 82
    },
    {
      "title": "Fitness on the Wrist: The Smartwatch Revolution",
      "text": "Have you thought about how we don't wear watches to tell time but to track fitness? Smartwatches have redefined a classic accessory, blending function and health monitoring. Makes you think about how multifunctional devices are taking over! [joy]",
      "emotion": "joy",
      "viral_score": 88,
      "interest": 92,
      "interactivity": 85,
      "relatability": 87
    },
    {
      "title": "The Shift from Chain Letters to Shares",
      "text": "Hey, isn't it interesting we don't send chain letters or emails anymore? Social media shares have replaced them, changing how trends spread online. Makes you think about how trends shift online! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 82,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Instant Answers: No Need to Memorize Capitals",
      "text": "Isn't it crazy we don't have to memorize world capitals anymore? Quick searches give us instant answers, affecting how we learn geography. Makes you wonder about the changes in education focus! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Digital Contacts: The End of Rolodexes",
      "text": "Have you noticed nobody uses Rolodexes anymore? Digital contacts have streamlined networking, making information portable and searchable. Makes you think about how business practices evolve! [smirk]",
      "emotion": "smirk",
      "viral_score": 75,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Color and Digital: The New Face of Photography",
      "text": "Hey, isn't it wild we don't develop black-and-white film? Color and digital photography have become the standard, expanding creative possibilities. Makes you wonder what artistic mediums are changing! [joy]",
      "emotion": "joy",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Home Gaming: The Decline of Arcades",
      "text": "Isn't it interesting we don't go to arcades as much anymore? Home gaming systems have brought the arcade experience to us, changing social gaming. Makes you think about social gaming experiences! [sadness]",
      "emotion": "sadness",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Ride-Hailing Revolution: Apps Over Cabs",
      "text": "Have you realized we don't need to hail a cab anymore? Ride-hailing apps have revolutionized transportation, offering convenience and transparency. Makes you think about how apps reshape industries! [surprise]",
      "emotion": "surprise",
      "viral_score": 90,
      "interest": 93,
      "interactivity": 88,
      "relatability": 85
    },
    {
      "title": "Streaming Choices: Forgetting TV Channel Numbers",
      "text": "Hey, isn't it crazy we don't have to remember TV channel numbers? Streaming platforms have made channel surfing a thing of the past, customizing our viewing. Makes you wonder how we choose what to watch now! [smirk]",
      "emotion": "smirk",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Keyless Convenience: Cars Without Physical Keys",
      "text": "Isn't it wild we don't have to use physical keys for cars? Keyless entry and push-starts are becoming standard, automating everyday actions. Makes you think about how everyday actions are becoming automated! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 88,
      "interactivity": 82,
      "relatability": 85
    },
    {
      "title": "Single Songs: The New Way to Enjoy Music",
      "text": "Have you noticed nobody buys albums to get that one song anymore? We can stream or purchase singles instantly, changing how music is distributed. Makes you think about how music distribution has changed! [joy]",
      "emotion": "joy",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Phone Flashlights: Lighting the Way",
      "text": "Hey, isn't it interesting we don't have to carry flashlights anymore? Our phone's built-in lights do the trick, consolidating gadgets. Makes you think about how many gadgets our phones have replaced! [surprise]",
      "emotion": "surprise",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Research Redefined: Libraries in the Digital Age",
      "text": "Isn't it crazy we don't need to go to libraries to do research? Online databases are accessible from anywhere, changing the role of libraries. Makes you wonder how the role of libraries is changing! [sadness]",
      "emotion": "sadness",
      "viral_score": 75,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Messaging Over Telegrams: Instant Communication",
      "text": "Have you thought about how we don't send telegrams anymore? Instant messaging has made them obsolete, speeding up communication. Makes you think about the speed of communication evolution! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 82
    },
    {
      "title": "High-Speed Expectations: The End of Slow Loading",
      "text": "Hey, isn't it wild we don't have to wait for photos to load line by line on web pages? High-speed internet has spoiled us with instant content. Makes you wonder what slow tech will be unimaginable for future generations! [smirk]",
      "emotion": "smirk",
      "viral_score": 83,
      "interest": 87,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Unlimited Storage: No More Worrying About Film",
      "text": "Isn't it interesting we don't have to worry about running out of film during special events? Digital storage seems limitless, changing how we document our lives. Makes you think about how we document our lives! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 82,
      "relatability": 87
    },
    {
      "title": "Mobile Plans: The Obsolescence of Phone Cards",
      "text": "Have you noticed nobody collects phone cards anymore? Mobile plans have made them unnecessary, transforming telecommunications. Makes you think about how telecommunications have advanced! [surprise]",
      "emotion": "surprise",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Effortless Travel: Automatic Time Zone Updates",
      "text": "Hey, isn't it crazy we don't have to adjust our watches when traveling across time zones? Smartphones do it automatically, making travel more seamless. Makes you think about how effortless travel has become! [joy]",
      "emotion": "joy",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Digital Classrooms: Overhead Projectors Retired",
      "text": "Isn't it wild we don't use overhead projectors in classrooms anymore? Digital presentations have taken over, enhancing education tools. Makes you wonder how education tools keep evolving! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "GPS Reliance: No More Printed Directions",
      "text": "Have you realized we don't need to print directions from the internet anymore? GPS navigation has made printed maps obsolete, shaping our choices. Makes you think about how convenience shapes our choices! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 82,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Global Connections: From Pen Pals to Social Media",
      "text": "Hey, isn't it interesting we don't develop pen pals from other countries through snail mail? Social media connects us instantly, changing the nature of global friendships. Makes you think about the nature of global friendships! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 82,
      "relatability": 87
    },
    {
      "title": "Ad-Free Options: Skipping Commercials at Will",
      "text": "Isn't it crazy we don't have to sit through commercials if we don't want to? Streaming services let us skip them, altering advertising strategies. Makes you wonder how advertising adapts! [smirk]",
      "emotion": "smirk",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 82
    },
    {
      "title": "From Floppy Disks to Clouds: Data Storage Evolution",
      "text": "Have you noticed nobody uses floppy disks anymore? Cloud storage and USB drives have replaced them, transforming how we store data. Makes you think about how data storage has transformed! [surprise]",
      "emotion": "surprise",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Digital Address Books: Managing Contacts Today",
      "text": "Hey, isn't it wild we don't have to carry around address books? Our contacts are all in our phones, making relationship management digital. Makes you think about how we manage our relationships! [smirk]",
      "emotion": "smirk",
      "viral_score": 76,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Writing Transformed: From Typewriters to Computers",
      "text": "Isn't it interesting we don't use typewriters anymore? Computers have made editing so much easier, changing the writing process. Makes you wonder how technology changes writing! [joy]",
      "emotion": "joy",
      "viral_score": 83,
      "interest": 87,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Timekeeping Simplified: The End of Winding Clocks",
      "text": "Have you thought about how we don't have to wind up clocks and watches? Batteries and smart tech have simplified timekeeping, automating the process. Makes you think about how mechanisms evolve! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Online Ticketing: Revolutionizing Event Access",
      "text": "Hey, isn't it crazy we don't have to wait in line to buy concert tickets? Online sales have changed the game, making it easier to secure seats. Makes you think about how the internet reshapes experiences! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 82,
      "relatability": 87
    },
    {
      "title": "Instant Sharing: No More Mailing Film Rolls",
      "text": "Isn't it wild we don't send film rolls by mail for processing? Instant digital uploads are the new norm, expediting sharing. Makes you wonder what other processes have been expedited! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 82,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Communication Choices: From Answering Machines to Texts",
      "text": "Have you noticed nobody uses answering machines anymore? Voicemail and texting have taken over, giving us more options to communicate. Makes you think about how we prefer to communicate! [joy]",
      "emotion": "joy",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 84
    },
    {
      "title": "Personalized Viewing: On-Demand Entertainment",
      "text": "Hey, isn't it interesting we don't need to remember when our favorite shows air? On-demand viewing fits our schedules, personalizing media consumption. Makes you think about how media consumption is personalized! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 88,
      "interactivity": 82,
      "relatability": 86
    },
    {
      "title": "Unfolding Change: GPS Over Physical Maps",
      "text": "Isn't it crazy we don't use car maps or atlases anymore? GPS apps have made them unnecessary, offering real-time updates. Makes you wonder about the last time you unfolded a map! [smirk]",
      "emotion": "smirk",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Calculator Apps: Math Class in the Digital Age",
      "text": "Have you realized we don't have to carry calculators to math class? Calculator apps are readily available, integrating tools into our devices. Makes you think about how education tools have evolved! [joy]",
      "emotion": "joy",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Instant Photos: The End of Film Negatives",
      "text": "Hey, isn't it wild we don't have to wait for film negatives to see our photos? Digital cameras give us instant results, changing the creative process. Makes you wonder how patience plays a role in creativity! [smirk]",
      "emotion": "smirk",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Digital Storytelling: From Slides to Slideshows",
      "text": "Isn't it interesting we don't use slide projectors for presentations anymore? Digital slideshows have taken over, enhancing storytelling with multimedia. Makes you think about how technology enhances storytelling! [joy]",
      "emotion": "joy",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Accessible Editing: The Decline of Darkrooms",
      "text": "Have you noticed nobody develops photos in darkrooms unless for art? Digital editing has made the process more accessible, changing photography. Makes you think about how professions adapt! [surprise]",
      "emotion": "surprise",
      "viral_score": 75,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Contact Lists: Forgetting Friends' Numbers",
      "text": "Hey, isn't it crazy we don't have to remember our friends' phone numbers? Our contact lists handle that, altering how we recall information. Makes you wonder how memory reliance has shifted! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 82,
      "interactivity": 75,
      "relatability": 85
    },
    {
      "title": "E-Cards and Messages: Modern Greetings",
      "text": "Isn't it wild we don't send physical greeting cards as much anymore? E-cards and messages have become the standard, changing how we express sentiments. Makes you think about how we express sentiments! [joy]",
      "emotion": "joy",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 82
    },
    {
      "title": "Note-Taking Apps: Capturing Ideas Anywhere",
      "text": "Have you thought about how we don't need to carry around notebooks for jotting down ideas? Note-taking apps are always with us, capturing inspiration on the go. Makes you think about how we capture inspiration! [joy]",
      "emotion": "joy",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Digital Goods: Software Without Physical Copies",
      "text": "Hey, isn't it interesting we don't have to buy physical copies of software? Digital downloads and cloud services have changed distribution, hinting at what's next for digital goods. Makes you wonder what's next for digital goods! [surprise]",
      "emotion": "surprise",
      "viral_score": 85,
      "interest": 88,
      "interactivity": 82,
      "relatability": 85
    },
    {
      "title": "Streaming Music: Control at Our Fingertips",
      "text": "Isn't it crazy we don't need to wait for radio stations to play our favorite songs? We can stream them anytime, shifting control to the user. Makes you think about how control has shifted to the user! [joy]",
      "emotion": "joy",
      "viral_score": 88,
      "interest": 92,
      "interactivity": 85,
      "relatability": 87
    },
    {
      "title": "Cinema's Digital Shift: Film Reels to Projectors",
      "text": "Have you noticed nobody uses film reels for movies anymore? Digital projection has transformed cinemas, enhancing our viewing experience. Makes you think about how technology enhances our viewing experience! [joy]",
      "emotion": "joy",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Modern Appliances: No More Defrosting Freezers",
      "text": "Hey, isn't it wild we don't have to manually defrost our freezers? Modern appliances have made that a thing of the past, adding convenience to daily life. Makes you appreciate the little conveniences! [joy]",
      "emotion": "joy",
      "viral_score": 75,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Trusting Tech: From Written to GPS Directions",
      "text": "Isn't it interesting we don't need to write down directions anymore? GPS navigation guides us turn by turn, leading the way. Makes you think about how we trust technology to lead the way! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 82
    },
    {
      "title": "Interactive Menus: Flipping Through TV Guides No More",
      "text": "Have you realized we don't have to flip through TV guides? On-screen menus show us what's on, enhancing user experience. Makes you wonder about the evolution of user interfaces! [joy]",
      "emotion": "joy",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Knowledge at a Click: The Digital Dictionary",
      "text": "Hey, isn't it crazy we don't use physical dictionaries as much? Online definitions are just a click away, expanding our access to knowledge. Makes you think about how access to knowledge has expanded! [joy]",
      "emotion": "joy",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Always Connected: The End of Dial-Up Waiting",
      "text": "Isn't it wild we don't have to wait for dial-up internet to connect? High-speed connections keep us always online, changing our patience levels. Makes you wonder how we ever had the patience! [smirk]",
      "emotion": "smirk",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 83,
      "relatability": 87
    },
    {
      "title": "Digital Invites: Casual Events Go Online",
      "text": "Have you noticed nobody sends physical invitations to casual events anymore? Group messages and event pages handle that, streamlining social planning. Makes you think about how social planning has changed! [smirk]",
      "emotion": "smirk",
      "viral_score": 78,
      "interest": 82,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Entertainment Evolution: No More Rewinding Tapes",
      "text": "Hey, isn't it interesting we don't have to rewind VHS tapes after watching a movie? Streaming lets us skip right to the good parts, showcasing how far entertainment tech has come. Makes you appreciate how far entertainment tech has come! [joy]",
      "emotion": "joy",
      "viral_score": 83,
      "interest": 87,
      "interactivity": 80,
      "relatability": 85
    },
    {
      "title": "Digital Gaming: Board Games Go Online",
      "text": "Isn't it crazy we don't need to own a physical copy of a board game to play it? Digital versions let us play with friends anywhere, evolving gaming. Makes you think about how gaming has evolved! [joy]",
      "emotion": "joy",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 82,
      "relatability": 87
    },
    {
      "title": "Online Marketplaces: The New Classifieds",
      "text": "Have you thought about how we don't need to buy newspapers to get classifieds? Online marketplaces have taken over, adapting traditional media. Makes you wonder how traditional media adapts! [surprise]",
      "emotion": "surprise",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Medical Advancements: Digital X-Rays",
      "text": "Hey, isn't it wild we don't have to develop X-rays on film anymore? Digital imaging has revolutionized medicine, improving diagnostics. Makes you think about how tech advances save lives! [joy]",
      "emotion": "joy",
      "viral_score": 88,
      "interest": 92,
      "interactivity": 85,
      "relatability": 85
    },
    {
      "title": "Shopping Evolution: Digital Coupons Over Clippings",
      "text": "Isn't it interesting we don't need to use physical coupons clipped from newspapers? Digital coupons and promo codes are the new norm, changing shopping habits. Makes you think about how shopping has changed! [joy]",
      "emotion": "joy",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Nostalgic Tech: The End of Recording on Cassettes",
      "text": "Have you noticed nobody uses cassette tapes to record music off the radio? Digital downloads and streaming have replaced that ritual, sparking nostalgia. Makes you think about the nostalgia of old tech! [sadness]",
      "emotion": "sadness",
      "viral_score": 75,
      "interest": 80,
      "interactivity": 70,
      "relatability": 78
    },
    {
      "title": "Typing Takes Over: Essays Go Digital",
      "text": "Hey, isn't it crazy we don't need to handwrite essays in school? Typing and digital submissions are standard, questioning the future of handwriting. Makes you wonder about the future of handwriting! [sadness]",
      "emotion": "sadness",
      "viral_score": 78,
      "interest": 83,
      "interactivity": 75,
      "relatability": 80
    },
    {
      "title": "Weather Apps: Real-Time Updates Over Instruments",
      "text": "Isn't it wild we don't have to manually check the weather using instruments? Weather apps give us real-time updates, putting information at our fingertips. Makes you think about how information is at our fingertips! [joy]",
      "emotion": "joy",
      "viral_score": 80,
      "interest": 85,
      "interactivity": 78,
      "relatability": 83
    },
    {
      "title": "Presentation Made Easy: Slides Over Physical Slides",
      "text": "Have you realized we don't need to develop slides for presentations? Digital media has simplified the process, changing how we convey information. Makes you think about how we convey information! [joy]",
      "emotion": "joy",
      "viral_score": 82,
      "interest": 86,
      "interactivity": 80,
      "relatability": 84
    },
    {
      "title": "Uninterrupted Internet: No More Sharing Phone Lines",
      "text": "Hey, isn't it interesting we don't have to wait for someone to get off the phone to use the internet? Broadband and mobile data have changed connectivity, removing limitations. Makes you wonder what other limitations we've left behind! [smirk]",
      "emotion": "smirk",
      "viral_score": 85,
      "interest": 89,
      "interactivity": 83,
      "relatability": 87
    }
  ]
  
  
window.interestingPrompts = interestingPrompts;