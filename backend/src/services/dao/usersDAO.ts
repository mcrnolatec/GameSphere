const Database = require("../../database/database")

export class UsersDAO{
    private database: any;

    constructor() {
        this.database = new Database("./database/gameSphereDatabase.sqlite");
    }

    getUserByUsernameAndPassword = async (username:string, password:string) =>{
        try{
            this.database.connectToDatabase();
            let sql = "SELECT * FROM User WHERE username = ? AND password = ?";
            let data = await this.database.performQuery(sql, [username, password]);
            this.database.endConnection();
            return data;
        } catch (error){
            console.error("Error in getUserByUsernameAndPassword:", error);
            throw error;
        }
    }
}
export default UsersDAO;