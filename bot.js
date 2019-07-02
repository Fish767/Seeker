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
      // General channel id: 585360537869877250
    })

    let generalChannel = client.channels.get("585360537869877250")
    generalChannel.send("Hello, Discord users!")
})

client.on('message', (recievedMessage) => {
  if (recievedMessage.author==client.user) {
    recievedMessage.delete(10000)
  } else {
  recievedMessage.channel.send("Message recieved, " + recievedMessage.author.toString()+":" + recievedMessage.content)
  }
  let customEmoji = recievedMessage.guild.emojis.get("595403644665462803")
  recievedMessage.react(customEmoji)
  recievedMessage.delete(86400000)
  if (recievedMessage.content.startsWith("!")){
    processCommand(recievedMessage)
  }
})

function processCommand(recievedMessage) {
  let fullCommand = recievedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  let arguments = splitCommand.slice(1)

  if (!client.commands.has(primaryCommand)) return;

try {
	client.commands.get(primaryCommand).execute(client, recievedMessage, arguments);
} catch (error) {
	console.error(error);
	recievedMessage.channel.send('there was an error trying to execute that command!');
}
}

client.login(process.env.BOT_TOKEN)
