module.exports = {
    name: 'translate',
    description: 'This is the code that allows the bot to learn and translate  between languages.',
    execute(client, receivedMessage, splitMessage, messageToSend, finalMessage, arguments) {
        thing=splitMessage.length;
        let reportChannel=client.channels.get('656484062478860298')
        let buggywords=[];
        let buglist='';
        for (var i=0; i<thing; i++){
            if (splitMessage[i]==='yes') {
                messageToSend.push('sí')
            }else if (splitMessage[i]==='no') {
                messageToSend.push('no')
            }else if (splitMessage[i]==='Sí') {
                messageToSend.push('Yes')
            }else if (splitMessage[i]==='No') {
                messageToSend.push('No')
            }else if (splitMessage[i]==='tengo') {
                messageToSend.push('I have')
            }else if (splitMessage[i]==='have') {
                messageToSend.push('tener')
            }else if (splitMessage[i]==='I') {
                messageToSend.push('yo')
            }else if (splitMessage[i]==='do') {
                messageToSend.push('hacer')
            }else if (splitMessage[i]==='hacer') {
                messageToSend.push('to do')
            }else if (splitMessage[i]==='want') {
                messageToSend.push('querer')
            }else if (splitMessage[i]==='querer') {
                messageToSend.push('to want')
            }else if (splitMessage[i]==='quiero') {
                messageToSend.push('I want')
            }else if (splitMessage[i]==='dog') {
                messageToSend.push('perro')
            }else if (splitMessage[i]==='perro') {
                messageToSend.push('dog')
            }else if (splitMessage[i]==='tienes') {
                messageToSend.push('you have')
            }else if (splitMessage[i]==='you') {
                messageToSend.push('tu')
            }else if (splitMessage[i]==='tu') {
                messageToSend.push('you')
            }else if (splitMessage[i]==='oh') {
                messageToSend.push('oh')
            }else if (splitMessage[i]==='ok') {
                messageToSend.push('okay')
            }else if (splitMessage[i]==='okay') {
                messageToSend.push('okay')
            }else if (splitMessage[i]==='regular') {
                messageToSend.push('ok')
            }else if (splitMessage[i]==='soy') {
                messageToSend.push('I am')
            }else if (splitMessage[i]==='am') {
                messageToSend.push('ser/estar')
            }else if (splitMessage[i]==='estoy') {
                messageToSend.push('I am')
            }else if (splitMessage[i]==='estais') {
                messageToSend.push('you are')
            }else if (splitMessage[i]==='eres') {
                messageToSend.push('you are')
            }else if (splitMessage[i]==='ella') {
                messageToSend.push('she/her')
            }else if (splitMessage[i]==='ellas') {
                messageToSend.push('them')
            }else if (splitMessage[i]==='ellos') {
                messageToSend.push('them')
            }else if (splitMessage[i]==='usted') {
                messageToSend.push('him/her')
            }else if (splitMessage[i]==='ustedes') {
                messageToSend.push('them')
            }else if (splitMessage[i]==='vosotros') {
                messageToSend.push('y\'all')
            }else if (splitMessage[i]==='nosotros') {
                messageToSend.push('we')
            }else if (splitMessage[i]==='gusta') {
                messageToSend.push('like')
            }else if (splitMessage[i]==='gustan') {
                messageToSend.push('like')
            }else if (splitMessage[i]==='like') {
                messageToSend.push('gusta/gustan')
            }else{
                buggywords.push(splitMessage[i])
                messageToSend.push(splitMessage[i])
            }
            if (i===thing-1) {
                
            }
        }
        thing2=messageToSend.length;
        thing3=buggywords.length;
        for(var j=0; j<thing2; j++) {
            finalMessage+=messageToSend[j];
            if (j!==thing2-1) {
                finalMessage+=' ';
            }else {
                receivedMessage.channel.send(finalMessage)
            }
        }
        for(var k=0; k<thing3; k++) {
            buglist+=buggywords[k];
            if (k!==thing3-1) {
                buglist+=', ';
            }else {
                reportChannel.send(buglist);
            }
        }
    }
}


/*
 if (splitMessage[i]==='') {
                messageToSend.push('')
            }else
*/
