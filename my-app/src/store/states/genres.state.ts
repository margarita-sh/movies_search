import { Genres } from 'src/app/components/genres/model/genres.model';

export interface GenresState {
	genres: Genres[];
}

export const featureKeyGenres: 'GENRES' = 'GENRES';

export const initialState: GenresState = {
	genres: [],
};
