import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  imc = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleRequestValuesAndCalculateImc() {
    const height = Number(prompt('Digite a sua altura: '));
    const weight = Number(prompt('Digite seu peso: '));

    this.imc = this.calculateImc(height, weight);
  }

  calculateImc(height: number, weight: number) {
    return weight / (height * height);
  }
}
