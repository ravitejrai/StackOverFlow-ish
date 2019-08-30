import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliolayoutComponent } from './portfoliolayout.component';

describe('PortfoliolayoutComponent', () => {
  let component: PortfoliolayoutComponent;
  let fixture: ComponentFixture<PortfoliolayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliolayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliolayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
