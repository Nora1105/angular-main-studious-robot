import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamsAccessComponent } from './query-params-access.component';

describe('QueryParamsAccessComponent', () => {
  let component: QueryParamsAccessComponent;
  let fixture: ComponentFixture<QueryParamsAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryParamsAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryParamsAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
