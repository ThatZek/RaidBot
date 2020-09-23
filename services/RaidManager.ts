import { Collection } from 'discord.js';
import { underscoredIf } from 'sequelize/types/lib/utils';

export class RaidManager {
    private static _instance: RaidManager = new RaidManager();
    private raids = new Collection();
    private interval: NodeJS.Timeout | undefined;

    constructor() {
        if (RaidManager._instance) {
            throw new Error("Error: Instantiation failed: Use RaidManager.getInstance() instead of new")
        }
        RaidManager._instance = this;
    }

    public static getInstance(): RaidManager {
        return RaidManager._instance;
    }

    public createRaid() {
        return this.interval = setInterval(this.update, 500);
    }

    private update() {
        if (this.raids.size === 0 && this.interval !== undefined) {
            clearInterval(this.interval);
            return this.interval = undefined;
        }
        this.raids.forEach(raid => {

        })
    }
}