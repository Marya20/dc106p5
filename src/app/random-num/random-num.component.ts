import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-num',
  templateUrl: './random-num.component.html',
  styleUrls: ['./random-num.component.css']
})
export class RandomNumComponent {

  constructor() { 
    for (var x=0; x<6; x++) {
      this.rndnum.push(Math.floor(Math.random()*46+1))
    }
  }

  rndnum:any = []
  selected:any



  buttons(num: number){
    this.selected = num
  }

}
