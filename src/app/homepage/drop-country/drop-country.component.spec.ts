import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropCountryComponent } from './drop-country.component';

describe('DropCountryComponent', () => {
  let component: DropCountryComponent;
  let fixture: ComponentFixture<DropCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
