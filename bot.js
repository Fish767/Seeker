const fs = require('fs');

const Discord = require('discord.js')
const client = new Discord.Client()

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
})

client.on('message', (receivedMessage) => {
  if (receivedMessage.author==client.user) {
    return;
  } else if (receivedMessage.content.startsWith("!")){
    processCommand(receivedMessage)
	receivedMessage.delete(3000);
  }else if (!receivedMessage.content.startsWith("!")){
    translateMessage(receivedMessage)
	  receivedMessage.delete(3000);
  }
})

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  let arguments = splitCommand.slice(1)
  if (!client.commands.has(primaryCommand)) return;

try {
	client.commands.get(primaryCommand).execute(client, receivedMessage, arguments);
} catch (error) {
	console.error(error);
	receivedMessage.channel.send('there was an error trying to execute that command!');
}
}

function translateMessage(receivedMessage) {
  let splitMessage = receivedMessage.content.split(" ")
  let messageToSend=[];
  let finalMessage='';
try{
  client.commands.get('translate').execute(client, receivedMessage, splitMessage, messageToSend, finalMessage, arguments);
} catch (error) {
  console.error(error);
  receivedMessage.channel.send('There was an error trying to translate that sentence!');
}
}


client.login(process.env.BOT_TOKEN)
