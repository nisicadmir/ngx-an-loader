import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProd } from './app-prod';

describe('AppProd', () => {
  let component: AppProd;
  let fixture: ComponentFixture<AppProd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
