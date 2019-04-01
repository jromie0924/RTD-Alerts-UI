import { Component, OnDestroy } from "@angular/core";
import { DbUpdaterService } from "../services/db-updater.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: "app-db-updater",
    templateUrl: "db-updater.component.html",
    styleUrls: ["db-updater.component.css"]
})
export class DbUpdaterComponent implements OnDestroy {
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

    private unsubscribe = new Subject();

    constructor(
        private dbUpdaterService: DbUpdaterService
    ) {
    }

    updateApiKeys() {
        this.dbUpdaterService.updateApiKeys(this.consumer, this.consumerSecret)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(res => {
            console.log(res);
        });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
    }
}
