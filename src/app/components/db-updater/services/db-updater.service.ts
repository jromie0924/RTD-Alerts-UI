import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
        const httpOptions = {
            headers: new HttpHeaders({
                "content-type": "application/json",
                "x-trigger": "CORS"
            })
        };
        // headers.append("content-type", "multipart/form");
        // headers.set("content-type", "multipart/form");
        // return this.http.post(this.url, model);
        return this.http.post(this.url, model, httpOptions);
    }
}
