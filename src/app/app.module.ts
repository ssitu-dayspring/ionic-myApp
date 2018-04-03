import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { MovieReviewsPage } from '../pages/home/movie-reviews.page';

import { PersonnelData } from '../providers/personnel-data';

import { MovieReviewsModule } from '../pages/home/movie-reviews.module';

@NgModule({
    declarations: [
        MyApp
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
        MovieReviewsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        PersonnelData
    ]
})

export class AppModule {}
