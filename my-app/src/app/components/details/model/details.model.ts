export interface DetailsModel {
		adult: boolean;
		backdrop_path: string;
		belongs_to_collection: [];
		budget: number;
		genres: [];
		homepage: string;
		id: number;
		imdb_id: string;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string;
		production_companies: [];
		production_countries: [];
		release_date: string;
		revenue: number;
		runtime: number;
		spoken_languages: [];
		status: string;
		tagline: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
		videos: Videos;

}

export interface Videos {
	results: Result[];
}

export interface Result {
	id: string;
	iso_639_1: string;
	iso_3166_1: string;
	key: string;
	name: string;
	site: string;
	size: number;
	type: string;
}
