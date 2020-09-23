export class Database {
    private static _instance: Database = new Database();

    constructor() {
        if (Database._instance) {
            throw new Error("Error: Instantiation failed: Use Database.getInstance() instead of new")
        }
        Database._instance = this;
    }

    public static getInstance(): Database {
        return Database._instance;
    }
}