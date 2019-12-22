module.exports = {
    name: 'play',
    description: 'Plays a song',
    execute(client, receivedMessage, ytdl, servers, arguments) {

        function play(connection, receivedMessage) {
            var server = servers[receivedMessage.guild.id];

            server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

            server.queue.shift();

            server.dispatcher.on("end", function(){
                if(server.queue[0]){
                    play(connection, receivedMessage);
                }else {
                    connection.disconnect();
                }
            });

        }


        if(!arguments[0]) {
            receivedMessage.channel.send("You need to provide a link!")
            return;
        }

        if(!receivedMessage.member.voiceChannel){
            receivedMessage.channel.send("You must be in a voice channel to play a song!")
            return;
        }
        
        if(!servers[receivedMessage.guild.id]) servers[receivedMessage.guild.id] = {
            queue: []
        }

        var server = servers[receivedMessage.guild.id];

        server.queue.push(arguments[0])

        if(!receivedMessage.guild.voiceConnection) receivedMessage.member.voiceChannel.join().then(function(connection){
            play(connection, receivedMessage);
        })

    },
};