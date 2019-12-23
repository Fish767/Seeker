module.exports = {
    name: 'skip',
    description: 'Skips a song in the queue.',
    execute(client, receivedMessage, ytdl, servers, arguments) {
        if (receivedMessage.member.hasPermission("ADMINISTRATOR")) {
            var server = servers[receivedMessage.guild.id];
            if(server.dispatcher) server.dispatcher.end();
            receivedMessage.channel.send("Skipping the current song.")
    }else {
            receivedMessage.channel.send("Oof. You need more permissions " + receivedMessage.author.toString()+".")
          };
    },
};