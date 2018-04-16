import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store';
import * as movieReviews from '../store/movie-review/movie-review.actions';

import { Review } from '../models/review';

@Injectable()
export class ReviewsService {
    constructor(private store: Store<fromRoot.State>) {}

    addReview(review: Review) {
        this.store.dispatch(new movieReviews.AddMovieReviewAction(review));
    }
}
