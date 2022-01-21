import React from "react";

const Loader: React.VFC = () => {
	return (
		<div className="backdropLoader">
			<div className="spinner-border text-warning loader mySpinner" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
