import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MovieReviewEffects } from '../store/movie-review/movie-review.effects';

import { reducer } from '../store';


import { MyApp } from './app.component';

import { MovieReviewsPage } from '../pages/home/movie-reviews.page';

import { ReviewData } from '../providers/review-data';
import { ReviewsService } from '../services/reviews.service';

import { AddMovieReviewModule } from '../pages/add-movie-review/add-movie-review.module';
import { MovieReviewsModule } from '../pages/home/movie-reviews.module';
import { MovieReviewModalPage } from '../pages/modals/movie-review-modal.page';
import { MovieReviewsPopoverPage } from '../pages/home/movie-reviews.popover';


@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        AddMovieReviewModule,
        MovieReviewsModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(MovieReviewEffects)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MovieReviewsPage,
        MovieReviewModalPage,
        MovieReviewsPopoverPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ReviewData,
        ReviewsService
    ]
})

export class AppModule {}
