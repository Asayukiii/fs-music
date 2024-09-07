module.exports = {
    name: 'reload',
    aliases: ['u', 'up', 'update'],
    type: 'messageCreate',
    code: `
        $onlyIf[$authorID==1077733015846932530;]
        $updateCommands
        $!sendMessage[$channelID;Commands updated]
    `
}