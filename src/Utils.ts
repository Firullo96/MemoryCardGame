import { Pokemon } from "./Dto";

export const numberOfPokemon = 4;

export const imageWinGame = "https://image.freepik.com/free-vector/business-leader-man-holding-winner-golden-cup_3446-650.jpg";

export const shuffleArray = (array: Pokemon[]): Pokemon[] => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

export const getRandomId = (arrayIds: number[]) => {
	let id = 0;
	for (; arrayIds.includes(id) || id === 0; ) {
		id = Math.floor(Math.random() * 898);
	}
	return id;
};
