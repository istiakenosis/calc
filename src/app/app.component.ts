import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-calc';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  firstNumber: number = 0;
  secondNumber: number = 0;

  calNumber: string = 'noValue';

  onClickValue(val: string, type: any) {
    if (type === 'number') {
      this.onNumberClick(val);
    } else {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (this.funcT === 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funcT === '+') {
      const total = this.firstNumber + this.secondNumber;
      this.calValue = total;
      this.firstNumber = total;
      this.secondNumber = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
  }
}
