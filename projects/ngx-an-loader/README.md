# Installation

```
npm install --save ngx-an-loader
```

# Version Compatibility

Loader is compatible with Angular 20 and newer

## Usage

To use the `ngx-an-loader` component in your Angular application, follow these steps:

### Step 1: Import the Component

Add the `ngx-an-loader` component to your application template where you want the loader to appear. For example, in your `app.component.html`:

```html
<ngx-an-loader></ngx-an-loader>
<button (click)="toggleLoader()">Toggle loader</button>
```

### Step 2: Include the Service

To control the visibility of the loader, you need to use the `NgxAnLoaderService`. Inject this service into your component and use it to toggle the loader's visibility.

#### Example in `app.component.ts`:

```typescript
import { Component } from "@angular/core";
import { NgxAnLoaderService, NgxAnLoader } from "ngx-an-loader";

@Component({
  selector: "app-root",
  import: [NgxAnLoader], // <- import component
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private ngxAnLoaderService: NgxAnLoaderService) {} // <- use service

  show() {
    this.ngxAnLoaderService.show(); // turn on
  }
  hide() {
    this.ngxAnLoaderService.hide(); // turn off
  }
}
```

## Import parameters:

- zIndex - default 10_000.

```
<ngx-an-loader [zIndex]="1000"></ngx-an-loader>
```
