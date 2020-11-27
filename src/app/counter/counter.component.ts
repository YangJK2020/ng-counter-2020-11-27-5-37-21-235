import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = -1;

  isMinusButtonVisible = this.count < 0 ? false : true;

  isPlusButtonVisible = this.count > 10 ? false : true;

  numberBackgroundColor: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

  addByOne(): void {
    this.count++;
    if (this.count >= 0) {
      this.isMinusButtonVisible = true;
    }
    if (this.count > 10) {
      this.isPlusButtonVisible = false;
    }
  }

  reduceByOne(): void {
    this.count--;
    if (this.count < 0) {
      this.isMinusButtonVisible = false;
      this.numberBackgroundColor = 'green';
    }
    if (this.count <= 10) {
      this.isPlusButtonVisible = true;
    }
  }
}
