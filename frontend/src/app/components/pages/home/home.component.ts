import { Component } from '@angular/core';
import {Game} from "../../../shared/models/Game";
import {GameService} from "../../../services/game.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  games:Game[] = [];

  constructor(private gameService:GameService) {
    this.games = gameService.getAll();
  }
}
