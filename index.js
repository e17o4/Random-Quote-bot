const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const quotes = [
  "Candy is delicious.",
  "Don't set zombies on fire.",
  "Don't spit into the wind.",
  "Fear not the ones who snarl. They know nothing. Instead fear the ones who smile. They know something you don't. – Csllia'nahe'artic",
  "'Inconceivable!' If you don't know what this is from, I pity you. – Shirley",
  "Johnnie was a chemist. A chemist he is no more. For what he thought was H₂O was H₂SO₄.",
  "'Envy eats nothing but its own heart.' – German Proverb",
  "Join the Army! Travel to exotic distant lands! Meet exciting, unusual people; and kill them!",
  "Every time someone says something is impossible, the universe laughs. Eventually someone else proves them wrong.",
  "'True friends stab you in the front.' – Oscar Wilde",
  "Journalists do not live by words alone, although sometimes they have to eat them. – Adlai E. Stevenson",
  "Reality is for people who lack imagination.",
  "'There’s a fine line between genius and insanity. I have erased this line.' – Unknown",
  "Trust, but verify.",
  "Forgive your enemies, but never forget their names.",
  "Never moon a werewolf.",
  "Never try to teach a pig to sing. It wastes your time and annoys the pig.",
  "'The communication of the dead is tongued with fire beyond the language of the living.' – T.S. Eliot, *Little Gidding*",
  "If you have any quote or fortune suggestions, please include credit. Looking them up is a pain. Thanks!",
  "Alright, who murderized Mr. English Language? Oh no! Mr. Common Sense is dead too?! Wait—Bob, what are you doing with that knife? Bob?",
  "Who stole my candy?!",
  "Error",
  "Help! I'm being held hostage in a fortune cookie factory!",
  "Some people are only alive because it's illegal to shoot them.",
  "You're just jealous because the voices only talk to ME.",
  "Always remember you're unique—just like everyone else.",
  "It's bad luck to be superstitious.",
  "'Legend: a lie that has attained the dignity of age.' – Unknown",
  "When in doubt, be vague.",
  "'Imagination is more important than knowledge. Knowledge is limited; imagination encircles the world.' – Albert Einstein",
  "*Insert message here*",
  "'We really don't have enemies. It's just that some of our best friends are trying to kill us.' – Unknown",
  "'The dumber people think you are, the more surprised they'll be when you kill them.' – William Clayton",
  "'Insanity is doing the same thing over and over again but expecting different results.' – Unknown",
  "'Structure your question so that the answer “No” gets you what you want.' – Lorren 'Rus' Stiles",
  "'When life gives you lemons, make grape juice and watch the world ask how you did it.' – Tori Truax",
  "'Annoyed? It takes 42 muscles to frown, but only 4 to smack them upside the head.' – Unknown",
  "'I have seen the truth… and it makes absolutely no sense.' – Unknown",
  "'Not one shred of evidence supports the notion that life is serious.' – Unknown",
  "I didn't do it. Nobody saw me do it. You can't prove anything!",
  "Maybe your eyes are playing tricks on me!",
  "I used to be indecisive... but now I'm not sure.",
  "It's been lovely, but I have to scream now.",
  "Sanity is a madness put to good uses.",
  "If at first you don't succeed, skydiving is not for you.",
  "'The universe has a twisted sense of humor.' – Paraphrased from *The Dresden Files*",
  "THE END IS NEAR! No seriously, watch your step.",
  "Doooom! Doom I say, DOOM!",
  "What fortune?",
  "What cookies?",
  "ICY GOLF BALLS OF DEATH FALLING FROM THE SKY!",
  "'OH THE HUMANITY!'",
  "Cave Johnson: When life gives you lemons, don't make lemonade. Make life take the lemons back! Get mad! 'I don't want your damn lemons!' Demand to see life's manager! I'm gonna get my engineers to invent a combustible lemon that'll burn your house down! – *Portal 2*"
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === '!quote') {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    msg.channel.send(quote);
  }
});

client.login(process.env.TOKEN);
