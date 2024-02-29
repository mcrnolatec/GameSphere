// restGames.ts
import { Request, Response } from 'express';
import GamesDAO from '../dao/gamesDAO';

function sendError(res : any, statusCode : number, message : string) {
    res.status(statusCode).json({ description: message });
}
export class RestGames {
    public async getGames(req: Request, res: Response): Promise<void> {
        try {
            res.type("application/json");
            let gamesDao = new GamesDAO();
            const games = await gamesDao.getGames();

            res.status(200).send(JSON.stringify(games));
        } catch (err) {
            console.log("Error fetching games: ", err);
            sendError(res, 500, "Internal server error");
        }
    }
}

export default RestGames;
