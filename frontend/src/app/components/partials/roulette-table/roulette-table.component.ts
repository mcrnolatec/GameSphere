import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Bet} from "../../../shared/models/Bet";

@Component({
  selector: 'app-roulette-table',
  templateUrl: './roulette-table.component.html',
  styleUrl: './roulette-table.component.css'
})
export class RouletteTableComponent {
  @Input() betAmount!: number;
  @Input() userName!: string;
  @Output() betAdded: EventEmitter<Bet> = new EventEmitter<Bet>();
  numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];

  numberBet($event: MouseEvent, number: number) {
    let bet: Bet = {
      amount: this.betAmount,
      number: number,
      username: this.userName
    };
    this.betAdded.emit(bet);
  }
}
