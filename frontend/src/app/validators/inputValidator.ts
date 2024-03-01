import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class inputValidator {

  constructor() { }

  isNumber(strValue:string) : boolean{
    let numValue: number = parseInt(strValue, 10); // The second argument is the radix/base
    return !isNaN(numValue);
  }
}
