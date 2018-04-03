import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';

import { Review } from '../models/review';
import { Personnel } from '../models/personnel';

@Injectable()
export class PersonnelData {
    data: Personnel[];

    constructor(
        public http: HttpClient
    ) {}

    load(): Observable<any> {
        if (this.data) {
            return Observable.of(this.data);
        } else {
            return this.http.get('assets/data/data.json').map((data: any) => {
                return data.map((review) => {
                    return new Review(review);
                });
            });
        }
    }

    processData(data: any) {

    }
}
