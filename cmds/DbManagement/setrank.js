module.exports.run = async(client, msg, args) => {
    const member = msg.mentions.members.first();
    const discordUser = member.user;
    const rank = ags[1].parseInt();
    const users = client.db.get('users');
    const affectedRows = await users.update({ permissionRank: rank}, { where: { discordID: discordUser.id } });
    if (affectedRows > 0) {
	    return message.reply(`User ${member.nickname} was edited.`);
    }
    return message.reply(`Could not find a user with id ${discordUser.id}.`);
}

module.exports.properties = {
    name: "setrank",
    enabled: false,
    permissionRank: 0,
    commandLevel: "bot",
    botPermissions: [

    ],
    userPermissions: [

    ]
}