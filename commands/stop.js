module.exports = {
    name: 'stop',
    description: 'Stops a song.',
    execute(client, receivedMessage, ytdl, servers, arguments) {
        var server = servers[receivedMessage.guild.id];
        if(receivedMessage.guild.voiceConnection){
            for(var i =server.queue.length -1; i >=0; i--){
                server.queue.splice(i, 1)
            }

            server.dispatcher.end();
            receivedMessage.channel.send("Ending the queue and leaving the voice channel.")
            console.log('stopped the queue')
        }

        if(receivedMessage.guild.connection) receivedMessage.guild.voiceConnection.disconnect();
    },
};