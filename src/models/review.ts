import { Personnel } from './personnel';

export class Review
{
    movie: string;
    releaseDate: string;
    distributer?: string;
    director: Personnel;
    actors: Personnel[];
    title: string;
    review: string;
    rating: number;

    constructor(json: any) {
        this.movie =       json['movie'];
        this.releaseDate = json['releaseDate'];
        this.title =       json['title'];
        this.review =      json['review'];
        this.rating =      json['rating'];

        this.director = { name: json['director'], role: 'Director' };

        this.actors = [];
        for (let actor of json['actors']) {
            this.actors.push({ name: actor, role: 'Actor' });
        }
    }
}
