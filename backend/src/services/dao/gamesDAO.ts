const Database = require("../../database/database")

export class GamesDao{
    private database: any;

    constructor() {
        this.database = new Database("./database/gameSphereDatabase.sqlite");
    }

    getGames = async () =>{
        this.database.connectToDatabase();
        let sql = "SELECT * FROM 'Games'";
        let data = await this.database.performQuery(sql, []);
        this.database.endConnection();
        return data;
    }
}
export default GamesDao;