import { Request, Response } from 'express';
import {UsersDAO} from '../dao/usersDAO';

function sendError(res : any, statusCode : number, message : string) {
    res.status(statusCode).json({ description: message });
}
export class RestUsers {
    public async getUserByUsernameAndPassword(req: Request, res: Response): Promise<void> {
        try {
            res.type("application/json");
            let usersDAO = new UsersDAO();
            const user = await usersDAO.getUserByUsernameAndPassword("ihorvat", "horvat");

            res.status(200).send(JSON.stringify(user));
        } catch (err) {
            console.log("Error fetching user: ", err);
            sendError(res, 500, "Internal server error");
        }
    }

}
export default RestUsers;