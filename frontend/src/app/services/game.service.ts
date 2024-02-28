import { Injectable } from '@angular/core';
import {Game} from "../shared/models/Game";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GAMES_URL} from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Game[]>{
    return this.http.get<Game[]>(GAMES_URL);
  }
}
