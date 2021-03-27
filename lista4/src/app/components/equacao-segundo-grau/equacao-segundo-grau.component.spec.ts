import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquacaoSegundoGrauComponent } from './equacao-segundo-grau.component';

describe('EquacaoSegundoGrauComponent', () => {
  let component: EquacaoSegundoGrauComponent;
  let fixture: ComponentFixture<EquacaoSegundoGrauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquacaoSegundoGrauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquacaoSegundoGrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
