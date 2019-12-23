module.exports = {
    name: 'play',
    description: 'Plays a song',
    execute(client, receivedMessage, ytdl, servers, arguments) {
        let songURLs = ['https://youtu.be/FBlkR4Pgipw','https://youtu.be/sFnWMa2iiMM','https://youtu.be/5WRU2XsO6HM','https://youtu.be/83MC2oCfogA','https://youtu.be/YFawgUfNXP8','https://youtu.be/rL_RslBjXto','https://youtu.be/mZPIsVkWs_Q','https://youtu.be/LvPLfUrosC0','https://youtu.be/OZl6u3KekgI','https://youtu.be/ndQXJJyUfjk','https://youtu.be/hqqV98ZNgGA','https://youtu.be/ojjsBrF_bTY','https://youtu.be/X3-H5jGoags','https://youtu.be/LffSZfRSwTI','https://youtu.be/ILuXiAiTYXQ','https://youtu.be/XxhkArkKSQQ','https://youtu.be/esofirhSD-o']

        function play(connection, receivedMessage) {
            var server = servers[receivedMessage.guild.id];

            server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

            server.queue.shift();

            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    play(connection, receivedMessage);
                }else {
                    connection.disconnect();
                    receivedMessage.channel.send('s?play '+songURLs[Math.floor(Math.random()*(songURLs.length-2))])
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
            play(connection, receivedMessage);
        })

        if(receivedMessage.author===client.user) client.channels.get("658233667960700981").join().then(function(connection){
            play(connection, receivedMessage);
        })

    },
};