import { Component, Input } from '@angular/core';

import { Review } from '../../../models/review';

@Component({
    selector: 'movie-reviews-list',
    templateUrl: './movie-reviews-list.component.html'
})
export class MovieReviewsListComponent {
    @Input() movieReviews: Review[];

    constructor() {}
}
