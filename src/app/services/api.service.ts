import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class ApiService {
    url = "localhost:8080";

    postData(data): Observable<any> {
        return of([1, 2, 3]);
    }
}
