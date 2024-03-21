import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Def404Component } from './def404.component';

describe('Def404Component', () => {
  let component: Def404Component;
  let fixture: ComponentFixture<Def404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Def404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Def404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
