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
import { of } from 'rxjs/observable/of';

import * as fromRoot from '../../store';
import * as movieReview from './movie-review.actions';

import { ReviewData } from '../../providers/review-data';

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
}
