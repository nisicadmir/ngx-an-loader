import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnLoader } from './ngx-an-loader';

describe('NgxAnLoader', () => {
  let component: NgxAnLoader;
  let fixture: ComponentFixture<NgxAnLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAnLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAnLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
