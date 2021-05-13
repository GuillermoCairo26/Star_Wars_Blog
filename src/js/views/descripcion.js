import React from "react";
import { Link } from "react-router-dom";

// import { Context } from "../store/appContext";

import "../../styles/descripcion.scss";
import { DescripcionCards } from "../component/descripcionCard";

// View de descripcion de cada personaje
export const DescripcionCard = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<DescripcionCards />
		</div>
	);
};
