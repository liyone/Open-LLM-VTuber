const interestingPrompts = [
    {
      "title": "The Monkey Who Reached for the Moon",
      "text": "In a tranquil forest, a group of monkeys played under the starlit sky. Suddenly, one monkey gazed into a well and exclaimed, \"The moon has fallen into the well! We must save it!\" The others gathered around, peering into the water where the moon's reflection shimmered. Determined to rescue it, they decided to form a chain by holding onto each other's tails and arms, reaching down into the well. Just as they nearly touched the reflection, the branch supporting them snapped! All the monkeys tumbled into the water, splashing and chattering in surprise. Climbing out, they looked up and saw the moon shining brightly in the sky. They realized the moon was never in the well—it was just a reflection. The monkeys laughed at their mistake, learning that things aren't always what they seem and that it's important to think before acting.",
      "emotion": "joy",
      "viral_score": 90,
      "interest": 92,
      "interactivity": 85,
      "relatability": 88
    },
    {
      "title": "The Jade Rabbit's Gift",
      "text": "Long ago, in a peaceful forest, a kind rabbit lived alongside a fox and a monkey. One day, a weary traveler passed by, hungry and tired. The fox caught fish for him, and the monkey gathered fruit, but the rabbit had nothing to offer. Feeling sorry, the rabbit said to the traveler, \"I have nothing suitable to give you, but I offer you my friendship and company.\" Touched by the rabbit's sincerity, the traveler revealed himself to be a celestial being. He said, \"Your kindness is a gift in itself.\" To honor the rabbit's goodwill, he took him to the moon to live as the Jade Rabbit. From then on, the Jade Rabbit became a symbol of generosity and compassion, reminding everyone of the importance of selfless acts.",
      "emotion": "joy",
      "viral_score": 92,
      "interest": 94,
      "interactivity": 88,
      "relatability": 90
    },
    {
      "title": "The Race of the Zodiac Animals",
      "text": "The Jade Emperor decided to hold a grand race to determine the order of the animals in the zodiac. He declared, \"The first twelve animals to cross the river will earn a place in the zodiac calendar.\" The diligent ox agreed to carry the clever rat across the river. As they neared the other side, the rat leaped ahead, becoming the first to finish. The ox came second, followed by the tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog, and pig. The cat, who had been tricked by the rat and missed the race, was left out of the zodiac. This story explains the origins of the Chinese zodiac and teaches about the values of cleverness, diligence, and the consequences of deceit.",
      "emotion": "smirk",
      "viral_score": 88,
      "interest": 90,
      "interactivity": 83,
      "relatability": 85
    },
    {
      "title": "The Legend of Nian and the New Year",
      "text": "In a village near the mountains, people lived in fear of a beast called Nian that appeared every New Year's Eve. Nian would scare the villagers and disrupt their peaceful lives. One year, a wise old man suggested, \"Let's decorate our homes with red lanterns and make loud noises to frighten Nian away.\" The villagers hung red banners and set off firecrackers. When Nian arrived, the bright colors and loud sounds scared him off, and he never returned. From that day on, the villagers celebrated their victory every year with red decorations and fireworks. This became the tradition of the Lunar New Year, symbolizing the triumph of courage and unity over fear.",
      "emotion": "joy",
      "viral_score": 95,
      "interest": 98,
      "interactivity": 92,
      "relatability": 91
    },
    {
      "title": "Ma Liang and His Magic Paintbrush",
      "text": "Ma Liang was a poor boy who loved to draw but couldn't afford a paintbrush. One night, he dreamed of receiving a magic paintbrush that could bring his drawings to life. When he woke up, the brush was beside him! Overjoyed, Ma Liang used it to help his village by painting food, rivers, and tools that became real. A greedy official heard of this and demanded the brush, but Ma Liang refused. The official stole it and tried to paint gold, but his creations turned into rocks. Ma Liang retrieved his brush and continued to use it to help others, teaching that talents should be used for good and that greed leads to downfall.",
      "emotion": "joy",
      "viral_score": 98,
      "interest": 99,
      "interactivity": 95,
      "relatability": 93
    },
    {
      "title": "Chang'e's Journey to the Moon",
      "text": "In ancient times, there were ten suns in the sky, causing great suffering on Earth. The skilled archer Hou Yi shot down nine of them, leaving just one to provide light and warmth. As a reward, he received an elixir of immortality. Not wanting to live forever without his beloved wife Chang'e, he decided to hide the elixir. A selfish man attempted to steal it while Hou Yi was away. To protect it, Chang'e drank the elixir herself. She began to float upwards and found herself on the moon, where she resides to this day. Hou Yi was heartbroken but looked up at the moon each night, finding comfort knowing that Chang'e was watching over him. Their story is remembered during the Mid-Autumn Festival, symbolizing love and sacrifice.",
      "emotion": "sadness",
      "viral_score": 90,
      "interest": 92,
      "interactivity": 85,
      "relatability": 87
    },
    {
      "title": "The Foolish Old Man Moves the Mountain",
      "text": "An old man named Yu Gong lived with his family beside two enormous mountains that blocked their way to the village. Tired of the long detour, Yu Gong declared, \"Let’s move these mountains!\" His neighbors laughed, but he and his family began digging, day after day. A wise man scoffed, \"You can't move mountains at your age!\" Yu Gong replied, \"When I die, my children will continue, and their children after them. The mountains won't grow any larger, but our efforts will never stop.\" The gods, moved by his determination, sent celestial beings to carry the mountains away. The story teaches that perseverance and collective effort can overcome even the greatest obstacles.",
      "emotion": "joy",
      "viral_score": 92,
      "interest": 94,
      "interactivity": 88,
      "relatability": 89
    },
    {
      "title": "The Clever Magistrate Bao Zheng",
      "text": "In ancient China, Magistrate Bao Zheng was known for his wisdom and fairness. One day, two women came to him, each claiming to be the mother of the same baby. Unable to determine the true mother, Bao Zheng said, \"I will divide the child so you both may share.\" The first woman agreed, but the second woman cried out, \"Please, let her have the baby! Do not harm him.\" Bao Zheng smiled and declared the second woman the true mother, recognizing her genuine love and willingness to sacrifice for her child. This story highlights the importance of wisdom and compassion in making just decisions.",
      "emotion": "joy",
      "viral_score": 94,
      "interest": 96,
      "interactivity": 90,
      "relatability": 92
    },
    {
      "title": "The Dragon King's Daughter",
      "text": "A kind-hearted girl named Li Na lived by the sea, often helping others in her village. One day, she saved a small fish trapped in a net and released it back into the ocean. The next day, a beautiful woman appeared, revealing herself as the Dragon King's daughter. \"You saved me in my fish form,\" she said. \"To thank you, I grant you a wish.\" Li Na wished for her village to have abundant harvests and peaceful seas. The Dragon King's daughter fulfilled her wish, and the village prospered. Li Na's selfless act brought blessings to all, teaching that kindness is rewarded in unexpected ways.",
      "emotion": "joy",
      "viral_score": 90,
      "interest": 93,
      "interactivity": 88,
      "relatability": 90
    },
    {
      "title": "The Boy and the Painted Dragon",
      "text": "A young artist named Wei loved to paint dragons. His dragons were so lifelike that people marveled at his talent. One day, he decided to paint a dragon without eyes on the village wall. Curious villagers asked why. Wei replied, \"If I paint the eyes, the dragon might come to life.\" They laughed and urged him to complete it. Relenting, Wei added the eyes. Suddenly, the dragon shook, broke free from the wall, and soared into the sky! The villagers watched in awe as the dragon disappeared among the clouds. Wei learned that art has power, and one must be mindful of the consequences of their creations.",
      "emotion": "surprise",
      "viral_score": 88,
      "interest": 90,
      "interactivity": 85,
      "relatability": 87
    },
    {
      "title": "The Shepherd Boy and the Weaving Maiden",
      "text": "High in the heavens, the Weaving Maiden, a celestial being, spent her days creating beautiful clouds. One day, she looked down and saw a kind shepherd boy named Niulang. Curious about life on Earth, she descended, and they fell in love. When the Queen Mother of the West discovered this, she was furious and separated them by a vast celestial river, the Milky Way. Moved by their love, magpies formed a bridge once a year, on the seventh day of the seventh lunar month, allowing them to reunite. This story explains the origin of the Qixi Festival, celebrating love and devotion that overcome all barriers.",
      "emotion": "joy",
      "viral_score": 92,
      "interest": 95,
      "interactivity": 90,
      "relatability": 91
    },
    {
      "title": "The Lotus Lantern",
      "text": "A goddess named San Sheng Mu fell in love with a mortal scholar named Liu Yanchang. They married and had a son, Chen Xiang. However, their union was forbidden by heavenly laws. San Sheng Mu's brother, Erlang Shen, imprisoned her beneath a mountain to separate them. Years later, Chen Xiang learned of his mother's fate. Determined to rescue her, he trained diligently and obtained the magical Lotus Lantern. With its power, he split the mountain and freed his mother. Their reunion showed that courage and filial piety can triumph over injustice and that love is a force stronger than any obstacle.",
      "emotion": "joy",
      "viral_score": 90,
      "interest": 93,
      "interactivity": 88,
      "relatability": 89
    },
    {
      "title": "Mulan: The Brave Warrior",
      "text": "When the emperor called for soldiers to defend the kingdom, Mulan's elderly father was summoned. Concerned for his health, Mulan disguised herself as a man and took his place in the army. She fought bravely for years, earning respect for her courage and skill. After the war, the emperor offered her a high position, but she declined and returned home. When her fellow soldiers visited her, they were astonished to discover she was a woman. Mulan's story teaches about honor, family devotion, and breaking societal expectations to do what's right.",
      "emotion": "joy",
      "viral_score": 95,
      "interest": 97,
      "interactivity": 92,
      "relatability": 93
    },
    {
      "title": "The Old Man and His Horse",
      "text": "An old man named Sai Weng owned a beautiful horse that ran away one day. His neighbors said, \"What bad luck!\" Sai Weng replied, \"Who knows? It might be good fortune.\" Soon, the horse returned with a companion—a strong stallion. The neighbors exclaimed, \"What great luck!\" Sai Weng responded, \"Who knows? It might bring misfortune.\" Later, his son tried to ride the new horse, fell, and broke his leg. The neighbors offered sympathy, but Sai Weng remained indifferent. Shortly after, soldiers came to recruit young men for war but left his son due to his injury. The story illustrates that events are not always as they seem and teaches acceptance of life's ups and downs.",
      "emotion": "neutral",
      "viral_score": 88,
      "interest": 90,
      "interactivity": 85,
      "relatability": 87
    },
    {
      "title": "The Foolish Donkey",
      "text": "A merchant led his donkey laden with bags of salt to market. They had to cross a river, and the donkey slipped, causing the salt to dissolve. Delighted at the lighter load, the donkey purposely fell the next day. The merchant realized the donkey's trick. On the following trip, he loaded the donkey with sponges. This time, when the donkey fell, the sponges soaked up water, making the load even heavier. The donkey learned a lesson about trying to avoid work through deceit, understanding that honesty is the better path.",
      "emotion": "smirk",
      "viral_score": 85,
      "interest": 88,
      "interactivity": 82,
      "relatability": 84
    },
    {
      "title": "Yu the Great Controls the Flood",
      "text": "In ancient times, devastating floods plagued the land. A man named Yu was determined to stop them. Instead of building dams like others before him, Yu dug channels and canals to direct the water to the sea. He worked tirelessly for thirteen years, even passing his home without stopping to ensure the work continued. His efforts succeeded, taming the floods and saving countless lives. Yu's dedication and innovative thinking earned him great respect, and he became a legendary ruler. His story teaches the value of perseverance, selflessness, and finding new solutions to old problems.",
      "emotion": "joy",
      "viral_score": 93,
      "interest": 95,
      "interactivity": 90,
      "relatability": 91
    },
    {
      "title": "The Farmer and the Snake",
      "text": "On a cold winter's day, a kind farmer found a frozen snake on the path. Feeling sorry for it, he picked it up and placed it inside his coat to warm it. As the snake revived, it bit the farmer. Shocked, he asked, \"Why did you bite me when I saved your life?\" The snake replied, \"It's in my nature.\" The farmer realized that some creatures act according to their nature, and one should be cautious. The story teaches about understanding others and being careful when extending trust.",
      "emotion": "sadness",
      "viral_score": 80,
      "interest": 83,
      "interactivity": 78,
      "relatability": 82
    },
    {
      "title": "The Giant Panda's Gift",
      "text": "In a bamboo forest, all the animals lived in harmony. One day, a severe drought struck, and food became scarce. A wise giant panda found a hidden grove of bamboo and decided to share it with all the animals. Grateful, the animals asked how they could repay the panda. The panda smiled and said, \"By caring for each other and protecting our home.\" Inspired by the panda's generosity, the animals worked together to conserve resources and support one another until the rains returned. The story highlights the importance of community, sharing, and environmental stewardship.",
      "emotion": "joy",
      "viral_score": 88,
      "interest": 90,
      "interactivity": 85,
      "relatability": 88
    },
    {
      "title": "The Fox Borrows the Tiger's Might",
      "text": "A fox was caught by a tiger and, to save himself, he declared, \"I am the king of the forest! If you release me, I'll prove it.\" Curious, the tiger let him go. The fox led the tiger through the forest, and all the animals they passed fled in fear. The tiger didn't realize they were actually afraid of him, not the fox. Proud of himself, the fox said, \"See how the animals fear me?\" The tiger believed the fox and let him go. The story teaches about deception and warns against being easily fooled by appearances.",
      "emotion": "smirk",
      "viral_score": 85,
      "interest": 87,
      "interactivity": 82,
      "relatability": 84
    },
    {
      "title": "The Mouse Bride",
      "text": "A family of mice wanted their daughter to marry the most powerful being in the world. They approached the sun, but the sun said, \"The cloud can block me.\" They asked the cloud, who replied, \"The wind can blow me away.\" The wind admitted, \"The wall stops me.\" When they asked the wall, it said, \"The mouse can gnaw at me.\" Realizing that a mouse was the most powerful to them, they arranged for their daughter to marry a humble, kind mouse from their own community. The story teaches that true value and strength can often be found close to home.",
      "emotion": "joy",
      "viral_score": 88,
      "interest": 90,
      "interactivity": 85,
      "relatability": 87
    },
    {
      "title": "The Three Monks",
      "text": "In a mountain temple, a young monk lived alone and fetched water daily from a distant river. Another monk joined him, and they shared the task, carrying water together. When a third monk arrived, none of them wanted to fetch water, each thinking the others should do it. One night, a fire broke out, and they realized they needed to work together to save the temple. After that, they cooperated in all tasks. The story highlights the importance of teamwork and the idea that shared effort leads to shared benefit.",
      "emotion": "joy",
      "viral_score": 90,
      "interest": 92,
      "interactivity": 88,
      "relatability": 89
    },
    {
        "title": "The Emperor's New Clothes",
        "text": "An emperor who loved fine clothes hired two tailors who promised to make him the most exquisite suit ever seen, using a special fabric invisible to anyone unfit for their position or foolish. The tailors, who were swindlers, made nothing at all but pretended to weave and sew. When the emperor tried on his 'new clothes,' he saw nothing but didn't want to appear unworthy. His courtiers did the same. As he paraded through the city, everyone pretended to admire his outfit until a child exclaimed, 'The emperor has no clothes!' The crowd realized the truth, and the emperor blushed, learning that honesty is valuable, and pride can lead to foolishness.",
        "emotion": "smirk",
        "viral_score": 95,
        "interest": 97,
        "interactivity": 90,
        "relatability": 93
      },
      {
        "title": "The Golden Goose",
        "text": "A farmer's youngest son was kind to a little old man who advised him to cut down a particular tree. Inside, he found a goose with feathers of pure gold. He took the goose to an inn, and when the innkeeper's daughters tried to pluck a feather, they became stuck to it and to each other. As the son walked on, more people tried to pull them free but ended up stuck as well. A princess who never laughed saw the ridiculous procession and burst into laughter. The king, delighted, allowed the son to marry her. The story teaches that kindness leads to unexpected rewards, and joy can be found in simple things.",
        "emotion": "joy",
        "viral_score": 90,
        "interest": 93,
        "interactivity": 88,
        "relatability": 90
      },
      {
        "title": "The Tortoise and the Hare",
        "text": "The swift hare mocked the slow tortoise, boasting about his speed. Tired of the taunts, the tortoise challenged the hare to a race. Confident, the hare sprinted ahead and decided to take a nap midway. The tortoise continued steadily and passed the sleeping hare. When the hare awoke, he raced to the finish but found the tortoise had already won. The hare learned that arrogance and overconfidence can lead to failure, while perseverance and determination bring success.",
        "emotion": "smirk",
        "viral_score": 88,
        "interest": 90,
        "interactivity": 85,
        "relatability": 87
      },
      {
        "title": "The Wise Old Owl",
        "text": "A young bird noticed that the wise old owl in the tree observed everything but said very little. Curious, the bird asked, 'Why do you speak so little?' The owl replied, 'The more I see and hear, the less I speak. Words are powerful, and silence often teaches us more.' The young bird began to listen more and speak less, discovering the value of observation and thoughtfulness. The story highlights the importance of listening and learning before speaking.",
        "emotion": "neutral",
        "viral_score": 85,
        "interest": 87,
        "interactivity": 82,
        "relatability": 84
      },
      {
        "title": "The Grasshopper and the Ants",
        "text": "All summer long, the grasshopper sang and relaxed while the ants worked hard gathering food for winter. When the cold arrived, the grasshopper found himself hungry and freezing. He asked the ants for food and shelter. The ants reminded him of his laziness but felt compassion and shared their provisions. The grasshopper learned the importance of hard work and planning for the future, promising to contribute next time. The story teaches about responsibility, foresight, and generosity.",
        "emotion": "joy",
        "viral_score": 90,
        "interest": 92,
        "interactivity": 88,
        "relatability": 89
      },
      {
        "title": "The Lion's Share",
        "text": "A lion, a fox, and a wolf went hunting together and caught a deer. The lion asked the wolf to divide the spoils. The wolf divided it into three equal parts. The lion, displeased, attacked the wolf. Then he asked the fox, who placed almost all of it before the lion, leaving a tiny portion for himself. The lion asked, 'Who taught you to divide so well?' The fox replied, 'The wolf's fate was my lesson.' The story illustrates the dangers of unequal power and the wisdom of adapting to circumstances.",
        "emotion": "fear",
        "viral_score": 80,
        "interest": 83,
        "interactivity": 78,
        "relatability": 82
      },
      {
        "title": "The Boy Who Harnessed the Wind",
        "text": "In a small village plagued by drought, a boy named Koto loved to tinker with machines. Seeing his village suffer, he decided to build a windmill to pump water from underground. Despite ridicule and lack of resources, he collected scraps and studied tirelessly. Finally, he built the windmill, bringing water to the fields and hope to his people. The villagers celebrated Koto's ingenuity and determination. The story teaches that innovation, education, and perseverance can overcome great challenges.",
        "emotion": "joy",
        "viral_score": 95,
        "interest": 98,
        "interactivity": 92,
        "relatability": 91
      },
      {
        "title": "The Hidden Treasure",
        "text": "A farmer, nearing the end of his life, called his lazy sons and said, 'I've buried a treasure in our fields. Dig deep, and you'll find it.' After he passed away, the sons eagerly dug every inch of the land but found nothing. However, the digging loosened the soil, leading to a bountiful harvest. The sons realized that hard work was the true treasure their father had left them. The story emphasizes the value of labor and the rewards it brings.",
        "emotion": "joy",
        "viral_score": 90,
        "interest": 92,
        "interactivity": 88,
        "relatability": 89
      },
      {
        "title": "The Magic Porridge Pot",
        "text": "A kind girl helped an old woman who gifted her a magic porridge pot that cooked endless porridge when she said, 'Cook, little pot, cook,' and stopped when she said, 'Stop, little pot.' One day, her mother forgot the stopping words, and the pot kept cooking, filling the house and flowing into the streets. The girl returned and stopped the pot, but the village had to eat porridge for days. The story teaches about responsibility and the consequences of forgetting important instructions.",
        "emotion": "smirk",
        "viral_score": 88,
        "interest": 90,
        "interactivity": 85,
        "relatability": 87
      },
      {
        "title": "The Princess and the Pea",
        "text": "A prince sought a true princess to marry but found none to his liking. One stormy night, a drenched girl knocked on the castle door, claiming to be a princess. To test her, the queen placed a pea under twenty mattresses and twenty feather beds where the girl would sleep. In the morning, the girl complained of a terrible night's sleep due to something hard in the bed. Realizing only a true princess would feel the pea, they welcomed her into the family. The story highlights the idea of genuine identity and the lengths people may go to find authenticity.",
        "emotion": "joy",
        "viral_score": 85,
        "interest": 88,
        "interactivity": 82,
        "relatability": 84
      },
      {
        "title": "The Little Red Hen",
        "text": "The Little Red Hen found some wheat grains and asked her friends—Dog, Cat, and Duck—to help plant them. They all refused. She planted, harvested, and baked bread by herself. When the bread was ready, her friends wanted to help eat it. The Little Red Hen said, 'No, since you didn't help me, I will eat it myself.' She enjoyed the bread alone, and the friends learned that participation is necessary to share in rewards. The story teaches about hard work, responsibility, and fairness.",
        "emotion": "smirk",
        "viral_score": 90,
        "interest": 93,
        "interactivity": 88,
        "relatability": 89
      },
      {
        "title": "The Elves and the Shoemaker",
        "text": "A poor shoemaker had only enough leather for one pair of shoes. Leaving the cut leather on his workbench, he went to bed. In the morning, he found a beautifully crafted pair of shoes, which sold quickly. This happened for several nights. Curious, he stayed up and saw little elves working diligently on the shoes. Grateful, he and his wife made clothes and shoes for the elves. The elves were delighted and danced away, never to return, but the shoemaker prospered. The story teaches about gratitude, kindness, and the magic of giving back.",
        "emotion": "joy",
        "viral_score": 95,
        "interest": 97,
        "interactivity": 92,
        "relatability": 93
      },
      {
        "title": "The Bremen Town Musicians",
        "text": "An old donkey, dog, cat, and rooster were no longer wanted by their owners. They decided to go to Bremen to become musicians. On their way, they found a cottage with robbers inside. To scare them away, they stood atop each other and made a terrible noise. The robbers fled, and the animals settled in the cottage. Realizing they were happy together, they never reached Bremen but found a new home. The story highlights friendship, cooperation, and finding happiness in unexpected places.",
        "emotion": "joy",
        "viral_score": 90,
        "interest": 92,
        "interactivity": 88,
        "relatability": 89
      },
      {
        "title": "The Lion and the Boar",
        "text": "On a hot day, a lion and a boar reached a small waterhole for a drink. They began to argue over who should drink first, leading to a fierce battle. Exhausted, they paused and saw vultures waiting to feast on the loser. Realizing the futility of their fight, they decided to share the water and became friends. The story teaches that unnecessary conflict can lead to mutual harm, and cooperation benefits all.",
        "emotion": "neutral",
        "viral_score": 85,
        "interest": 87,
        "interactivity": 82,
        "relatability": 84
      },
      {
        "title": "The Wind and the Sun",
        "text": "The Wind and the Sun argued over who was stronger. They decided that whoever could make a traveler remove his coat was the strongest. The Wind blew fiercely, but the traveler only wrapped his coat tighter. The Sun then shone warmly, and the traveler, feeling hot, removed his coat. The Sun was declared the winner. The story illustrates that gentleness and kindness can achieve what force cannot.",
        "emotion": "joy",
        "viral_score": 88,
        "interest": 90,
        "interactivity": 85,
        "relatability": 87
      },
      {
        "title": "The Magic Swan",
        "text": "A kind-hearted boy was given a magic swan whose feathers stuck to anyone who touched them. As he walked through a town, people tried to pluck a feather and became stuck, forming a long chain. A princess who never laughed saw the odd procession and burst into laughter. The king, delighted, allowed the boy to marry her. The story teaches that happiness often comes when we least expect it and that kindness brings joy to others.",
        "emotion": "joy",
        "viral_score": 90,
        "interest": 93,
        "interactivity": 88,
        "relatability": 90
      },
      {
        "title": "The Ugly Duckling",
        "text": "A duckling was born larger and different from his siblings, who mocked him for his appearance. Feeling sad, he left home and faced hardships alone. When spring arrived, he saw a group of beautiful swans and admired them. To his surprise, he saw his reflection and realized he had grown into a swan himself. Accepted by the other swans, he found happiness. The story teaches about personal growth, self-acceptance, and the discovery of one's true identity.",
        "emotion": "joy",
        "viral_score": 95,
        "interest": 97,
        "interactivity": 92,
        "relatability": 93
      },
      {
        "title": "The Golden Touch",
        "text": "King Midas loved gold above all else. A mysterious figure granted him the wish that everything he touched would turn to gold. At first delighted, he soon realized he couldn't eat or drink, as food and water turned to gold. When he accidentally turned his beloved daughter into a golden statue, he begged for the curse to be lifted. His wish was granted, and he learned to appreciate the true riches in life—love and family. The story warns against greed and emphasizes what truly matters.",
        "emotion": "sadness",
        "viral_score": 90,
        "interest": 93,
        "interactivity": 88,
        "relatability": 89
      },
      {
        "title": "The Boy and the Nuts",
        "text": "A greedy boy put his hand into a jar full of nuts and grabbed as many as he could. When he tried to pull his hand out, it wouldn't fit through the narrow opening. Unwilling to release any nuts, he began to cry. An onlooker said, 'Let go of some nuts, and you'll be able to pull your hand out.' The boy let go of a few nuts and easily removed his hand. The story teaches that greed can trap us and that moderation is key.",
        "emotion": "smirk",
        "viral_score": 85,
        "interest": 87,
        "interactivity": 82,
        "relatability": 84
      },
      {
        "title": "Stone Soup",
        "text": "A hungry traveler arrived in a village, but no one offered him food. He filled a pot with water, placed a stone in it, and began to cook. Curious villagers asked what he was making. 'Stone soup,' he said, 'though it would taste better with a carrot.' One villager offered a carrot, another brought potatoes, and soon the pot was filled with vegetables. The traveler shared the delicious soup with everyone. The villagers learned about sharing and community, realizing that together they could create abundance.",
        "emotion": "joy",
        "viral_score": 90,
        "interest": 93,
        "interactivity": 88,
        "relatability": 90
      },
      {
        "title": "The Bundle of Sticks",
        "text": "An old man had several sons who constantly quarreled. He gave them a bundle of sticks and asked each to break it. None could. Then he untied the bundle and gave them individual sticks, which they broke easily. 'See,' he said, 'if you stand united, you are strong. Divided, you are weak.' The sons understood and resolved to work together. The story teaches about the strength of unity and the importance of family cooperation.",
        "emotion": "neutral",
        "viral_score": 88,
        "interest": 90,
        "interactivity": 85,
        "relatability": 87
      }
  ];

window.interestingPrompts = interestingPrompts;