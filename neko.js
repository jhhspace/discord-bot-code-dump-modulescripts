const { Random } = require("something-random-on-discord")

module.exports = {
    name: "neko",
    description: "Sends neko images",
    usage: "",
    permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
	},
  run: async (client, message, args) => {
    
    let data = await Random.getNeko()
    message.channel.send(data)
    
  }
}