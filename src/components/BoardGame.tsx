import React, { useEffect, useState } from "react";
import { Pokemon, SelectedPokemon } from "../Dto";
import getPokemon from "../Business";
import { shuffleArray, numberOfPokemon, getRandomId } from "../Utils";
import PokemonCard from "./PokemonCard";
import MyModal from "./MyModal";
import Loader from "./Loader";

interface Props {
	started: boolean;
}

const GameBoard: React.VFC<Props> = ({ started }) => {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
	const [finalList, setFinalList] = useState<Pokemon[]>([]);
	const [openedCards, setOpendCards] = useState<SelectedPokemon[]>([]);
	const [foundedList, setFoundedList] = useState<number[]>([]);

	const [showModal, setShowModal] = useState<boolean>(false);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		setFoundedList([]);
		if (pokemonList.length < numberOfPokemon) {
			const randId = getRandomId(pokemonList.map((el) => el.id));
			getPokemon(randId, (pokemon) => {
				setPokemonList([...pokemonList, pokemon]);
			});
		} else {
			const secondRow: Pokemon[] = pokemonList.map((el) => ({ ...el, row: 2 }));
			const list = shuffleArray(pokemonList.concat(secondRow));
			setFinalList(list);
			setIsLoading(false);
		}
	}, [pokemonList]);

	useEffect(() => {
		if (!started) restart();
		else setFinalList([...shuffleArray(finalList)]);
	}, [started]);

	useEffect(() => {
		if (foundedList.length === numberOfPokemon) setTimeout(() => setShowModal(true), 400);
		if (openedCards?.length === 2) setTimeout(() => setOpendCards([]), 800);
	}, [foundedList, openedCards]);

	const onSelect = ({ id, row }: Pokemon) => {
		const alredyOpen = openedCards?.find((el) => el.id === id && el.row === row);
		if (!started || foundedList.includes(id) || alredyOpen || openedCards?.length === 2) return;

		const match = openedCards?.find((el) => el.id === id && el.row !== row);
		if (match) {
			setOpendCards([]);
			const newFoundedList = [...foundedList, id];
			setFoundedList(newFoundedList);
			if (newFoundedList.length === numberOfPokemon) setTimeout(() => setShowModal(true), 350);
		} else setOpendCards((prev) => [...(prev ?? []), { id, row }]);
	};

	const restart = () => {
		setPokemonList([]);
		setOpendCards([]);
		setFoundedList([]);
		setFinalList([]);
		setShowModal(false);
	};

	return (
		<div className={"d-flex flex-column justify-content-center align-items-center"}>
			<MyModal show={showModal} onConfirm={restart} />
			{isLoading && <Loader />}
			<div className="d-flex justify-content-center col-12 row mb-4 gameBoard">
				{finalList?.map((el) => (
					<PokemonCard
						opened={!!openedCards?.find((x) => x.id === el.id && x.row === el.row) || !started}
						action={{ selectedPokId: (pokemon) => onSelect(pokemon) }}
						founded={foundedList.includes(el.id)}
						key={el.id + "" + el.row}
						pokemon={el}
					/>
				))}
			</div>
		</div>
	);
};

export default GameBoard;
