import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController, PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';

import * as fromRoot from '../../store';
import * as movieReviews from '../../store/movie-review/movie-review.actions';

import { Review } from '../../models/review';
import { AddMovieReviewPage } from '../add-movie-review/add-movie-review.page';
import { MovieReviewsPopoverPage } from './movie-reviews.popover';

@Component({
    selector: 'movie-reviews',
    templateUrl: './movie-reviews.page.html'
})
export class MovieReviewsPage {
    movieReviews$: Observable<Review[]>;

    movieReviews: Observable<Review[]>;

    constructor(
        public navCtrl: NavController,
        public popoverCtrl: PopoverController,
        public store: Store<fromRoot.State>
    ) {
        this.store.dispatch(new movieReviews.LoadMovieReviewsAction());
    }

    ngOnInit() {
        this.movieReviews$ = this.store.select(fromRoot.getMovieReviews);
    }

    addMovieReview() {
        this.navCtrl.push(AddMovieReviewPage);
    }

    presentPopover(event) {
        let popover = this.popoverCtrl.create(MovieReviewsPopoverPage);

        popover.present({
            ev: event
        });
    }
}
