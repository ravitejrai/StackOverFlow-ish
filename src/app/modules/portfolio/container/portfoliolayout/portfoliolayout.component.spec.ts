import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfoliolayoutComponent } from './portfoliolayout.component';
import {MatTabsModule} from '@angular/material/tabs';

describe('PortfoliolayoutComponent', () => {
  let component: PortfoliolayoutComponent;
  let fixture: ComponentFixture<PortfoliolayoutComponent>;

  const routes: Routes = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliolayoutComponent ],
      imports: [
        FormsModule,
        RouterModule.forRoot(routes),
        MatTabsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(PortfoliolayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the constructor and initilize the navlinks property', () => {
    fixture = TestBed.createComponent(PortfoliolayoutComponent);
    component = fixture.componentInstance;
    const FakenavLinks = [
      {
          label: 'User Account',
          link: 'userportfolio',
          index: 0
      },
  ];
    expect(component.navLinks).toEqual(FakenavLinks);
  });
});
