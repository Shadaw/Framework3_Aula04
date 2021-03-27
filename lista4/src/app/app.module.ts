import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { EquacaoSegundoGrauComponent } from './components/equacao-segundo-grau/equacao-segundo-grau.component';
import { ImcComponent } from './components/imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    EquacaoSegundoGrauComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
