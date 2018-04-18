import { Action } from '@ngrx/store';
import { type } from '../util';

import { Review } from '../../models/review';

export const ACTION = {
    LOAD_MOVIE_REVIEWS: type('[Movie Review] Load Movie Reviews'),
    UPDATE_MOVIE_REVIEWS: type('[Movie Review] Update Movie Reviews'),
    ADD_MOVIE_REVIEW: type('[Movie Review] Add Movie Review'),
    EDIT_MOVIE_REVIEW: type('[Movie Review] Edit Movie Review'),
    DELETE_MOVIE_REVIEW: type('[Movie Review] Delete Movie Review'),
    ORDER_MOVIE_REVIEWS_BY_DATE: type('[Movie Review] Order Movie Reviews By Date'),
    ORDER_MOVIE_REVIEWS_BY_NAME: type('[Movie Review] Order Move Reviews By Name')
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

export class EditMovieReviewAction implements Action {
    type = ACTION.EDIT_MOVIE_REVIEW;

    constructor(public payload: Review) {}
}

export class DeleteMovieReviewAction implements Action {
    type = ACTION.DELETE_MOVIE_REVIEW;

    constructor(public payload: number) {}
}

export class OrderMovieReviewsByDateAction implements Action {
    type = ACTION.ORDER_MOVIE_REVIEWS_BY_DATE;
}

export class OrderMovieReviewsByNameAction implements Action {
    type = ACTION.ORDER_MOVIE_REVIEWS_BY_NAME;
}

export type Actions
    = LoadMovieReviewsAction
    | UpdateMovieReviewsAction
    | AddMovieReviewAction
    | EditMovieReviewAction
    | DeleteMovieReviewAction
    | OrderMovieReviewsByDateAction
    | OrderMovieReviewsByNameAction;
