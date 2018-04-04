import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';

import { PersonnelData } from '../../providers/personnel-data';

import { Review } from '../../models/review';
import { AddMovieReviewPage } from '../add-movie-review/add-movie-review.page';

@Component({
    selector: 'movie-reviews',
    templateUrl: './movie-reviews.page.html'
})
export class MovieReviewsPage {
    movieReviews: Observable<Review[]>;

    constructor(
        public navCtrl: NavController,
        private personnelData: PersonnelData
    ) {
        this.movieReviews = this.personnelData.load();
    }

    public addMovieReview() {
        this.navCtrl.push(AddMovieReviewPage);
    }
}
