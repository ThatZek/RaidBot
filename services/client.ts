import * as Discord from "discord.js";

export class Client {
    private static _instance: Client = new Client();
    private client = new Discord.Client();

    constructor() {
        if (Client._instance) {
            throw new Error("Error: Instantiation failed: Use Client.getInstance() instead of new")
        }
        Client._instance = this;
    }

    public static getInstance(): Client {
        return Client._instance;
    }

    public getClient() {
        return this.client;
    }
}