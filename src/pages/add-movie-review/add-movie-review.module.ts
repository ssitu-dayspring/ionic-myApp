import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule } from 'ionic-angular';
import { AddMovieReviewPage } from './add-movie-review.page';

@NgModule({
    declarations: [
        AddMovieReviewPage,
    ],
    imports: [
        IonicPageModule.forChild(AddMovieReviewPage),
        BrowserModule
    ],
    exports: [
        AddMovieReviewPage
    ],
    entryComponents: [
        AddMovieReviewPage
    ]
})

export class AddMovieReviewModule {}
