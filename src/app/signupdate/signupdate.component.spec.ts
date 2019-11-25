import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdateComponent } from './signupdate.component';

describe('SignupdateComponent', () => {
  let component: SignupdateComponent;
  let fixture: ComponentFixture<SignupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
