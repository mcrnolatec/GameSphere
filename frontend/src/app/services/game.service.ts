import { Injectable } from '@angular/core';
import {Game} from "../shared/models/Game";
import {sample_games} from "../../data";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getAll():Game[]{
    return sample_games;
  }
}
