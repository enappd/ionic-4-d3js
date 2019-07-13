import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdvancedPage } from './advanced.page';

describe('AdvancedPage', () => {
  let component: AdvancedPage;
  let fixture: ComponentFixture<AdvancedPage>;
  let advancedPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(AdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    advancedPage = fixture.nativeElement;
    const items = advancedPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
