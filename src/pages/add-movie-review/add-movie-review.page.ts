import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../models/review';
import { Personnel } from '../../models/personnel';

const MOVIE = 'movie';
const REVIEW = 'review';

@Component({
    selector: 'add-movie-review',
    templateUrl: './add-movie-review.page.html'
})

export class AddMovieReviewPage {
    @Input() movieReview: Review = null;

    ngForm: FormGroup;
    formSegment: string = MOVIE;
    isNew: boolean = false;

    constructor(
        public navCtrl: NavController,
        public fb: FormBuilder,
        private reviewsSvc: ReviewsService
    ) {}

    ngOnInit() {
        if (!this.movieReview) {
            this.movieReview = Review.getEmptyReview();
            this.isNew = true;
        }

        this.ngForm = this.fb.group({
            movie:       [this.movieReview.movie, Validators.required],
            releaseDate: [this.movieReview.releaseDate, Validators.required],
            director:    [this.movieReview.director.name, Validators.required],
            cast:        this.fb.array([]),
            title:       [this.movieReview.title, Validators.required],
            review:      [this.movieReview.review, Validators.required],
            stars:       [this.movieReview.rating, Validators.required]
        });

        this.movieReview.cast.forEach((personnel: Personnel) => {
            this.addActor(personnel.name);
        });
    }

    public getAbstractControl(name: string): AbstractControl {
        return this.ngForm.get(name);
    }

    public addActor(name?: string) {
        let subformActor = this.fb.group({
            name: [name ? name : '', Validators.required]
        });

        (<FormArray> this.getAbstractControl('cast')).push(subformActor);
    }

    public removeActor(id: number) {
        (<FormArray> this.getAbstractControl('cast')).removeAt(id);
    }

    validate(formGroup: (FormGroup | FormArray)) {
        Object.keys(formGroup.controls).forEach((field) => {
            let control: AbstractControl = formGroup.get(field);

            if (control instanceof FormControl) {
                control.markAsDirty({onlySelf: true});
            } else if (control instanceof FormGroup || control instanceof FormArray) {
                this.validate(<FormGroup> control);
            }
        });
    }

    onSubmit() {
        this.validate(this.ngForm);

        if (this.ngForm.valid) {
            this.submitData();
        }
    }

    private submitData() {
        let data = this.ngForm.getRawValue();
        let review = this.getReview(data);

        if (this.isNew) {
            this.reviewsSvc.addReview(review);
        } else {
            this.reviewsSvc.editReview(review);
            console.log('Edited');
        }

        this.navCtrl.pop();
    }

    private getReview(data: any) {
        let cast = data['cast'].map((actor) => {
            return { name: actor.name, role: 'Actor' };
        });

        return {
            id: this.isNew ? Review.getId() : this.movieReview.id,
            movie: data['movie'],
            director: { name: data['director'], role: 'Director' },
            releaseDate: data['releaseDate'],
            cast: cast,
            title: data['title'],
            review: data['review'],
            rating: data['stars'],
        };
    }
}
