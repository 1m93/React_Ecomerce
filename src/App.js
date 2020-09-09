import React, { useState } from "react";
import Navbar from "./components/header/Navbar";
import SideBar from "./components/sidebar/SideBar";
import Products from "./components/products/Products";

function App() {
	const [type, setType] = useState("");
	const [brand, setBrand] = useState([]);
	const [rate, setRate] = useState("");
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [search, setSearch] = useState("");

	const handleTypeSelect = (value) => {
		setType(value);
	};

	const handleBrandSelect = (value) => {
		setBrand(value);
	};

	const handleRateSelect = (value) => {
		setRate(value);
	};

	const handleFromSelect = (value) => {
		setFrom(value);
	};

	const handleToSelect = (value) => {
		setTo(value);
	};

	const handleSearchChange = (value) => {
		setSearch(value);
	};

	const handleClearFilter = () => {
		setType("");
		setBrand([]);
		setRate("");
		setFrom("");
		setTo("");
	};

	return (
		<div className="App">
			<Navbar handleSearchChange={handleSearchChange} />
			<main>
				<SideBar
					handleTypeSelect={handleTypeSelect}
					handleBrandSelect={handleBrandSelect}
					handleRateSelect={handleRateSelect}
					handleFromSelect={handleFromSelect}
					handleToSelect={handleToSelect}
					from={from}
					to={to}
					handleClearFilter={handleClearFilter}
					type={type}
					brand={brand}
					rate={rate}
				/>
				<Products
					type={type}
					brand={brand}
					rate={rate}
					from={from}
					to={to}
					search={search}
				/>
			</main>
		</div>
	);
}

export default App;
