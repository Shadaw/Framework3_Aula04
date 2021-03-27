import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  results = {
    sum: 0,
    subtraction: 0,
    division: 0,
    multiplication: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleRequestValuesAndCalculate() {
    const primaryValue = Number(prompt('Digite o primeiro valor: '));
    const secondaryValue = Number(prompt('Digite o segundo valor: '));

    this.results.sum = this.sum(primaryValue, secondaryValue);
    this.results.subtraction = this.subtraction(primaryValue, secondaryValue);
    this.results.division = this.division(primaryValue, secondaryValue);
    this.results.multiplication = this.multiplication(primaryValue, secondaryValue);
  }

  sum(primaryValue: number, secondaryValue: number) {
    return primaryValue + secondaryValue;
  }

  subtraction(primaryValue: number, secondaryValue: number) {
    return primaryValue - secondaryValue;
  }

  division(primaryValue: number, secondaryValue: number) {
    return primaryValue / secondaryValue;
  }

  multiplication(primaryValue: number, secondaryValue: number) {
    return primaryValue * secondaryValue;
  }
}
