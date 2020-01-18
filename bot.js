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

    client.user.setActivity("Music", {type: "PLAYING"})

    client.guilds.forEach((guild) => {
      console.log(guild.name)
      guild.channels.forEach((channel) => {
        console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
      })
      // General channel id: 655644146643501066
    })
    let displayChannel = client.channels.get("667945409850638338") 
    displayChannel.bulkDelete(2)
    displayChannel.send('Playing s?play https://youtu.be/pa8nzjnv2x0')
    let musicChannel=client.channels.get("658233667960700981")
    musicChannel.join()
    let commandChannel = client.channels.get("667941568346587156")
    commandChannel.send('s?play https://youtu.be/pa8nzjnv2x0')
})

client.on('message', (receivedMessage) => {
  if (receivedMessage.content.startsWith(prefix)){
    processCommand(receivedMessage)
  }else if (receivedMessage.author===client.user&&receivedMessage.content.startsWith('Deleted ')) {
    receivedMessage.delete(10000)
    return;
  }else if (receivedMessage.author!==client.user&&receivedMessage.mentions.users.first()===client.user) {
    receivedMessage.channel.send(receivedMessage.author+', I am a bot and can\'t understand what you are saying. If it is about a bug put it in #bugs. If it is not and you would like my owner to hear about it please dm or ping <@'+receivedMessage.guild.ownerID+'>. Thanks!')
    let dmChannel=client.channels.get('663824648026456112')
    dmChannel.send(receivedMessage.content)
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
