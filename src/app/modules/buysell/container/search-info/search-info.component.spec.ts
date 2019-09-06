import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInfoComponent } from './search-info.component';
import { AppModule } from 'src/app/app.module';
import { BuysellModule } from '../../buysell.module';

describe('SearchInfoComponent', () => {
  let component: SearchInfoComponent;
  let fixture: ComponentFixture<SearchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BuysellModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInfoComponent);
    component = fixture.componentInstance;
  });
  it('checks if the stockItem is empty intially', () => {
    expect(component.orderItems).toEqual([]);
  });
  it('checks if the displayedColumns is undefined intially', () => {
    expect(component.displayedOrderColumns).toBeUndefined();
  });
});

describe('Check for the getProduct function', () => {
  let component: SearchInfoComponent;
  let fixture: ComponentFixture<SearchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, BuysellModule, SearchInfoComponent],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInfoComponent);
    component = fixture.componentInstance;
  });

  it('checks that the getproduct returns undefined if argument is not present in database', () => {
    const result = component.getOrder('Tesla');
    expect(result).toBe(undefined);
  });
  it('checks that the getproduct returns valid response for an id which is present in the database', () => {
    component.getOrder('Google');
    expect(component.orderItems).not.toBe(undefined);
  });
  it('checks that the getproduct returns valid response for an id which is present in the database', () => {
    component.getOrder('Google');
    expect(component.displayedOrderColumns).not.toBe([]);
  });
});

