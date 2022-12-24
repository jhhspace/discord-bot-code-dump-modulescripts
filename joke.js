const superagent = require('superagent');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "joke",
    description: "jokes iykyk",
    usage: "",
    permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
	}, 
        run: async (client, message, args) => {
            await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        .setColor("#85b0d2");
        message.channel.send(jEmbed);
		})
    }
}