import { Injectable } from '@angular/core';

import { Review } from '../models/review';

@Injectable()
export class ReviewsService {
    private reviews: Review[] = [];

    setReviews(reviews: Review[]) {
        this.reviews = reviews;
    }

    addReview(review: Review) {
        this.reviews.push(review);
    }

    getReviews() {
        return this.reviews;
    }
}
