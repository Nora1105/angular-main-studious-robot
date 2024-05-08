import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundnodeWebComponent } from './soundnode-web.component';

describe('SoundnodeWebComponent', () => {
  let component: SoundnodeWebComponent;
  let fixture: ComponentFixture<SoundnodeWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundnodeWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundnodeWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
