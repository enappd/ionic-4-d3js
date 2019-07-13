import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PiePage } from './pie.page';

describe('PiePage', () => {
  let component: PiePage;
  let fixture: ComponentFixture<PiePage>;
  let piePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PiePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(PiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    piePage = fixture.nativeElement;
    const items = piePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
