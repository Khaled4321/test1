const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562633484762349590")
setInterval(function() {
channel.send(`Pnepen the best`);
}, 30)
})

client.login(process.env.BOT_TOKEN);