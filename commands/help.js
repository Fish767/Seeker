module.exports = {
    name: 'help',
    description: 'Tells what each command does.',
    execute(client, receivedMessage, ytdl, servers, arguments) {
        receivedMessage.channel.send('`s?clear <a number>`\nDeletes that many messages going from most recent to least recent. Must have admin permission to use.\n\n`s?multiply <any number> <any number> <do this with as many numbers as you want>`\nMultiplies any number of numbers and returns the result.\n\n`s?play <YouTube link>`\nPlays the audio from that video. It goes into a queue so it may take some time to play. Inputting links that are not YouTube videos will result in a warning and then a ban. Please only ask for music.\n\n`s?skip`\n Skips the current song in the queue. Only for admin use.')
    },
};