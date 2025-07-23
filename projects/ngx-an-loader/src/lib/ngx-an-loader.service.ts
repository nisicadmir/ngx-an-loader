import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NgxAnLoaderService {
  public isVisible = signal(false);
  show(): void {
    this.isVisible.set(true);
  }
  hide(): void {
    this.isVisible.set(false);
  }

  toggle(): void {
    this.isVisible.set(!this.isVisible());
  }
}
