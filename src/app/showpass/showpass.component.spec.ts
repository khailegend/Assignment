import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpassComponent } from './showpass.component';

describe('ShowpassComponent', () => {
  let component: ShowpassComponent;
  let fixture: ComponentFixture<ShowpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
