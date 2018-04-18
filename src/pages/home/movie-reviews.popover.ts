import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {ReviewsService} from "../../services/reviews.service";


@Component({
    selector: 'movie-reviews-popover',
    template: `
        <ion-list>
            <ion-item-group>
                <!--<ion-label>Sort By:</ion-label>-->
                <ion-row>
                    <ion-col style="padding: 0;">
                        <button ion-item detail-none
                                class="item-ios text-button item item-block popover-text-button"
                                style="border-right: 0.55px solid #c8c7cc;"
                                (click)="orderByDate()">
                            <ion-label class="label">Date</ion-label>
                        </button>
                    </ion-col>
                    <ion-col style="padding: 0;">
                        <button ion-item detail-none
                                class="item-ios text-button item item-block popover-text-button"
                                (click)="orderByName()">
                            <ion-label class="label">A-Z</ion-label>
                        </button>
                    </ion-col>
                </ion-row>
            </ion-item-group>
            
            <button ion-item (click)="search()">
                <ion-icon name="search" item-start color="primary"></ion-icon> Search
            </button>
        </ion-list>
    `
})

export class MovieReviewsPopoverPage
{
    constructor(
        public viewCtrl: ViewController,
        private reviewsService: ReviewsService
    ) {}

    orderByDate() {
        this.reviewsService.orderByDate();
        this.viewCtrl.dismiss();
    }

    orderByName() {
        this.reviewsService.orderByName();
        this.viewCtrl.dismiss();
    }

    search() {
        this.viewCtrl.dismiss();
    }
}
