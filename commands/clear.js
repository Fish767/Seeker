module.exports = {
    name: 'clear',
    description: 'Clears the x last messages as long as they arent two weeks old or older.',
    execute(recievedMessage, arguments) {
         if (recievedMessage.member.hasPermissions("ADMINISTRATOR")) {
                if(arguments.length == 0) {
                      recievedMessage.channel.send("How many, " + recievedMessage.author.toString() + "?")
                } else {
                      recievedMessage.channel.bulkDelete(parseInt(arguments))
                      recievedMessage.channel.send("Deleted "+arguments+" messages.")
                }
              
        }else {
                recievedMessage.channel.send("Oof. You need more permissions " + recievedMessage.author.toString()+".")
              };
    },
};