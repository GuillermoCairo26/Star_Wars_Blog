import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../component/cards";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="text-danger m-2">Character</h1>
			<div className="row d-flex-row overflow-auto flex-nowrap">
				{store.personajes.map((item, index) => {
					return (
						<div key={index} className="col-lg-4 mb-5">
							<Cards />
						</div>
					);
				})}
			</div>
		</div>
	);
};
