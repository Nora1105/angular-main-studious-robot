import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamTesterComponent } from './query-param-tester.component';

describe('QueryParamTesterComponent', () => {
  let component: QueryParamTesterComponent;
  let fixture: ComponentFixture<QueryParamTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryParamTesterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryParamTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
