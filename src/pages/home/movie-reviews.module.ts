import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicPageModule } from 'ionic-angular';

import { MovieReviewsListComponent } from './components/movie-reviews-list.component';
import { MovieReviewComponent } from './components/movie-review.component';
import { MovieReviewsPage } from './movie-reviews.page';
import { MovieReviewModalPage } from '../modals/movie-review-modal.page';
import { ReviewData } from '../../providers/review-data';

import { AddMovieReviewModule } from '../add-movie-review/add-movie-review.module';

@NgModule({
    declarations: [
        MovieReviewsListComponent,
        MovieReviewComponent,
        MovieReviewsPage,
        MovieReviewModalPage
    ],
    imports: [
        IonicPageModule.forChild(MovieReviewsPage),
        HttpClientModule,
        AddMovieReviewModule
    ],
    exports: [
        MovieReviewsPage,
        MovieReviewModalPage
    ],
    providers: [
        ReviewData
    ]
})

export class MovieReviewsModule { }
