import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equacao-segundo-grau',
  templateUrl: './equacao-segundo-grau.component.html',
  styleUrls: ['./equacao-segundo-grau.component.css']
})
export class EquacaoSegundoGrauComponent implements OnInit {
  x1 = 0;
  x2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleRequestValuesAndCalculateEquation() {
    const a = Number(prompt('Digite o valor de "a": '));
    const b = Number(prompt('Digite o valor de "b": '));
    const c = Number(prompt('Digite o valor de "c": '));

    const delta = (2^2) - (4 * a * c);

    if(delta < 0) {
      return alert('Não existe solução')
    }

    console.log(delta);

    this.x1 = (-b + Math.sqrt(delta)) / (2 * a);
    this.x2 = (-b - Math.sqrt(delta)) / (2 * a);
  }
}
