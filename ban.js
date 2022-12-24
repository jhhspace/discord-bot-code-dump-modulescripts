const Discord = require('discord.js')
const client = new Discord.Client();

module.exports = {
    name: 'ban',
    description: 'ban a user',
    async execute(message, args) {
        if (message.member.hasPermission("BAN_MEMBERS") || message.author.id === "898569996949676052") {

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!args[0]) return message.channel.send('Please specify a user');
            let reason = args.slice(1).join(" ");
            if(!member) return message.channel.send("User not found.");
            if(!member.bannable) return message.channel.send("User unable to be banned, check if the user is a mod a higher role than me or you have the necessary permission to ban");
            else{
                if(member.id === message.author.id) return message.channel.send("You cannot ban yourself!!");
                if(!reason) reason = 'No reason provided.';
                await member.send(`You have been banned for the following reason: **${reason}**`).catch(error => message.reply("Couldn't DM the user as his/her DMs are off"));//console.error(error));
                message.guild.members.cache.get(member.user.id).ban({days: 0, reason: reason})
                const banEmbed = new Discord.MessageEmbed()
                .setColor('#57F287')
                .setTitle('Member Banned')
                .setThumbnail(member.user.displayAvatarURL())
                .addField('User has been Banned:', member)
                .addField('Banned by:', message.author)
                .addField('Reason:', reason)
                .setFooter("Jhhspace")
                .setTimestamp()
        message.channel.send(banEmbed);
        }
        }
        else{
            message.reply("You do not have the permission to ban members")
        }

    }
}