require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const quotes = require('./quotes');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!quote') {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const luckyNumber = Math.floor(Math.random() * 100);
    message.channel.send(`${quote}\nLucky Number: ${luckyNumber}`);
  }
});

client.login(process.env.TOKEN);
