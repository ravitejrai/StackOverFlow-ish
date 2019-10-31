import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from 'src/app/modules/landing/container/layout/layout.component';
import { AppModule } from 'src/app/app.module';
import { LandingModule } from '../../landing.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, LandingModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
