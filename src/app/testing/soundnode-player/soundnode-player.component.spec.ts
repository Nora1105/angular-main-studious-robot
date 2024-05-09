import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundnodePlayerComponent } from './soundnode-player.component';

describe('SoundnodePlayerComponent', () => {
  let component: SoundnodePlayerComponent;
  let fixture: ComponentFixture<SoundnodePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundnodePlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundnodePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
