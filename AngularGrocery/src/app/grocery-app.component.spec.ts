import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryAppComponent } from './grocery-app.component';

describe('GroceryAppComponent', () => {
  let component: GroceryAppComponent;
  let fixture: ComponentFixture<GroceryAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
