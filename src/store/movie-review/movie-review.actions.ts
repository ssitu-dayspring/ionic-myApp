import { Action } from '@ngrx/store';
import { type } from '../util';

import { Review } from '../../models/review';

export const ACTION = {
    LOAD_MOVIE_REVIEWS: type('[Movie Review] Load Movie Reviews'),
    UPDATE_MOVIE_REVIEWS: type('[Movie Review] Update Movie Reviews'),
    ADD_MOVIE_REVIEW: type('[Movie Review] Add A Movie Review')
};

export class LoadMovieReviewsAction implements Action {
    type = ACTION.LOAD_MOVIE_REVIEWS;
}

export class UpdateMovieReviewsAction implements Action {
    type = ACTION.UPDATE_MOVIE_REVIEWS;

    constructor(public payload: Review[]) {}
}

export class AddMovieReviewAction implements Action {
    type = ACTION.ADD_MOVIE_REVIEW;

    constructor(public payload: Review) {}
}

export type Actions
    = LoadMovieReviewsAction
    | UpdateMovieReviewsAction
    | AddMovieReviewAction;
