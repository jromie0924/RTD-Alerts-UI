import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TwitterApiKeysModel } from "../models/twitter-api-keys.model";

@Injectable()
export class DbUpdaterService {

    private url = "localhost:8080";

    constructor(
        private http: HttpClient
    ) {}

    updateApiKeys(consumer, secret): Observable<any> {
        const model = new TwitterApiKeysModel(consumer, secret);
        return this.http.post(this.url, model);
    }
}
