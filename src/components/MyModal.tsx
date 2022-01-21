import React from "react";
import { Button, Modal } from "react-bootstrap";
import { imageWinGame } from "../Utils";

interface Props {
	show: boolean;
	onConfirm: () => any;
}

const MyModal: React.VFC<Props> = ({ show, onConfirm }) => {
	return (
		<Modal show={show}>
			<Modal.Header className="mx-auto">
				<Modal.Title className="fw-bold">Congratulazioni!!!</Modal.Title>
			</Modal.Header>
			<Modal.Body className="mx-auto">
				<h4 className="text-center">Hai Vinto!</h4>
				<img className="mx-auto" style={{ maxHeight: 250 }} src={imageWinGame} alt="WIN" />
			</Modal.Body>
			<Modal.Footer>
				<Button className="myBtn" onClick={onConfirm}>
					Ricomincia
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MyModal;
