import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshharComponent } from './akshhar.component';

describe('AkshharComponent', () => {
  let component: AkshharComponent;
  let fixture: ComponentFixture<AkshharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkshharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkshharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
