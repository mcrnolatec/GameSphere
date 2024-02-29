import { Component } from '@angular/core';
import {User} from "../../../shared/models/User";
import {Bet} from "../../../shared/models/Bet";
import { inputValidator } from '../../../services/inputValidator';

@Component({
  selector: 'app-roulette-page',
  templateUrl: './roulette-page.component.html',
  styleUrl: './roulette-page.component.css'
})
export class RoulettePageComponent {
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
      console.log("Wrong input");
    }
  }

  onBetAdded(bet: Bet) {
    this.bets.push(bet);
    console.log("BET ADDED " + bet.amount + " ON NUMBER " + bet.number + " USER: " + bet.username);
  }
}
