import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtestComponent } from './dashtest.component';

describe('DashtestComponent', () => {
  let component: DashtestComponent;
  let fixture: ComponentFixture<DashtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
