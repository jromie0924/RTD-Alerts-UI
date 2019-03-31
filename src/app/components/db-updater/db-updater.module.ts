import { DbUpdaterComponent } from "./components/db-updater.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";

@NgModule({
    declarations: [
        DbUpdaterComponent
    ],
    imports: [
        FormsModule,
        InputTextModule,
        BrowserAnimationsModule,
        ButtonModule
    ]
})
export class DbUpdaterModule {}
