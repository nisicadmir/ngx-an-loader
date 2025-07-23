import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLocal } from './app-local';

describe('AppLocal', () => {
  let component: AppLocal;
  let fixture: ComponentFixture<AppLocal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLocal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLocal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
