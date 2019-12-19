module.exports = {
    name: 'translate',
    description: 'This is the code that allows the bot to learn and translate  between languages.',
    execute(client, receivedMessage, splitMessage, messageToSend, finalMessage, arguments) {
        thing=splitMessage.length;
        for (var i=0; i<thing; i++){
            if (splitMessage[i]==='yes') {
                messageToSend.push('sí')
            }else {
                splitMessage.channel.send('What does '+splitMessage[i]+' translate to?')
                return;
            }
            if (i===thing-1) {
                
            }
        }
        thing2=messageToSend.length;
        for(var j=0; j<thing2; j++) {
            finalMessage+=messageToSend[j];
            if (j!==thing2-1) {
                finalMessage+=' ';
            }else {
                receivedMessage.channel.send(finalMessage)
            }
        }
    }
}