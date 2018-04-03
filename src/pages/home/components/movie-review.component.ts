import { Component, Input } from '@angular/core';

import { Review } from '../../../models/review';

@Component({
    selector: 'movie-review',
    templateUrl: './movie-review.component.html'
})

export class MovieReviewComponent
{
    @Input() movieReview: Review = null;

    constructor() {}
}
