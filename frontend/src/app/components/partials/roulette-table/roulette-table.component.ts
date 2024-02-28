import { Component } from '@angular/core';
import { inputValidator } from '../../../services/inputValidator';
import { User } from "../../../shared/models/User";
import {Bet} from "../../../shared/models/Bet";

@Component({
  selector: 'app-roulette-table',
  templateUrl: './roulette-table.component.html',
  styleUrl: './roulette-table.component.css'
})
export class RouletteTableComponent {
  betAmount : number;
  user : User;
  bets : Bet[];

  constructor(private inputValidator:inputValidator) {
    this.betAmount = 100;
    this.bets = [];

    this.user = new User()
    this.user.id = "1";
    this.user.name = "Marko";
  }

  updateBetAmount(betAmount:string) {
    if(this.inputValidator.isNumber(betAmount)){
      this.betAmount = Number(betAmount);
    }
    else {
      console.log("Wrong input")
    }
  }

  numberBet($event: MouseEvent) {
    
  }
}
