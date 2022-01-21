import React from "react";
import { Pokemon } from "../Dto";

interface Props {
	pokemon: Pokemon;
	opened: boolean;
	founded: boolean;
	action: {
		selectedPokId: (pokemon: Pokemon) => void;
	};
}

const PokemonCard: React.VFC<Props> = ({ pokemon, founded, opened, action }) => {
	return (
		<div className={`pokemon-card col-sm-2 col-md-3 col-lg-3 px-0 ${opened || founded ? "flipped" : ""}`} onClick={() => action.selectedPokId(pokemon)}>
			<div className="inner">
				<div className="front">
					<img alt="title" src={pokemon.imageUrl} />
				</div>
				<div className="back"></div>
			</div>
		</div>
	);
};

export default PokemonCard;
