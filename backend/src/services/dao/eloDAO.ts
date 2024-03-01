const Database = require("../../database/database")

export class EloDAO{
    private database: any;

    constructor() {
        this.database = new Database("./database/gameSphereDatabase.sqlite");
    }
}
export default EloDAO;