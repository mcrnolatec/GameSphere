import { Request, Response } from 'express';
import {eloDAO} from '../dao/eloDAO'

function sendError(res : any, statusCode : number, message : string) {
    res.status(statusCode).json({ description: message });
}
export class RestElo {

}
export default RestElo;