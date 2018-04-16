import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromMovieReviews from './movie-review/movie-review.reducer';

export interface State {
    movieReviews: fromMovieReviews.State;
    router: fromRouter.RouterState;
}

const reducers = {
    movieReviews: fromMovieReviews.reducer,
    router: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    // if (process.env.ENV === 'production') {
    //     return productionReducer(state, action);
    // }
    // else {
        return developmentReducer(state, action);
    // }
}

export const getRouterPath = (state: State) => state.router.path;

/* ================
 * Movie Reviews
 * ================ */
export const getMovieReviewsState = (state: State) => state.movieReviews;
export const getMovieReviews = createSelector(getMovieReviewsState, fromMovieReviews.getMovieReviews);
