import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiChartComponent } from './api-chart.component';

describe('ApiChartComponent', () => {
  let component: ApiChartComponent;
  let fixture: ComponentFixture<ApiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
