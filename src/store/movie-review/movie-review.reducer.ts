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
        case movieReviews.ACTION.EDIT_MOVIE_REVIEW: {
            let movieReview = (<movieReviews.EditMovieReviewAction> action).payload;
            let movieReviews = state.movieReviews.map((review) => {
                if (review.id === movieReview.id) {
                    return movieReview;
                }

                return review;
            });

            return Object.assign({}, {
                movieReviews: movieReviews
            });
        }
        case movieReviews.ACTION.DELETE_MOVIE_REVIEW: {
            let reviewId = (<movieReviews.DeleteMovieReviewAction> action).payload;
            let movieReviews = state.movieReviews.filter((review: Review) => {
                return review.id !== reviewId;
            });

            return Object.assign({}, {
                movieReviews: movieReviews
            });
        }
        default:
            return state;
    }
}

export const getMovieReviews = (state: State) => state.movieReviews;
