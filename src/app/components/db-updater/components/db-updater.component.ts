import { Component } from "@angular/core";

@Component({
    selector: "app-db-updater",
    templateUrl: "db-updater.component.html",
    styleUrls: ["db-updater.component.css"]
})
export class DbUpdaterComponent {
    set consumer(val: string) {
        this._consumer = val;
        this.updateApiButtonDisabled = !(val && this.consumerSecret);
    }

    get consumer() {
        return this._consumer;
    }

    set consumerSecret(val: string) {
        this._consumerSecret = val;
        this.updateApiButtonDisabled = !(val && this.consumer);
    }

    get consumerSecret() {
        return this._consumerSecret;
    }

    allApiKeysFilledOut = true;

    updateApiButtonDisabled = true;

    private _consumer: string;

    private _consumerSecret: string;

    constructor() {
    }

    updateApiKeys() {
        // TODO: make service call to update api keys
    }
}
