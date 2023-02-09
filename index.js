const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const {prefix, token, token2} = require("./config.json")
client.once('ready', () => {
    console.log("Bot is ready");
    console.log("Current default bot prefix is " + prefix)

    client.user.setActivity('k!help', {type: 'WATCHING'});
});

const generalFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of generalFiles){
    const command  = require(`./commands/${file}`);
    client.commands.set(command.name, command )
};

client.login(token)

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    try{
        client.commands.get(command).execute(message, args);
    } catch(error) {
        console.error(error);
        const errEmbed = new Discord.MessageEmbed()
        .setColor('#ED4245')
        .setTitle('An error occured')
        .setDescription('Please try again later or report to jhh at `jhh@jhhspace.com`')
        .setURL('http://error.jhhspace.com/')
        .setTimestamp()
        .setFooter('Jhhspace');
        message.reply(errEmbed);
    }
});
