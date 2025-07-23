import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NgxAnLoader, NgxAnLoaderService } from "ngx-an-loader";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NgxAnLoader],
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
