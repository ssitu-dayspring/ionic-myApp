import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicPageModule } from 'ionic-angular';

import { MovieReviewsListComponent } from './components/movie-reviews-list.component';
import { MovieReviewComponent } from './components/movie-review.component';
import { MovieReviewsPage } from './movie-reviews.page';
import { MovieReviewModalPage } from '../modals/movie-review-modal.page';
import { MovieReviewsPopoverPage } from './movie-reviews.popover';
import { ReviewData } from '../../providers/review-data';

import { AddMovieReviewModule } from '../add-movie-review/add-movie-review.module';

@NgModule({
    declarations: [
        MovieReviewsListComponent,
        MovieReviewComponent,
        MovieReviewsPage,
        MovieReviewModalPage,
        MovieReviewsPopoverPage
    ],
    imports: [
        IonicPageModule.forChild(MovieReviewsPage),
        HttpClientModule,
        AddMovieReviewModule
    ],
    exports: [
        MovieReviewsPage,
        MovieReviewModalPage,
        MovieReviewsPopoverPage
    ],
    providers: [
        ReviewData
    ]
})

export class MovieReviewsModule { }
