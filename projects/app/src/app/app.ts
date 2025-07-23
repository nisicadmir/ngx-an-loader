import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgxAnLoader, NgxAnLoaderService } from "ngx-an-loader-local";
// import { NgxAnLoader, NgxAnLoaderService } from "ngx-an-loader";

@Component({
  selector: "app-root",
  imports: [NgxAnLoader, RouterModule],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("app");

  constructor(private loaderService: NgxAnLoaderService) {}

  toggleLoader() {
    this.loaderService.show();

    setTimeout(() => {
      this.loaderService.hide();
    }, 3_000);
  }
}
