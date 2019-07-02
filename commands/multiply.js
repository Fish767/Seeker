module.exports = {
    name: 'multiply',
    description: 'Multiplies any number of numbers.',
    execute(client, recievedMessage, arguments) {
        if (arguments.length<2) {
            recievedMessage.channel.send("Not enough arguments. Try `!multiply 2 10`")
            return
          }
          let product = 1
          arguments.forEach((value) => {
            product = product * parseFloat(value)
          })
          recievedMessage.channel.send("The product of "+arguments+ " is "+product.toString())
    },
};
