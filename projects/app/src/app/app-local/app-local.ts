import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { NgxAnLoader, NgxAnLoaderService } from "ngx-an-loader-local";

@Component({
  selector: "app-app-local",
  imports: [NgxAnLoader],
  templateUrl: "./app-local.html",
  styleUrl: "./app-local.scss",
})
export class AppLocal {
  constructor(
    private ngxAnLoaderService: NgxAnLoaderService,
    private router: Router
  ) {}
  public startLoader() {
    this.ngxAnLoaderService.show();

    setTimeout(() => {
      this.ngxAnLoaderService.hide();
    }, 3_000);
  }

  public navigate() {
    this.router.navigate(["app-prod"]);
  }
}
