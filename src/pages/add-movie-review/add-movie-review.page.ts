import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ReviewsService } from '../../services/reviews.service';

@Component({
    selector: 'add-movie-review',
    templateUrl: './add-movie-review.page.html'
})

export class AddMovieReviewPage {
    ngForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public fb: FormBuilder,
        private reviewsSvc: ReviewsService
    ) {
        this.ngForm = this.fb.group({
            movie:       ['', Validators.required],
            releaseDate: ['', Validators.required],
            director:    ['', Validators.required],
            cast: this.fb.array([])
        });
    }

    public getAbstractControl(name: string): AbstractControl {
        return this.ngForm.get(name);
    }

    public addActor() {
        let subformActor = this.fb.group({
            name: ['', Validators.required]
        });

        (<FormArray> this.getAbstractControl('cast')).push(subformActor);
    }

    submit() {
        let data = this.ngForm.getRawValue();
        let cast = data['cast'].map((actor) => {
            return { name: actor.name, role: 'Actor' };
        });

        this.reviewsSvc.addReview({
            movie: data['movie'],
            director: data['director'],
            releaseDate: data['releaseDate'],
            cast: cast,
            title: '',
            review: '',
            rating: 0,

        });

        this.navCtrl.pop();
    }
}
