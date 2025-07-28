# Live demo deployed on Vercel.com

[@nisix/ngx-loader Live app](https://ngx-loader.vercel.app/)

# Installation

```
npm install --save @nisix/ngx-loader
```

# Version Compatibility

Loader is compatible with Angular 20 and newer

## Usage

To use the `@nisix/ngx-loader` component in your Angular application, follow these steps:

### Step 1: Import the Component

Add the `ngx-loader` component to your application template where you want the loader to appear. For example, in your `app.component.html`:

```html
<ngx-loader></ngx-loader>
<button (click)="toggleLoader()">Toggle loader</button>
```

### Step 2: Include the Service

To control the visibility of the loader, you need to use the `ngxLoaderService`. Inject this service into your component and use it to toggle the loader's visibility.

#### Example in `app.component.ts`:

```typescript
import { Component } from "@angular/core";
import { ngxLoaderService, NgxLoader } from "@nisix/ngx-loader";

@Component({
  selector: "app-root",
  import: [NgxLoader], // <- import component
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private ngxLoaderService: NgxLoaderService) {} // <- use service

  show() {
    this.ngxLoaderService.show(); // turn on
  }
  hide() {
    this.ngxLoaderService.hide(); // turn off
  }
}
```

## Style change

If you want to update the style of the loader.

```css
.ngx-loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.ngx-loader {
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top-color: #3f51b5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

## Import parameters:

- zIndex - default 10_000.

```
<ngx-loader [zIndex]="1000"></ngx-loader>
```
