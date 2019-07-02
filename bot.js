const Discord = require('discord.js')
const client = new Discord.Client()

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

  if (primaryCommand == "help") {
    helpCommand(arguments, recievedMessage)
  } else if (primaryCommand == "multiply") {
    multiplyCommand(arguments, recievedMessage)
  } else {
    recievedMessage.channel.send("Unknown command.")
  }
}

function multiplyCommand(arguments, recievedMessage) {
  if (arguments.length<2) {
    recievedMessage.channel.send("Not enough arguments. Try `!multiply 2 10`")
    return
  }
  let product = 1
  arguments.forEach((value) => {
    product = product * parseFloat(value)
  })
  recievedMessage.channel.send("The product of "+arguments+ " is "+product.toString())
}

function helpCommand(arguments, recievedMessage) {
  if (arguments.length == 0) {
    recievedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
  } else {
    recievedMessage.channel.send("It looks like you need help with "+ arguments)
  }
}

client.login(process.env.NTk1MzY4MjIyODA3NTU2MDk2.XRqylA.cIiKiwXOGCYw-Lozn11G4PO6fO0)
