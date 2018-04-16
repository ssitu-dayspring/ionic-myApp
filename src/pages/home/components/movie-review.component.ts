import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { Review } from '../../../models/review';
import { MovieReviewPopover } from './movie-review.popover';

@Component({
    selector: 'movie-review',
    templateUrl: './movie-review.component.html'
})

export class MovieReviewComponent
{
    @Input() movieReview: Review = null;

    showOptions: boolean = false;

    constructor(public popoverCtrl: PopoverController) {}

    toggleShowOptions() {
        this.showOptions = !this.showOptions;
    }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(MovieReviewPopover);

        popover.present({
            ev: myEvent
        });
    }

    editReview() {
        this.showOptions = false;
    }

    confirmDelete() {
        this.showOptions = false;
    }
}
