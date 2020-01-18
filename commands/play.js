module.exports = {
    name: 'play',
    description: 'Plays a song',
    execute(client, receivedMessage, ytdl, servers, arguments) {
        let songURLs = ['https://youtu.be/O3En-TuZZWw','https://youtu.be/5i7qZxICwgQ','https://youtu.be/D1qQwojUK1Q','https://youtu.be/h6RXc6wLCo8','https://youtu.be/zK146IC-E7w','https://youtu.be/UgUkZcW-HKY','https://youtu.be/aUWCrCXiVpA','https://youtu.be/iBN1rAE8sdo','https://youtu.be/gNApV7JJfXk','https://youtu.be/pT-qo68EOp4','https://youtu.be/jKvknx08_Mc','https://youtu.be/vqLzQhNSDBQ','https://youtu.be/D5HcE0pJve0','https://youtu.be/Q3j-ZZ4eDO8','https://youtu.be/QfPeHqdZZOw','https://youtu.be/ktvTqknDobU','https://youtu.be/l9PxOanFjxQ','https://youtu.be/ICAfBw4cxEI','https://youtu.be/RNq973isnK8','https://youtu.be/A2_liowdedI','https://youtu.be/TjiHA9IeA1k','https://youtu.be/4MTAD2Hk_RA','https://youtu.be/09tzb8lkMwE','https://youtu.be/NC6EZrW9AlU','https://youtu.be/IFaobho9HgQ','https://youtu.be/0GVEb-jjj1U','https://youtu.be/vcZmoT3K54Y','https://youtu.be/NPbvjmkXcW0','https://youtu.be/9md2PQEwrC4','https://youtu.be/X5dAKlPDDz0','https://youtu.be/VMycOhwjhQg','https://youtu.be/vqfx9Nec5vs','https://youtu.be/HyHNuVaZJ-k','https://youtu.be/lOO8Um_jmLI','https://youtu.be/o0u4M6vppCI','https://youtu.be/FbinC91OXP8','https://youtu.be/uKm2KN5gBiY','https://youtu.be/jRvI3jfblV0','https://youtu.be/_pXUl8KMJmc','https://youtu.be/zxo60Y5PEeo','https://youtu.be/Dn4F42bG9Dg','https://youtu.be/w0AOGeqOnFY','https://youtu.be/2uzgv3Oz2gw','https://youtu.be/ukKB3soKq68','https://youtu.be/t4W12k0MYC0','https://youtu.be/OUBq3PIOJ8k','https://youtu.be/8543q-vR0D8','https://youtu.be/X1sDfkeksj8','https://youtu.be/UgH4Ai43UTk','https://youtu.be/06_9z2thikw','https://youtu.be/vOH4LBOEf2I','https://youtu.be/iFsou_aLEeM','https://youtu.be/sUY6hINkj70','https://youtu.be/mTzzet5RQG4','https://youtu.be/jRqL2NVQxJA','https://youtu.be/WHgZdsvoTCc','https://youtu.be/nuOBELFOXEc','https://youtu.be/l27cikCS_FU','https://youtu.be/rHwh2WTxnIk','https://youtu.be/HLQhLtBUtTU','https://youtu.be/hNFdQd-wFtE','https://youtu.be/Bh5ei_gWsP4','https://youtu.be/5JqY-6q-RNA','https://youtu.be/rT_vrHjKXgc','https://youtu.be/0q5vYr-SWlY','https://youtu.be/4-ZQf7IIkiw','https://youtu.be/6EX-4mz5WuY','https://youtu.be/gFw8bBw4SSE','https://youtu.be/mRM4aQCHp2Y','https://youtu.be/Jhhlnku-Fz0','https://youtu.be/I3sKIV6KugA','https://youtu.be/oKS_56E-TQQ','https://youtu.be/eduwBgDcMwY','https://youtu.be/yrl3Y4rzCp0','https://youtu.be/3Go-7adDEpo','https://youtu.be/_qPUHJ75COo','https://youtu.be/eNj7gR1GGBE','https://youtu.be/trS2nrkN0_k','https://youtu.be/GfuxwAAEi8g','https://youtu.be/pOcaMXfkGiA','https://youtu.be/J3omHmUYtqw','https://youtu.be/u9Dg-g7t2l4','https://youtu.be/rNy-ypClCJs','https://youtu.be/r_WxpjhzKHI','https://youtu.be/oT75Tj3h3lo','https://youtu.be/jNk98ZgQ4zI','https://youtu.be/rxvWEU-jtg0','https://youtu.be/3wtqy_dKDVM','https://youtu.be/ibPhAOLXPRI','https://youtu.be/BN2-mwmLxDg','https://youtu.be/FBlkR4Pgipw','https://youtu.be/sFnWMa2iiMM','https://youtu.be/5WRU2XsO6HM','https://youtu.be/83MC2oCfogA','https://youtu.be/YFawgUfNXP8','https://youtu.be/rL_RslBjXto','https://youtu.be/mZPIsVkWs_Q','https://youtu.be/LvPLfUrosC0','https://youtu.be/OZl6u3KekgI','https://youtu.be/ndQXJJyUfjk','https://youtu.be/hqqV98ZNgGA','https://youtu.be/ojjsBrF_bTY','https://youtu.be/X3-H5jGoags','https://youtu.be/LffSZfRSwTI','https://youtu.be/ILuXiAiTYXQ','https://youtu.be/XxhkArkKSQQ','https://youtu.be/esofirhSD-o']

        function play(connection) {
            var server = servers['585360537869877248'];

            server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

            server.queue.shift();

            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    play(connection);
                }else {
                    //connection.disconnect();
                    let commandChannel = client.channels.get("667941568346587156")
                    let displayChannel = client.channels.get("667945409850638338")
                   //Shoutout to Ran fo fixing the line of code below and fixing the bot a little
                    let r=songURLs[Math.floor(Math.random()*(songURLs.length))]
                    displayChannel.bulkDelete(1)
                    displayChannel.send('Playing '+r)
                    commandChannel.send('s?play '+r)
                    
                }
            });

        }
//Math.floor(Math.random()*(max-min+1)+min);

        if(!arguments[0]) {
            receivedMessage.channel.send("You need to provide a link!")
            return;
        }

        if(!receivedMessage.member.voiceChannel&&receivedMessage.author!==client.user){
            receivedMessage.channel.send("You must be in a voice channel to play a song!")
            return;
        }
        
        if(!servers[receivedMessage.guild.id]) servers[receivedMessage.guild.id] = {
            queue: []
        }

        var server = servers[receivedMessage.guild.id];

        server.queue.push(arguments[0])

        if(!receivedMessage.guild.voiceConnection&&receivedMessage.author!==client.user) receivedMessage.member.voiceChannel.join().then(function(connection){
            play(connection);
        })

        if(receivedMessage.author===client.user) client.channels.get("658233667960700981").join().then(function(connection){
            play(connection);
        })
    }
};
