import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-warning p-0 m-3">
				<Link to="/" className="ml-5">
					<img
						style={{ width: "90px" }}
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
					/>
				</Link>
				<div className="nav-item dropdown navbar-nav ml-auto">
					<button
						className="btn btn-outline-success dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};
