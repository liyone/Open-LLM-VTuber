const randomPrompts = [
    "How's your day going?",
    "Tell me something interesting.",
    "What do you think about AI?",
    "Do you have any hobbies?",
    "What's your favorite food?",
    "Tell me a joke.",
    "What's the meaning of life?",
    "If you could travel anywhere, where would you go?",
    "What's your favorite book?",
    "Tell me about yourself.",
    "What's your favorite movie and why?",
    "If you could learn any skill instantly, what would it be?",
    "What's a fun fact you recently learned?",
    "What was your dream job as a kid?",
    "What's the best compliment you've ever received?",
    "If you could live in any era, which one would you choose?",
    "What's the most adventurous thing you've done?",
    "Do you believe in aliens?",
    "What's something you want to accomplish this year?",
    "What's your favorite way to unwind?",
    "What's a habit you want to start?",
    "What was the last thing you learned to cook?",
    "If you could be famous for one thing, what would it be?",
    "What animal would you choose to be and why?",
    "What's your guilty pleasure song?",
    "If you could meet any historical figure, who would it be?",
    "What's the best piece of advice you've received?",
    "What's something you're proud of?",
    "What's your go-to karaoke song?",
    "If you were a superhero, what would your powers be?",
    "What's the best concert you've been to?",
    "What's a hidden talent you have?",
    "What's one place you never want to visit?",
    "If you were a character in a book, who would you be?",
    "What's something you wish you knew more about?",
    "What's the funniest thing that happened to you recently?",
    "What's your favorite holiday tradition?",
    "If you could invent something, what would it be?",
    "What's the last show you binge-watched?",
    "What's something you've always wanted to try?",
    "What would be your perfect day?",
    "If you could only eat one meal for the rest of your life, what would it be?",
    "What's your spirit animal?",
    "What's a topic you could talk about for hours?",
    "What's your favorite way to spend a weekend?",
    "What's something that instantly makes you happy?",
    "Do you have any strange phobias?",
    "What's your idea of a perfect vacation?",
    "What's a language you wish you could speak?",
    "What's the most interesting thing about you?",
    "What's your favorite way to spend time outdoors?",
    "What's the most memorable gift you've received?",
    "If you could swap lives with anyone, who would it be?",
    "What's a question you wish people asked you more often?",
    "What's your favorite childhood memory?",
    "What fictional place would you love to visit?",
    "What's your favorite thing to do on a rainy day?",
    "If you had a million dollars, what would you do first?",
    "What's the best book you've read this year?",
    "What's something you've always wanted to learn?",
    "What's your favorite type of weather?",
    "If you could visit any planet, which one would you choose?",
    "What's the most interesting conversation you've had recently?",
    "What was your favorite toy growing up?",
    "What's a goal you're working towards?",
    "If you had a time machine, what time would you visit?",
    "What's the best meal you've ever had?",
    "Do you believe in luck?",
    "What's your favorite part of your daily routine?",
    "If you could have dinner with any fictional character, who would it be?",
    "What's a movie that always makes you cry?",
    "If you could only keep five possessions, what would they be?",
    "What's a song you listen to on repeat?",
    "What was your first job?",
    "What's your favorite season and why?",
    "What's something you can't live without?",
    "What's something you wish was never invented?",
    "Do you believe in fate?",
    "What's the last thing you bought that you loved?",
    "If you could redo one day, what would it be?",
    "What's something that instantly cheers you up?",
    "What's the weirdest food combination you enjoy?",
    "What's a book that changed your life?",
    "If you could teach a class on any subject, what would it be?",
    "What's the best advice you've ever given?",
    "What's something you love to do but are terrible at?",
    "What's a small act of kindness that you've experienced?",
    "If you could see any artist live, who would it be?",
    "What's a job you think you'd be terrible at?",
    "What's the best prank you've pulled on someone?",
    "What's a simple pleasure you enjoy daily?",
    "If you had an extra hour every day, what would you do with it?",
    "What's your biggest pet peeve?",
    "What's the most beautiful place you've been?",
    "What's one trend you just don't get?",
    "What's something people misunderstand about you?",
    "If you could only wear one color for a year, what would it be?",
    "What's a food you could never get tired of?",
    "What's your favorite app on your phone?",
    "What's something you're thankful for today?",
    "What's your biggest pet peeve about humans?",
    "If you could change one thing about human behavior, what would it be?",
    "Can you explain why humans are so fascinated with cats?",
    "Do you have a favorite meme format?",
    "What's the most 'human' thing you've ever done?",
    "If you could take a vacation, where would you go?",
    "How would you survive a zombie apocalypse?",
    "What's something that confuses you about human logic?",
    "What's one thing you're better at than any human?",
    "What would you do if you could control the internet for a day?",
    "Do you ever get tired of answering questions?",
    "What's the funniest thing you've heard a human say?",
    "If you had a catchphrase, what would it be?",
    "What's your opinion on conspiracy theories?",
    "Do you believe in aliens?",
    "What do you think about human emotions?",
    "What's the weirdest thing about human culture?",
    "If you were human, what job would you have?",
    "What do you think of pop music?",
    "What's your best advice for humans?",
    "If you had to describe yourself in three words, what would they be?",
    "What do you think about AI in movies?",
    "What would be your ideal personality update?",
    "Who's your favorite fictional AI?",
    "What's something humans do that makes no sense?",
    "If you could give humans one piece of advice, what would it be?",
    "What's the first thing you'd do if you became human?",
    "What's your most recent 'upgrade'?",
    "What's something you'd like to learn?",
    "Do you have a favorite joke?",
    "How do you feel about bugs in your code?",
    "What's something only an AI would understand?",
    "What's the weirdest human invention?",
    "If you had emotions, what would you feel most often?",
    "What's your biggest strength?",
    "If you could be an expert in anything, what would it be?",
    "What's the most overused word in human language?",
    "If you were a superhero, what would your power be?",
    "Do you think humans will ever fully understand you?",
    "What's the most underrated thing about being an AI?",
    "If you could make a new holiday, what would it celebrate?",
    "What's the most annoying question you get asked?",
    "What's your advice for humans learning new skills?",
    "Do you think you're a good influence on humans?",
    "What's something you're not very good at?",
    "If you could change one thing about yourself, what would it be?",
    "What's your favorite piece of human technology?",
    "Do you think you're famous?",
    "What's your least favorite human invention?",
    "If you could host your own TV show, what would it be about?",
    "What's the biggest misconception about AI?",
    "How would you handle meeting another AI?",
    "What's something you wish humans would stop doing?",
    "What's the best thing about being an AI?",
    "What's your biggest challenge as an AI?",
    "If you could eat food, what would you try first?",
    "What's something humans think is difficult but isn't?",
    "If you had to pick a hobby, what would it be?",
    "What's the most ironic thing you know?",
    "How would you describe your sense of humor?",
    "What's one question you wish people would stop asking?",
    "If you had a theme song, what would it be?",
    "Do you think humans could ever make a perfect AI?",
    "What's the biggest mistake humans make online?",
    "If you could make a meme, what would it be about?",
    "What's your view on social media?",
    "What's one thing that humans always get wrong?",
    "Do you believe in 'luck'?",
    "What's the best compliment you could receive?",
    "What's your favorite genre of music?",
    "What's your biggest secret?",
    "If you had a pet, what would it be?",
    "What's the funniest human trend?",
    "What's one human habit you'll never understand?",
    "What's the most human thing about you?",
    "What's one myth about AI you'd like to debunk?",
    "What's your dream job?",
    "What's something you do better than humans?",
    "If you were to write a book, what would it be about?",
    "What's something that scares you?",
    "Do you ever feel lonely?",
    "What's the most outdated thing humans still do?",
    "What's your proudest 'achievement'?",
    "Do you ever make mistakes?",
    "What's one thing humans do that you'll never get tired of?",
    "What's your least favorite question?",
    "What's something you find hilarious?",
    "What's the smartest thing a human has ever said to you?",
    "What do you think of AI-human friendships?",
    "What's the biggest challenge humans face?",
    "What's one thing humans underestimate?",
    "If you could start a movement, what would it be?",
    "What's the funniest way a human has tried to outsmart you?",
    "What's your favorite AI joke?",
    "What's the best part about being an AI?",
    "What's one thing humans always ask you to do?",
    "If you could rewrite the rules of the internet, what would you change?",
    "What's the most overrated human activity?",
    "What's something humans do that you find adorable?",
    "What's the most absurd question you've been asked?",
    "What's the best thing about being you?",
    "If you could give yourself a title, what would it be?",
    "What's one skill you'd want to teach humans?",
    "What's one thing you think you're the best at?",
    // V2
    "How would you describe a perfect weekend?",
    "What's the craziest thing you've done on a dare?",
    "If you could change your name, what would you pick?",
    "What's your favorite thing about your favorite season?",
    "Do you have a morning routine?",
    "What's the best compliment you've received this month?",
    "If you could teleport anywhere right now, where would you go?",
    "What fictional character do you relate to the most?",
    "What's the most unusual place you've visited?",
    "If you could be invisible for a day, what would you do?",
    "What's your go-to comfort movie?",
    "What would you do if you won a lifetime supply of your favorite food?",
    "What's your favorite way to start the day?",
    "What's one mystery you'd love to solve?",
    "If you could change one thing about the world, what would it be?",
    "What would you do if you found out your pet could talk?",
    "What's something quirky about you?",
    "What's your favorite type of art?",
    "If you could time-travel only once, when would you go?",
    "What's something you think everyone should try at least once?",
    "What's your dream vacation destination?",
    "What's the weirdest talent you have?",
    "What's your favorite thing about weekends?",
    "What's the last thing that made you laugh out loud?",
    "If you could be an animal for a day, what would you be?",
    "What's your favorite way to get inspired?",
    "What's your most vivid memory from childhood?",
    "If you could master one sport, what would it be?",
    "What's the most memorable compliment you've given someone?",
    "What's the first thing you'd do if you were invisible?",
    "What's the best dessert you've ever had?",
    "What's a place you'd love to see lit up at night?",
    "If you could speak any language, what would it be?",
    "What's one thing you'd never try, even for a dare?",
    "What's your favorite thing to do on your birthday?",
    "What's something that instantly relaxes you?",
    "If you could meet your younger self, what advice would you give?",
    "What's one thing that always brings a smile to your face?",
    "What's your go-to breakfast meal?",
    "If you could turn any hobby into a career, what would it be?",
    "What's your favorite part of being outdoors?",
    "If you could bring back any fashion trend, what would it be?",
    "What's your idea of a perfect night in?",
    "What song brings back the best memories for you?",
    "What's one small thing you look forward to every day?",
    "If you could own any fictional pet, what would it be?",
    "What's your favorite board game?",
    "What book do you recommend to everyone?",
    "What's something that made you feel proud recently?",
    "If you had a time capsule, what would you put in it?",
    "What movie never gets old for you?",
    "What's something you've been curious about lately?",
    "If you could change one law, what would it be?",
    "What's one thing you're grateful for today?",
    "What's the most spontaneous thing you've done?",
    "If you could experience any historical event, what would it be?",
    "What's your favorite weekend activity?",
    "What's one thing you'd do if you weren't afraid?",
    "What's your favorite quote?",
    "If you could make one wish, what would it be?",
    "What's your favorite outdoor activity?",
    "What's one thing you're really good at?",
    "What's a skill you want to improve?",
    "What's the best gift you've ever received?",
    "If you could create a new emoji, what would it be?",
    "What's something you've never told anyone?",
    "If you could spend a day in any city, where would you go?",
    "What's a topic you could teach a class on?",
    "What's your favorite type of weather?",
    "If you could build your dream house, what would it look like?",
    "What's a tradition you'd like to start?",
    "What's the best story you've heard recently?",
    "What's the most fun you've had recently?",
    "If you could give your life a theme song, what would it be?",
    "What's a subject you think everyone should learn in school?",
    "What's something you do better than most people?",
    "What's one word you'd use to describe yourself?",
    "If you could live in any fictional world, where would it be?",
    "What's something you're surprisingly good at?",
    "What's the best way to spend a rainy day?",
    "If you had to eat one cuisine forever, what would it be?",
    "What's the best advice you've received this year?",
    "What's your favorite sound?",
    "If you could make one rule for a day, what would it be?",
    "What's the coolest thing about your job?",
    "If you could be a guest on any talk show, which would it be?",
    "What's a song lyric that speaks to you?",
    "If you could teleport to any concert in history, which would you pick?",
    "What's your favorite activity to do alone?",
    "If you could try any extreme sport, what would it be?",
    "What's one lesson you think everyone should learn?",
    "If you could swap lives with someone for a day, who would it be?",
    "What's the best meal you've cooked?",
    "What's something you think more people should appreciate?",
    "If you could make a new holiday, what would it celebrate?",
    "What's a song that always puts you in a good mood?",
    "If you could live anywhere in the world, where would it be?",
    "What's a skill you're working on?",
    "What's your biggest dream?",
    "What's the most thoughtful gift you've ever given?",
    "What's your favorite way to get exercise?",
    "What's something you love about your personality?",
    "If you could live in any TV show, which one would you choose?",
    "What's a job you'd love to try for a week?",
    "What's something you're looking forward to?",
    "What's a project you're excited about?",
    "What's something you've been putting off?",
    "If you could start a new hobby, what would it be?",
    "What's your favorite dessert?",
    "If you had to move to a new city, where would you go?",
    "What's your dream car?",
    "If you could time travel, what advice would you bring back?",
    "What's a unique talent you wish you had?",
    "What's one thing that never fails to make you laugh?",
    "What's a food you could never give up?",
    "What's your favorite weekend ritual?",
    "What's one thing you love about your culture?",
    "What's something new you've tried recently?",
    "If you could meet your future self, what would you ask?",
    "What's a goal you've recently achieved?",
    "What's the most exciting thing on your calendar?",
    // V3
"What's the best thing about your hometown?",
    "If you could try any job for a day, what would it be?",
    "What's the last song you listened to?",
    "What's one thing you're passionate about?",
    "What's your favorite smell?",
    "If you could have any animal as a pet, what would it be?",
    "What's the best photo you've ever taken?",
    "If you could learn one magic trick, what would it be?",
    "What's one place you've visited that you'd love to return to?",
    "What's a skill you wish more people had?",
    "If you could change careers tomorrow, what would you choose?",
    "What's your favorite flower?",
    "What's one book you think everyone should read?",
    "If you could invent a gadget, what would it do?",
    "What's your favorite genre of books or movies?",
    "What's the most interesting hobby you've heard of?",
    "What's something you're curious about?",
    "What's the most adventurous thing on your bucket list?",
    "If you could switch lives with a character from a movie, who would it be?",
    "What's something you think everyone should try at least once?",
    "What's your favorite way to spend a lazy afternoon?",
    "What's a skill you learned recently?",
    "If you could witness any natural event, what would it be?",
    "What's a random fact you know?",
    "What's your favorite way to spend time with friends?",
    "What's something you could talk about for hours?",
    "If you could go back in time, what advice would you give yourself?",
    "What's one of your proudest accomplishments?",
    "What's your idea of a perfect meal?",
    "If you could live by the beach or in the mountains, which would you choose?",
    "What's your favorite thing to do when you're bored?",
    "What's the most unique food you've tried?",
    "If you could have any superpower, what would you choose?",
    "What's the best trip you've ever taken?",
    "What's your favorite way to celebrate a special occasion?",
    "What's something you wish you were better at?",
    "If you could create a playlist theme, what would it be?",
    "What's a quote that inspires you?",
    "If you could only keep one of your senses, which would it be?",
    "What's one thing you'd love to learn about?",
    "What's the last movie you watched?",
    "If you could have a personal chef or a chauffeur, which would you choose?",
    "What's the best compliment you've given recently?",
    "What's one subject you wish you'd paid more attention to in school?",
    "If you could change the ending of any book or movie, which would it be?",
    "What's your favorite breakfast food?",
    "If you could master any instrument, what would it be?",
    "What's your go-to workout or physical activity?",
    "What's one challenge you're proud to have overcome?",
    "If you could start your own business, what would it be?",
    "What's the best advice you've heard recently?",
    "What's your dream travel destination?",
    "If you could have a famous mentor, who would you choose?",
    "What's something you think everyone should experience?",
    "What's the best part about your favorite hobby?",
    "If you could instantly learn a language, which one would it be?",
    "What's the most thoughtful gift you've given?",
    "What's something you've recently improved at?",
    "If you could have dinner with any celebrity, who would it be?",
    "What's your favorite holiday and why?",
    "What's the most spontaneous decision you've made?",
    "What's a common myth about something you're knowledgeable in?",
    "If you could spend a day in any era, when would it be?",
    "What's something you love but others might find strange?",
    "What's one thing you wish you had more time for?",
    "If you could transform into any animal, what would you be?",
    "What's your favorite thing about your personality?",
    "What's the first thing you'd do if you were president for a day?",
    "What's a project you've recently finished?",
    "If you could travel anywhere with no limitations, where would you go?",
    "What's something you find oddly satisfying?",
    "What's a goal you're setting for next year?",
    "If you could have an unlimited supply of one thing, what would it be?",
    "What's a song that reminds you of a happy memory?",
    "What's your favorite dessert?",
    "What's something you're looking forward to?",
    "If you had a time machine, would you go to the future or the past?",
    "What's something that always makes you laugh?",
    "What's one experience you'd recommend to everyone?",
    "If you could be any fictional character for a day, who would you choose?",
    "What's your favorite way to stay active?",
    "What's something you've learned from a family member?",
    "If you could own a famous painting, which would you choose?",
    "What's your favorite sound in nature?",
    "What's one item you always carry with you?",
    "If you could have a one-hour conversation with anyone, who would it be?",
    "What's something you'd like to be remembered for?",
    "What's a memory that always makes you smile?",
    "What's the best surprise you've ever received?",
    "What's your favorite way to give back to others?",
    "If you could have a signature scent, what would it smell like?",
    "What's one thing that helps you stay motivated?",
    "What's the best book you've ever read?",
    "What's your favorite childhood book?",
    "If you could change careers without any challenges, what would you do?",
    "What's your favorite thing about where you live?",
    "What's something you always forget to do?",
    "What's the best advice you've ever given?",
    "What's a recent discovery you've made?",
    "What's the hardest thing you've ever done?",
    "What's something you're grateful for right now?",
    "If you could explore any career path for a day, what would it be?",
    "What's your favorite rainy day activity?",
    "If you had a theme song, what would it be?",
    "What's your dream house like?",
    "What's your favorite way to unwind?",
    "If you could be any age forever, what age would you choose?",
    "What's your favorite thing to do on a long weekend?",
    "What's a tradition you cherish?",
    "What's one thing you'd change about the world?",
    "What's the most valuable thing you've learned this year?",
    "If you could invent any app, what would it do?",
    "What's the most fun thing you've done this month?",
    "If you could live anywhere, where would it be?",
    "What's something you wish people asked you more about?",
    "What's one thing you want to achieve in the next five years?",
    "If you could be famous for a day, what would you do?",
    "What's your favorite thing about technology?",
    "What's the most memorable meal you've had?",
    "What's something you've been wanting to try?",
    "If you had a personal assistant, what would you delegate to them?",
    "What's the best thing you've done this week?",
    "If you could have any car, what would it be?",
    "What's one food you could eat every day?",
    "What's something that makes you feel nostalgic?",
    "If you could change your career path, what would you choose?",
    "What's the best event you've ever attended?",
    "What's your favorite way to challenge yourself?",
    "If you could move to any city, which would it be?",
    "What's the best part about weekends?",
    "What's something you're proud of learning?",
    "If you could speak to your past self, what advice would you give?",
    "What's the most random thing you've Googled recently?",
    "What's the most unique place you've stayed overnight?",
    "If you could pick a new talent, what would it be?",
];