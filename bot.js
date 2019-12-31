const fs = require('fs');

const Discord = require('discord.js')
const client = new Discord.Client()

const ytdl = require("ytdl-core");

const prefix = 's?';

var servers = [];

let songURLs = ['https://youtu.be/5i7qZxICwgQ','https://youtu.be/D1qQwojUK1Q','https://youtu.be/h6RXc6wLCo8','https://youtu.be/zK146IC-E7w','https://youtu.be/UgUkZcW-HKY','https://youtu.be/aUWCrCXiVpA','https://youtu.be/iBN1rAE8sdo','https://youtu.be/gNApV7JJfXk','https://youtu.be/pT-qo68EOp4','https://youtu.be/jKvknx08_Mc','https://youtu.be/vqLzQhNSDBQ','https://youtu.be/D5HcE0pJve0','https://youtu.be/Q3j-ZZ4eDO8','https://youtu.be/QfPeHqdZZOw','https://youtu.be/ktvTqknDobU','https://youtu.be/l9PxOanFjxQ','https://youtu.be/ICAfBw4cxEI','https://youtu.be/RNq973isnK8','https://youtu.be/A2_liowdedI','https://youtu.be/TjiHA9IeA1k','https://youtu.be/4MTAD2Hk_RA','https://youtu.be/09tzb8lkMwE','https://youtu.be/NC6EZrW9AlU','https://youtu.be/IFaobho9HgQ','https://youtu.be/0GVEb-jjj1U','https://youtu.be/vcZmoT3K54Y','https://youtu.be/NPbvjmkXcW0','https://youtu.be/9md2PQEwrC4','https://youtu.be/X5dAKlPDDz0','https://youtu.be/VMycOhwjhQg','https://youtu.be/vqfx9Nec5vs','https://youtu.be/HyHNuVaZJ-k','https://youtu.be/lOO8Um_jmLI','https://youtu.be/o0u4M6vppCI','https://youtu.be/FbinC91OXP8','https://youtu.be/uKm2KN5gBiY','https://youtu.be/jRvI3jfblV0','https://youtu.be/_pXUl8KMJmc','https://youtu.be/zxo60Y5PEeo','https://youtu.be/Dn4F42bG9Dg','https://youtu.be/w0AOGeqOnFY','https://youtu.be/2uzgv3Oz2gw','https://youtu.be/ukKB3soKq68','https://youtu.be/t4W12k0MYC0','https://youtu.be/OUBq3PIOJ8k','https://youtu.be/8543q-vR0D8','https://youtu.be/X1sDfkeksj8','https://youtu.be/UgH4Ai43UTk','https://youtu.be/06_9z2thikw','https://youtu.be/vOH4LBOEf2I','https://youtu.be/iFsou_aLEeM','https://youtu.be/sUY6hINkj70','https://youtu.be/mTzzet5RQG4','https://youtu.be/jRqL2NVQxJA','https://youtu.be/WHgZdsvoTCc','https://youtu.be/nuOBELFOXEc','https://youtu.be/l27cikCS_FU','https://youtu.be/rHwh2WTxnIk','https://youtu.be/HLQhLtBUtTU','https://youtu.be/hNFdQd-wFtE','https://youtu.be/Bh5ei_gWsP4','https://youtu.be/5JqY-6q-RNA','https://youtu.be/rT_vrHjKXgc','https://youtu.be/0q5vYr-SWlY','https://youtu.be/4-ZQf7IIkiw','https://youtu.be/6EX-4mz5WuY','https://youtu.be/gFw8bBw4SSE','https://youtu.be/mRM4aQCHp2Y','https://youtu.be/Jhhlnku-Fz0','https://youtu.be/I3sKIV6KugA','https://youtu.be/oKS_56E-TQQ','https://youtu.be/eduwBgDcMwY','https://youtu.be/yrl3Y4rzCp0','https://youtu.be/3Go-7adDEpo','https://youtu.be/_qPUHJ75COo','https://youtu.be/eNj7gR1GGBE','https://youtu.be/trS2nrkN0_k','https://youtu.be/GfuxwAAEi8g','https://youtu.be/pOcaMXfkGiA','https://youtu.be/J3omHmUYtqw','https://youtu.be/u9Dg-g7t2l4','https://youtu.be/rNy-ypClCJs','https://youtu.be/r_WxpjhzKHI','https://youtu.be/oT75Tj3h3lo','https://youtu.be/jNk98ZgQ4zI','https://youtu.be/rxvWEU-jtg0','https://youtu.be/3wtqy_dKDVM','https://youtu.be/ibPhAOLXPRI','https://youtu.be/BN2-mwmLxDg','https://youtu.be/FBlkR4Pgipw','https://youtu.be/sFnWMa2iiMM','https://youtu.be/5WRU2XsO6HM','https://youtu.be/83MC2oCfogA','https://youtu.be/YFawgUfNXP8','https://youtu.be/rL_RslBjXto','https://youtu.be/mZPIsVkWs_Q','https://youtu.be/LvPLfUrosC0','https://youtu.be/OZl6u3KekgI','https://youtu.be/ndQXJJyUfjk','https://youtu.be/hqqV98ZNgGA','https://youtu.be/ojjsBrF_bTY','https://youtu.be/X3-H5jGoags','https://youtu.be/LffSZfRSwTI','https://youtu.be/ILuXiAiTYXQ','https://youtu.be/XxhkArkKSQQ','https://youtu.be/esofirhSD-o']
let playsongs=[]
let songnum=[]
let songsInUse=[]
for (var i=0; i<songURLs.length; i++) {
  songsInUse.push(0)
}

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
  }else if (receivedMessage.author===client.user&&receivedMessage.content.startsWith('Deleted ')) {
    receivedMessage.delete(10000)
    return;
  }
})


function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(prefix.length)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  let arguments = splitCommand.slice(1)
  if (receivedMessage.author===client.user&&splitCommand[0]==='empty') {
    while (playsongs.length<songURLs.length-10) {
        var r=Math.floor(Math.random()*(songURLs.length-2))
        if (songsInUse[r]===0) {
          playsongs.push(songURLs[r])
          songnum.push(r)
          songsInUse[r]=1
        }
    }
    receivedMessage.channel.send('s?play '+playsongs[0])
    receivedMessage.delete(0)
    playsongs.splice(0,1)
    songsInUse[songnum[0]]===0
    songnum.splice(0,1)
  }

  if (!client.commands.has(primaryCommand)) return;

try {
	client.commands.get(primaryCommand).execute(client, receivedMessage, ytdl, servers, arguments);
} catch (error) {
	console.error(error);
	receivedMessage.channel.send('there was an error trying to execute that command!');
}
}




client.login(process.env.BOT_TOKEN)
