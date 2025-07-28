import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxLoader } from "./loader";

describe("Loader", () => {
  let component: NgxLoader;
  let fixture: ComponentFixture<NgxLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLoader],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
