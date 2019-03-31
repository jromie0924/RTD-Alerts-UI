import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DbUpdaterComponent } from "./components/db-updater/components/db-updater.component";

const routes: Routes = [
  { path: "", component: DbUpdaterComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {}
