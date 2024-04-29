import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPramMergeComponent } from './query-pram-merge.component';

describe('QueryPramMergeComponent', () => {
  let component: QueryPramMergeComponent;
  let fixture: ComponentFixture<QueryPramMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryPramMergeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryPramMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
