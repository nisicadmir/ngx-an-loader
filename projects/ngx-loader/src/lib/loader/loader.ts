import { CommonModule } from "@angular/common";
import { Component, effect, Input } from "@angular/core";

import { NgxLoaderService } from "../ngx-loader.service";

@Component({
  selector: "ngx-loader",
  imports: [CommonModule],
  templateUrl: "./loader.html",
  styleUrl: "./loader.css",
  standalone: true,
})
export class NgxLoader {
  @Input()
  zIndex: number = 10_000;

  public isVisible = false;

  constructor(private ngxLoaderService: NgxLoaderService) {
    effect(() => {
      this.isVisible = this.ngxLoaderService.isVisible();
    });
  }
}
