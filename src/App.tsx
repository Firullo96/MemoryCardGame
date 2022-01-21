import { useState } from "react";
import { Button } from "react-bootstrap";
import GameBoard from "./components/BoardGame";
import "./css/App.css";

export default function App() {
	const [started, setStarted] = useState<boolean>(false);

	return (
		<div className="d-flex flex-column justify-content-center">
			<h1 className={"m-0 p-0 my-5 text-center fw-bold"}>Memory Card Game </h1>
			<GameBoard started={started} />
			<Button onClick={() => setStarted((prev) => !prev)} size="lg" className={`btn mx-auto px-4 myBtn${started ? "-dark" : ""}`}>
				{started ? "Esci" : "Start"}
			</Button>
		</div>
	);
}
