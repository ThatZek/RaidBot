export interface IRaid {
    leader: string;
    channelID: string;
    status: status;
    runes: Array<IRune>;
    importantClasses: Array<IClass>;
    runType: RunType;
    raiders: Array<IRaider>;
}

interface IRune {
    type: runeTypes,
    importance: importance;
    id: string,
    username: string,
}

interface IClass {
    type: classTypes;
}

interface IRaider {
    discordID: string,
    username: string,
    nitro: boolean,
}

enum classTypes {
    WIZARD,
    WARRIOR,
    PALADIN,
    PRIEST,
    MYSTIC,
    SAMURAI,
    BARD,
    TRICKSTER,
    MSEAL,
    OGMUR,
}

enum runeTypes {
    SWORD,
    SHIELD,
    HELMET,
    INC,
}

enum status {
    AFK,
    STARTING,
    RAIDING,
    ENDING,
}

enum importance {
    MAIN,
    BACKUP,
}

enum RunType {
    NORMAL,
    EXALTED,
}