import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgxLoader, NgxLoaderService } from "@nisix/ngx-loader";

@Component({
  selector: "app-root",
  imports: [NgxLoader, RouterModule],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("app");

  constructor(private loaderService: NgxLoaderService) {}

  toggleLoader() {
    this.loaderService.show();

    setTimeout(() => {
      this.loaderService.hide();
    }, 3_000);
  }
}
