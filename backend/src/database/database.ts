const SQLite = require("sqlite3").Database;

class Database {
    private dbConnection: any;
    private pathToSQLliteFile: string;
    constructor(pathToSQLliteFile : string) {
        this.dbConnection = new SQLite(pathToSQLliteFile);
        this.pathToSQLliteFile = pathToSQLliteFile;
        this.dbConnection.exec("PRAGMA foreign_keys = ON;");
    }

    connectToDatabase(){
        this.dbConnection = new SQLite(this.pathToSQLliteFile);
        this.dbConnection.exec("PRAGMA foreign_keys = ON;");
    }
    performQueryCallback(sql : string, sqlData : string[], callbackFun : any) : any {
        this.dbConnection.all(sql, sqlData, callbackFun);
    }
    performQuery(sql : string, sqlData : string[]) : any {
        console.log("Executing SQL Query:", sql);
        console.log("Query Parameters:", sqlData);

        return new Promise((success, failure) => {
            console.log("Fetching data from db...")
            this.dbConnection.all(sql, sqlData, (err : any, result : any) => {
                if (err) {
                    console.error("Error during query execution:", err);
                    failure(err);
                } else {
                    console.log("Query Result:", result);
                    success(result);
                }
            });
        });
    }


    endConnection() {
        this.dbConnection.close();
    }
}

module.exports = Database;