import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/empty';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../store';
import * as fromMovieReviews from '../../store/movie-review/movie-review.reducer';
import * as movieReview from './movie-review.actions';

import { ReviewData } from '../../providers/review-data';
import { Review } from '../../models/review';

@Injectable()
export class MovieReviewEffects {
    constructor(private actions$: Actions,
                private store: Store<fromRoot.State>,
                private reviewsData: ReviewData) {
    }

    @Effect()
    loadMovieReview$: Observable<Action> = this.actions$
        .ofType(movieReview.ACTION.LOAD_MOVIE_REVIEWS)
        .debounceTime(300)
        .map((action: movieReview.LoadMovieReviewsAction) => undefined)
        .switchMap(() => {
            const nextSearch$ = this.actions$.ofType(movieReview.ACTION.LOAD_MOVIE_REVIEWS).skip(1);

            return this.reviewsData.load()
                .takeUntil(nextSearch$)
                .map(reviewsData => new movieReview.UpdateMovieReviewsAction(reviewsData))
        });

    @Effect()
    orderMovieReviewsByName$: Observable<Action> = this.actions$
        .ofType(movieReview.ACTION.ORDER_MOVIE_REVIEWS_BY_NAME)
        .debounceTime(300)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.movieReviews)
        .switchMap((query: fromMovieReviews.State) => {
            let movieReviews = query.movieReviews
                .slice()
                .sort((a: Review, b: Review) => {
                    if (a.movie == b.movie) {
                        return 0;
                    }

                    return a.movie < b.movie ? -1 : 1;
                });

            return Observable.of(new movieReview.UpdateMovieReviewsAction(movieReviews));
        });

    @Effect()
    orderMovieReviewsByDate$: Observable<Action> = this.actions$
        .ofType(movieReview.ACTION.ORDER_MOVIE_REVIEWS_BY_DATE)
        .debounceTime(300)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.movieReviews)
        .switchMap((query: fromMovieReviews.State) => {
            let movieReviews = query.movieReviews
                .slice()
                .sort((a: Review, b: Review) => {
                    if (a.releaseDate == b.releaseDate) {
                        return 0;
                    }

                    return (new Date(a.releaseDate) < (new Date(b.releaseDate))) ? -1 : 1;
                });

            return Observable.of(new movieReview.UpdateMovieReviewsAction(movieReviews));
        });
}
