import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jochie } from './jochie';

describe('Jochie', () => {
  let component: Jochie;
  let fixture: ComponentFixture<Jochie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jochie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jochie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
