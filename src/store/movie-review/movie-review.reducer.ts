import { Review } from '../../models/review';

import * as movieReviews from './movie-review.actions';

export interface State {
    movieReviews: Review[]
}

const initialState: State = {
    movieReviews: []
};

export function reducer(state = initialState, action: movieReviews.Actions): State {
    switch (action.type) {
        case movieReviews.ACTION.UPDATE_MOVIE_REVIEWS: {
            return Object.assign({}, {
                movieReviews: (<movieReviews.UpdateMovieReviewsAction> action).payload
            });
        }
        default:
            return state;
    }
}

export const getMovieReviews = (state: State) => state.movieReviews;
