module.exports = {
    name: 'multiply',
    description: 'Multiplies any number of numbers.',
    execute(client, receivedMessage, ytdl, servers, arguments) {
        if (arguments.length<2) {
            receivedMessage.channel.send("Not enough arguments. Try `!multiply 2 10`")
            return
          }
          let product = 1
          arguments.forEach((value) => {
            product = product * parseFloat(value)
          })
          receivedMessage.channel.send("The product of "+arguments+ " is "+product.toString())
    },
};