import { CommonModule } from "@angular/common";
import { Component, effect, Input } from "@angular/core";

import { NgxAnLoaderService } from "../ngx-an-loader.service";

@Component({
  selector: "ngx-an-loader",
  imports: [CommonModule],
  templateUrl: "./loader.html",
  styleUrl: "./loader.css",
  standalone: true,
})
export class NgxAnLoader {
  @Input()
  zIndex: number = 10_000;

  public isVisible = false;

  constructor(private ngxAnLoaderService: NgxAnLoaderService) {
    effect(() => {
      this.isVisible = this.ngxAnLoaderService.isVisible();
    });
  }
}
