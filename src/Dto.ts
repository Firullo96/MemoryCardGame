export interface Pokemon {
	id: number;
	name: string;
	url: string;
	imageUrl: string;
	row: 1 | 2;
}

export interface SelectedPokemon {
	id: number;
	row: number;
}
