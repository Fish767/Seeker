module.exports = {
    name: 'clear',
    description: 'Clears the x last messages as long as they arent two weeks old or older.',
    execute(client, receivedMessage, ytdl, servers, arguments) {
         if (receivedMessage.member.hasPermission("ADMINISTRATOR")) {
                if(arguments.length == 0) {
                      receivedMessage.channel.send("How many, " + receivedMessage.author.toString() + "?")
                } else {
                      receivedMessage.channel.bulkDelete(parseInt(arguments[0]+1))
                      receivedMessage.channel.send("Deleted "+arguments[0]+" messages.")
                }
              
        }else {
                receivedMessage.channel.send("Oof. You need more permissions " + receivedMessage.author.toString()+".")
              };
    },
};
