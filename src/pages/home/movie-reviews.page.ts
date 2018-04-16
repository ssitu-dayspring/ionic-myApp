import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';

import * as fromRoot from '../../store';
import * as movieReviews from '../../store/movie-review/movie-review.actions';

import { Review } from '../../models/review';
import { AddMovieReviewPage } from '../add-movie-review/add-movie-review.page';

@Component({
    selector: 'movie-reviews',
    templateUrl: './movie-reviews.page.html'
})
export class MovieReviewsPage {
    movieReviews$: Observable<Review[]>;

    movieReviews: Observable<Review[]>;

    constructor(
        public navCtrl: NavController,
        public store: Store<fromRoot.State>
    ) {
        this.store.dispatch(new movieReviews.LoadMovieReviewsAction());
    }

    ngOnInit() {
        this.movieReviews$ = this.store.select(fromRoot.getMovieReviews);
    }

    public addMovieReview() {
        this.navCtrl.push(AddMovieReviewPage);
    }
}
