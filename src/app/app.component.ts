import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  calValue: number = 0
  funcT:string = 'NoFunction'
  calNumber:string = 'noValue'
  firstNumber:number=0;
  secondNumber:number=0;
  onClickValue(val:string, type:any) {
    if(type==='number'){
      this.onNumberClick(val)
    }
    if(type==='function'){
      this.onFunctionClick(val)
    }
  }

  onNumberClick(val:string){
    if(this.calNumber!=='noValue'){
      this.calNumber = this.calNumber + val;
    }else{
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber)
  }

  onFunctionClick(val:string){
    if(val === 'c'){
      this.clearAll()
    }else if(this.funcT == 'NoFunction'){
      this.firstNumber = this.calValue
      this.calValue = 0
      this.calNumber = 'noValue'
      this.funcT = val
    }else if(this.funcT !== 'NoFunction'){
      this.secondNumber = this.calValue
      this.valueCalculate(val)
    }
  }
  
  valueCalculate(val:string){
    switch(this.funcT){
      case '+':
        this.totalAssignValues((this.firstNumber + this.secondNumber), val)
        break;
      case '-':
        this.totalAssignValues((this.firstNumber - this.secondNumber), val)
        break;
      case '*':
        this.totalAssignValues((this.firstNumber * this.secondNumber), val)
        break;
      case '/':
        this.totalAssignValues((this.firstNumber / this.secondNumber), val)
        break;
      case '%':
        this.totalAssignValues((this.firstNumber % this.secondNumber), val)
        break;
    }
    
  }

  totalAssignValues(Total: number, val:string){
    this.calValue = Total
      this.firstNumber = Total
      this.secondNumber = 0
      this.calNumber = 'noValue'
      this.funcT = val
      if(val=='='){this.onEqualPress()}
  }

  onEqualPress(){
    this.firstNumber = 0
    this.secondNumber = 0
    this.funcT = 'noFunction'
    this.calNumber = 'noValue'
  }

  clearAll(){
    this.firstNumber = 0
    this.secondNumber = 0
    this.calValue = 0
    this.funcT = 'NoFunction'
    this.calNumber = 'noValue'
  }
}
