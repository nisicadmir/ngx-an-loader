import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "ngx-an-loader",
  imports: [CommonModule],
  templateUrl: "./loader.html",
  styleUrl: "./loader.css",
  standalone: true,
})
export class Loader {
  public isVisible = false;
}
