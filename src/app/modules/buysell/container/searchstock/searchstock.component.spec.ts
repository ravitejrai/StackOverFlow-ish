import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchstockComponent } from './searchstock.component';
import { BuysellModule } from '../../buysell.module';
import { AppModule } from 'src/app/app.module';


xdescribe('SearchstockComponent', () => {
  let component: SearchstockComponent;
  let fixture: ComponentFixture<SearchstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchstockComponent ],
      imports: [AppModule, BuysellModule],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
