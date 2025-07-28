import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { NgxLoader, NgxLoaderService } from "@nisix/ngx-loader";

@Component({
  selector: "app-app-prod",
  imports: [NgxLoader],
  templateUrl: "./app-prod.html",
  styleUrl: "./app-prod.scss",
})
export class AppProd {
  constructor(
    private ngxLoaderService: NgxLoaderService,
    private router: Router
  ) {}
  public startLoader() {
    this.ngxLoaderService.show();

    setTimeout(() => {
      this.ngxLoaderService.hide();
    }, 3_000);
  }

  public navigate() {
    this.router.navigate(["app-local"]);
  }
}
