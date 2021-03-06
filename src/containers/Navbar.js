import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar({ handleSearchChange }) {
	return (
		<header>
			<div className="navbar">
				<a href="./">
					<img
						className="navbar__logo"
						src={require("../images/logo-is.webp")}
						width="40px"
						alt="logo"
					/>
				</a>
				<a className="navbar__text" href="./">
					<h1>amazing</h1>
				</a>
				<form className="navbar__search">
					<input
						type="text"
						placeholder="Search a product"
						onChange={(value) => {
							handleSearchChange(value.target.value);
						}}
					/>
					<button type="button">
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</form>
			</div>
		</header>
	);
}

export default Navbar;
