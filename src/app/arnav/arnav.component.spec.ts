import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArnavComponent } from './arnav.component';

describe('ArnavComponent', () => {
  let component: ArnavComponent;
  let fixture: ComponentFixture<ArnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
