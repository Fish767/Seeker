const fs = require('fs');

const Discord = require('discord.js')
const client = new Discord.Client()

const ytdl = require("ytdl-core");

const prefix = 's?';

var servers = [];

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log("Connected as "+client.user.tag)

    client.user.setActivity("You", {type: "WATCHING"})

    client.guilds.forEach((guild) => {
      console.log(guild.name)
      guild.channels.forEach((channel) => {
        console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
      })
      // General channel id: 655644146643501066
    })

    let generalChannel = client.channels.get("655644146643501066")
    generalChannel.send("Hello, Discord users!")
    let musicChannel=client.channels.get("658233667960700981")
    musicChannel.join()
    let commandChannel = client.channels.get("658239424919764993")
    commandChannel.send('s?play https://youtu.be/pa8nzjnv2x0')
})

client.on('message', (receivedMessage) => {
  if (receivedMessage.content.startsWith(prefix)){
    processCommand(receivedMessage)
  }
})


function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(prefix.length)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  let arguments = splitCommand.slice(1)
  if (!client.commands.has(primaryCommand)) return;

try {
	client.commands.get(primaryCommand).execute(client, receivedMessage, ytdl, servers, arguments);
} catch (error) {
	console.error(error);
	receivedMessage.channel.send('there was an error trying to execute that command!');
}
}


client.login(process.env.BOT_TOKEN)
