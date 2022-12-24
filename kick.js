const Discord = require('discord.js')
const client = new Discord.Client();

module.exports = {
    name: 'kick',
    description: 'kick a user',
    async execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS") || message.author.id === "898569996949676052") {

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!args[0]) return message.channel.send('Please specify a user');
            let reason = args.slice(1).join(" ");
            if(!member) return message.channel.send("User not found.");
            if(!member.kick) return message.channel.send("User unable to be kick, either he/she holds a mod/admin role OR i have a lower role OR i do not have permission to kick users OR its a bot");
            else{
                if(member.id === message.author.id) return message.channel.send("You cannot kick yourself!!");
                if(!reason) reason = 'No reason provided.';
                await member.send(`You have been kicked for the following reason: **${reason}**`).catch(error => message.reply("Couldn't DM the user as his/her DMs are off"));//console.error(error));
                message.guild.members.cache.get(member.user.id).kick()
                const banEmbed = new Discord.MessageEmbed()
                .setTitle('Member Kicked')
                .setColor('#57F287')
                .setThumbnail(member.user.displayAvatarURL())
                .addField('User has been Kicked:', member)
                .addField('Kicked by:', message.author)
                .addField('Reason:', reason)
                .setFooter("Jhhspace")
                .setTimestamp()
        message.channel.send(banEmbed);
        }
        }
        else{
            message.reply("You do not have the permission to kick members")
        }

    }
}