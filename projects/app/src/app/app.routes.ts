import { Routes } from "@angular/router";
import { AppLocal } from "./app-local/app-local";
import { AppProd } from "./app-prod/app-prod";

export const routes: Routes = [
  {
    path: "app-local",
    component: AppLocal,
  },
  {
    path: "app-prod",
    component: AppProd,
  },

  { path: "**", redirectTo: "app-local" },
];
