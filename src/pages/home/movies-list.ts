import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';

import { PersonnelData } from '../../providers/personnel-data';

import { Review } from '../../models/review';

@Component({
    selector: 'movies-list',
    templateUrl: 'movies-list.html'
})
export class MoviesListPage {
    movieReviews: Observable<Review[]>;

    constructor(
        public navCtrl: NavController,
        private personnelData: PersonnelData
    ) {
        this.movieReviews = this.personnelData.load();
    }
}
