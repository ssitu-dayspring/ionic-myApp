import { Component, Input } from '@angular/core';
import {ActionSheetController, AlertController, ModalController, PopoverController} from 'ionic-angular';

import { Review } from '../../../models/review';
import { ReviewsService } from '../../../services/reviews.service';
import { MovieReviewModalPage } from '../../modals/movie-review-modal.page';

@Component({
    selector: 'movie-review',
    templateUrl: './movie-review.component.html'
})

export class MovieReviewComponent
{
    @Input() movieReview: Review = null;

    constructor(
        public actionSheetCtrl: ActionSheetController,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        private movieReviewSvc: ReviewsService
    ) {}

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: `Modifying Movie Review: ${ this.movieReview.movie }`,
            buttons: [
                {
                    text: 'Edit',
                    icon: 'create',
                    handler: () => {
                        this.presentEditModal();
                    }
                }, {
                    text: 'Delete',
                    icon: 'trash',
                    role: 'destructive',
                    handler: () => {
                        this.presentConfirmDeleteAction();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });

        actionSheet.present();
    }

    presentEditModal() {
        let editReviewModal = this.modalCtrl.create(MovieReviewModalPage, {
            movieReview: this.movieReview
        });

        editReviewModal.present();
    }

    presentConfirmDeleteAction() {
        let alert = this.alertCtrl.create({
            title: `Delete review: ${ this.movieReview.movie }?`,
            message: `Are you sure you want to delete this movie review?`,
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {}
                },
                {
                    text: 'Delete',
                    cssClass: 'btn-delete',
                    handler: () => {
                        this.movieReviewSvc.deleteReview(this.movieReview.id);
                    }
                }
            ]
        });

        alert.present();
    }
}
