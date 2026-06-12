import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RetosComponent } from './retos.component';

describe('RetosComponent', () => {
  let component: RetosComponent;
  let fixture: ComponentFixture<RetosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RetosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
