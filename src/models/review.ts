import { Personnel } from './personnel';

export class Review
{
    private static decrementer: number = -1;

    id: number;
    movie: string;
    releaseDate: string;
    distributer?: string;
    director: Personnel;
    cast: Personnel[];
    title: string;
    review: string;
    rating: number;

    constructor(json: any) {
        this.id =          json['id'];
        this.movie =       json['movie'];
        this.releaseDate = json['releaseDate'];
        this.title =       json['title'];
        this.review =      json['review'];
        this.rating =      json['rating'];

        this.director = { name: json['director'], role: 'Director' };

        this.cast = [];
        for (let actor of json['cast']) {
            this.cast.push({ name: actor, role: 'Actor' });
        }
    }

    static getId() {
        return this.decrementer --;
    }

    static getEmptyReview(): Review {
        return {
            id: Review.getId(),
            movie: '',
            releaseDate: '',
            director: {
                'role': 'Director',
                'name': ''
            },
            cast: [],
            title: '',
            review: '',
            rating: undefined
        }
    }
}
