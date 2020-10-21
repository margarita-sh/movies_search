import { featureKeyGenres, GenresState } from './states/genres.state';
import { ActionReducerMap } from '@ngrx/store';
import { StateReducerGenres } from './reducers/genres.reducer';

export interface IAppState {
	[featureKeyGenres]: GenresState;
}

export const reducer: ActionReducerMap<IAppState> = {
	[featureKeyGenres]: StateReducerGenres
};
