import { Routes } from "@angular/router";
import { AppProd } from "./app-prod/app-prod";

export const routes: Routes = [
  {
    path: "",
    component: AppProd,
  },

  { path: "**", redirectTo: "" },
];
