## Usage

To use the `ngx-an-loader` component in your Angular application, follow these steps:

### Step 1: Import the Component

Add the `ngx-an-loader` component to your application template where you want the loader to appear. For example, in your `app.component.html`:

```html
<ngx-an-loader></ngx-an-loader>
<p>app works</p>
<button (click)="toggleLoader()">Toggle loader</button>
```

### Step 2: Include the Service

To control the visibility of the loader, you need to use the `NgxAnLoaderService`. Inject this service into your component and use it to toggle the loader's visibility.

#### Example in `app.component.ts`:

```typescript
import { Component } from "@angular/core";
import { NgxAnLoaderService } from "ngx-an-loader";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private ngxAnLoaderService: NgxAnLoaderService) {}

  show() {
    this.ngxAnLoaderService.show(); // turn on
  }
  hide() {
    this.ngxAnLoaderService.hide(); // turn off
  }
}
```

### Step 3: Add the Service to Your Module

Ensure that the `NgxAnLoaderService` is provided in your module. This is typically done in the `app.module.ts`:

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgxAnLoaderModule } from "ngx-an-loader";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxAnLoaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Building

To build the library, run:

```bash
ng build ngx-an-loader
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/ngx-an-loader
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
