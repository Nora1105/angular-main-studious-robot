import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaldbComponent } from './localdb.component';

describe('LocaldbComponent', () => {
  let component: LocaldbComponent;
  let fixture: ComponentFixture<LocaldbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocaldbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocaldbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
