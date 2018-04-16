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
        case movieReviews.ACTION.ADD_MOVIE_REVIEW: {
            let movieReviews = state.movieReviews.slice();
            movieReviews.push((<movieReviews.AddMovieReviewAction> action).payload);

            return Object.assign({}, {
                movieReviews: movieReviews
            });
        }
        default:
            return state;
    }
}

export const getMovieReviews = (state: State) => state.movieReviews;
