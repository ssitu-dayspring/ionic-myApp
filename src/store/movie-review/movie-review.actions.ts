import { Action } from '@ngrx/store';
import { type } from '../util';

import { Review } from '../../models/review';

export const ACTION = {
    LOAD_MOVIE_REVIEWS: type('[Movie Review] Load Movie Reviews'),
    UPDATE_MOVIE_REVIEWS: type('[Movie Review] Update Movie Reviews')
};

export class LoadMovieReviewsAction implements Action {
    type = ACTION.LOAD_MOVIE_REVIEWS;
}

export class UpdateMovieReviewsAction implements Action {
    type = ACTION.UPDATE_MOVIE_REVIEWS;

    constructor(public payload: Review[]) {}
}

export type Actions
    = LoadMovieReviewsAction
    | UpdateMovieReviewsAction;
