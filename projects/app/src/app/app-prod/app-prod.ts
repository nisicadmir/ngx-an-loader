import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { NgxAnLoader, NgxAnLoaderService } from "ngx-an-loader";

@Component({
  selector: "app-app-prod",
  imports: [NgxAnLoader],
  templateUrl: "./app-prod.html",
  styleUrl: "./app-prod.scss",
})
export class AppProd {
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
    this.router.navigate(["app-local"]);
  }
}
