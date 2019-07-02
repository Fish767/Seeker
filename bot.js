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
    recievedMessage.delete(60000)
  } else if (recievedMessage.content.startsWith("a")){
	recievedMessage.channel.send("All that we are is the result of what we have thought.")	  
  } else if (recievedMessage.content.startsWith("A")){
	recievedMessage.channel.send("If you judge people, you have no time to love them.")	  
  } else if (recievedMessage.content.startsWith("b")){
	recievedMessage.channel.send("What do the numbers mean, Mason?")	  
  } else if (recievedMessage.content.startsWith("B")){
	recievedMessage.channel.send("You Have Died.")	  
  } else if (recievedMessage.content.startsWith("c")){
	recievedMessage.channel.send("Thank You " + recievedMessage.author+"! But our princess is in another castle!")	  
  } else if (recievedMessage.content.startsWith("C")){
	recievedMessage.channel.send("It’s a-you, "+recievedMessage.author)	  
  } else if (recievedMessage.content.startsWith("d")){
	recievedMessage.channel.send("There are two ways of arguing with a woman, and neither one works.")	  
  } else if (recievedMessage.content.startsWith("D")){
	recievedMessage.channel.send("If our lives are already written, it would take a courageous man to change the script.")	  
  } else if (recievedMessage.content.startsWith("e")){
	recievedMessage.channel.send("All right, I’ve been thinking, when life gives you lemons, don’t make lemonade! Make life take the lemons back! Get mad! I don’t want your damn lemons! What am I supposed to do with these? Demand to see life’s manager!")	  
  } else if (recievedMessage.content.startsWith("E")){
	recievedMessage.channel.send("This is your fault. I’m going to kill you. And all the cake is gone. You don’t even care, do you?")	  
  } else if (recievedMessage.content.startsWith("f")){
	recievedMessage.channel.send("Make life rue the day it thought it could give Seeker lemons! Do you know who I am? I’m the man who’s gonna burn your house down – with the lemons!")	  
  } else if (recievedMessage.content.startsWith("F")){
	recievedMessage.channel.send("The right man in the wrong place can make all the difference in the world.")	  
  } else if (recievedMessage.content.startsWith("g")){
	recievedMessage.channel.send("Good men mean well. We just don’t always end up doing well")	  
  } else if (recievedMessage.content.startsWith("G")){
	recievedMessage.channel.send("They offered you the city, and you refused it. And what did you do instead? What I’ve come to expect from you; you saved them. You gave them the one thing that was stolen from them. A chance. A chance to learn. To find love. To live. And in the end what was your reward? You never said. But I think I know… a family.")	  
  } else if (recievedMessage.content.startsWith("h")){
	recievedMessage.channel.send("Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. Their silence is your answer.")	  
  } else if (recievedMessage.content.startsWith("H")){
	recievedMessage.channel.send("Not even death can save you from me!")	  
  } else if (recievedMessage.content.startsWith("i")){
	recievedMessage.channel.send("Steel wins battles. Gold wins wars.")	  
  } else if (recievedMessage.content.startsWith("I")){
	recievedMessage.channel.send("Had to be me. Someone else might have gotten it wrong.")	  
  } else if (recievedMessage.content.startsWith("j")){
	recievedMessage.channel.send("It ain’t no secret I didn’t get these scars falling over in church.")	  
  } else if (recievedMessage.content.startsWith("J")){
	recievedMessage.channel.send("We stand upon the precipice of change. The world fears the inevitable plummet into the abyss. Watch for that moment… and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can fly.")	  
  } else if (recievedMessage.content.startsWith("k")){
	recievedMessage.channel.send("Life is a negotiation. We all want. We all give to get what we want.")	  
  } else if (recievedMessage.content.startsWith("K")){
	recievedMessage.channel.send("Death is inevitable. Our fear of it makes us play safe, blocks out emotion. It’s a losing game. Without passion, you are already dead.")	  
  }else if (recievedMessage.content.startsWith("l")){
	recievedMessage.channel.send("Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.")	  
  } else if (recievedMessage.content.startsWith("L")){
	recievedMessage.channel.send("The genius of the hole: No matter how long you spend climbing out, you can still fall back down in an instant.")	  
  } else if (recievedMessage.content.startsWith("m")){
	recievedMessage.channel.send("The flow of time is always cruel, its speed seems different for each person, but no one can change it. A thing that does not change with time is a memory of younger days.")	  
  } else if (recievedMessage.content.startsWith("M")){
	recievedMessage.channel.send("A hero need not speak. When he is gone, the world will speak for him.")	  
  } else if (recievedMessage.content.startsWith("n")){
	recievedMessage.channel.send("Get over here!")	  
  } else if (recievedMessage.content.startsWith("N")){
	recievedMessage.channel.send("What is better? To be born good or to overcome your evil nature through great effort?")	  
  } else if (recievedMessage.content.startsWith("o")){
	recievedMessage.channel.send("Wanting something does not give you the right to have it.")	  
  } else if (recievedMessage.content.startsWith("O")){
	recievedMessage.channel.send("Even in dark times, we cannot relinquish the things that make us human.")	  
  } else if (recievedMessage.content.startsWith("p")){
	recievedMessage.channel.send("How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share.")	  
  } else if (recievedMessage.content.startsWith("P")){
	recievedMessage.channel.send("The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take... inventory.")	  
  } else if (recievedMessage.content.startsWith("q")){
	recievedMessage.channel.send("It’s a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.")	  
  } else if (recievedMessage.content.startsWith("Q")){
	recievedMessage.channel.send("Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain’t nothing fair.")	  
  } else if (recievedMessage.content.startsWith("r")){
	recievedMessage.channel.send("You can’t break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.")	  
  } else if (recievedMessage.content.startsWith("R")){
	recievedMessage.channel.send("Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.")	  
  } else if (recievedMessage.content.startsWith("s")){
	recievedMessage.channel.send("…")	  
  } else if (recievedMessage.content.startsWith("S")){
	recievedMessage.channel.send("The courage to walk into the Darkness, but strength to return to the Light.")	  
  } else if (recievedMessage.content.startsWith("t")){
	recievedMessage.channel.send("If history only remembers one in a thousand of us, then the future will be filled with stories of who we were and what we did.")	  
  } else if (recievedMessage.content.startsWith("T")){
	recievedMessage.channel.send("We're made up of thousands of parts with thousands of functions all working in tandem to keep us alive. Yet if only one part of our imperfect machine fails, life fails. It makes one realize how fragile, how flawed we are.")	  
  } else if (recievedMessage.content.startsWith("u")){
	recievedMessage.channel.send("It’s dangerous to go alone, take this!")	  
  } else if (recievedMessage.content.startsWith("U")){
	recievedMessage.channel.send("The best solution to a problem is usually the easiest one. And I'll be honest - killing you is hard. You know what my days used to be like? I just tested. Nobody murdered me, or put me in a potato, or fed me to birds. I had a pretty good life. And then you showed up. You dangerous, mute lunatic. So you know what? You win. Just go. [chuckles] It's been fun. Don't come back.")	  
  } else if (recievedMessage.content.startsWith("v")){
	recievedMessage.channel.send("Often when we guess at others' motives, we reveal only our own.")	  
  } else if (recievedMessage.content.startsWith("V")){
	recievedMessage.channel.send("You can’t undo what you’ve already done, but you can face up to it.")	  
  } else if (recievedMessage.content.startsWith("w")){
	recievedMessage.channel.send("We both said a lot of things that you're going to regret. But I think we can put our differences behind us. For science.")	  
  } else if (recievedMessage.content.startsWith("W")){
	recievedMessage.channel.send("Wake me when you need me.")	  
  } else if (recievedMessage.content.startsWith("x")){
	recievedMessage.channel.send("Every puzzle has an answer.")	  
  } else if (recievedMessage.content.startsWith("X")){
	recievedMessage.channel.send("No matter how dark the night, morning always comes, and our journey begins anew.")	  
  } else if (recievedMessage.content.startsWith("y")){
	recievedMessage.channel.send("A sword wields no strength unless the hand that holds it has courage.")	  
  } else if (recievedMessage.content.startsWith("Y")){
	recievedMessage.channel.send("Science isn’t about why! It’s about why not!")	  
  } else if (recievedMessage.content.startsWith("z")){
	recievedMessage.channel.send("There was a HOLE here. It's gone now.")	  
  } else if (recievedMessage.content.startsWith("Z")){
	recievedMessage.channel.send("It's more important to master the cards you're holding than to complain about the ones your opponents were dealt.")	  
  }
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
