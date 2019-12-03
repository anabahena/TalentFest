import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtcClientesComponent } from './atc-clientes.component';

describe('AtcClientesComponent', () => {
  let component: AtcClientesComponent;
  let fixture: ComponentFixture<AtcClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtcClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtcClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
