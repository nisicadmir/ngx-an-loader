import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NgxAnLoaderService {
  public isVisible = signal(false);
  show() {
    this.isVisible.set(true);
  }
  hide() {
    this.isVisible.set(false);
  }

  toggle() {
    this.isVisible.set(!this.isVisible());
  }
}
