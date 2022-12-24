const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const db = require("quick.db")
module.exports = {
    name: "hack",
    description: "hacking",
    usage: "",
    permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
	},
    
run: async (client, message, args) => {
    
       


       const user = await message.mentions.users.first()
        if(!user) return message.channel.send("Woaaah slow down, who are we hacking? It Should be a member not role.")
        

        message.channel.send(`Hacking @${user.username} now...`)
        .then((msg) => {
            setTimeout(function() {
            message.channel.send(`[▝]Finding ${user.username}'s IP address`);
          }, 1500)
            setTimeout(function() {
            message.channel.send(`[▗] ${user.username}'s **IP ADDRESS** : 69.69.69.69:6969`);
          }, 3000)
          setTimeout(function() {
            message.channel.send(`[▖] Selling ${user.username}'s data to the KKK and CCP...`);
          }, 4500)
          setTimeout(function() {
            message.channel.send(`[▘] Reporting ${user.username}'s account to Roblox for being an idiot...`);
          }, 6000)
          setTimeout(function() {
            message.channel.send(`[▝] Finding ${user.username}'s Email Address...`);
          }, 7500)
          setTimeout(function() {
            message.channel.send(`[▗] **Email Address** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            message.channel.send(`[▖] Hacking ${user.username}'s Epic Games Account... (imagine)`);
          },  10500)
          setTimeout(function() {
            message.channel.send(`[▘] Hacking ${user.username}'s medical records...(nice SSN)`);
          },  12000)
         setTimeout(function() {
            message.channel.send(`Finished hacking @${user.username}`);
         }, 13500)
         setTimeout(function() {
            message.channel.send('The **totally** `real` and `dangerous` hack have completed!')
         }, 15000)
         });

    }
   
}

//msg.edit()