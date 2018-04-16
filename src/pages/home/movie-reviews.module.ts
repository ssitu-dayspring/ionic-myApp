import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicPageModule } from 'ionic-angular';

import { MovieReviewsListComponent } from './components/movie-reviews-list.component';
import { MovieReviewComponent } from './components/movie-review.component';
import { MovieReviewsPage } from './movie-reviews.page';
import { ReviewData } from '../../providers/review-data';

@NgModule({
    declarations: [
        MovieReviewsListComponent,
        MovieReviewComponent,
        MovieReviewsPage
    ],
    imports: [
        IonicPageModule.forChild(MovieReviewsPage),
        HttpClientModule
    ],
    exports: [
        MovieReviewsPage
    ],
    providers: [
        ReviewData
    ]
})

export class MovieReviewsModule { }
