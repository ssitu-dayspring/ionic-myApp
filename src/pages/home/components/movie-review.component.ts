import { Component, Input } from '@angular/core';
import { ActionSheetController, PopoverController} from 'ionic-angular';

import { Review } from '../../../models/review';

@Component({
    selector: 'movie-review',
    templateUrl: './movie-review.component.html'
})

export class MovieReviewComponent
{
    @Input() movieReview: Review = null;

    constructor(public actionSheetCtrl: ActionSheetController) {}

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: `Modifying Movie Review: ${ this.movieReview.movie }`,
            buttons: [
                { text: 'Edit', icon: 'create', handler: () => {} },
                { text: 'Delete', icon: 'trash',  role: 'destructive', handler: () => {} },
                { text: 'Cancel', role: 'cancel'}
            ]
        });

        actionSheet.present();
    }
}
