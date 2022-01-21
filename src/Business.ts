import { Pokemon } from "./Dto";

const URL = "https://pokeapi.co/api/v2/pokemon-form/";

const getPokemon = (id: number, cb: (item: Pokemon) => void) => {
	fetch(`${URL}${id}`)
		.then((res) => res.json())
		.then((data) => {
			const pokemon = {
				imageUrl: data.sprites.front_default,
				id: data.id,
				row: 1,
				...data.pokemon,
			} as Pokemon;
			cb(pokemon);
		})
		.catch((err) => console.log("ERRORE", err));
};

export default getPokemon;
