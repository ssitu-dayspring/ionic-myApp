import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { MovieReviewsPage } from '../pages/home/movie-reviews.page';

import { PersonnelData } from '../providers/personnel-data';
import { ReviewsService } from '../services/reviews.service';

import { MovieReviewsModule } from '../pages/home/movie-reviews.module';
import { AddMovieReviewPage } from '../pages/add-movie-review/add-movie-review.page';

@NgModule({
    declarations: [
        MyApp,
        AddMovieReviewPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        MovieReviewsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MovieReviewsPage,
        AddMovieReviewPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        PersonnelData,
        ReviewsService
    ]
})

export class AppModule {}
