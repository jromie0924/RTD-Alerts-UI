import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DbUpdaterComponent } from "./components/db-updater/components/db-updater.component";
import { FormsModule } from "@angular/forms";
import { DbUpdaterModule } from "./components/db-updater/db-updater.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ApiService } from "./services/api.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    DbUpdaterModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
