import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Type({ handleTypeSelect }) {
	const [types, setTypes] = useState([]);

	useEffect(() => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:3001/types");
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status === 200) {
				setTypes(JSON.parse(xhr.responseText));
			} else {
				console.log("HTTP error", xhr.status, xhr.statusText);
			}
		};
		xhr.send();
	}, []);

	return (
		<div className="type">
			<h4 className="type__title">Show result for</h4>
			{types.map((item) => (
				<div className="type__name" key={item.id}>
					<small onClick={() => handleTypeSelect(item.name)}>
						<FontAwesomeIcon icon={faAngleRight} /> {item.title}
					</small>
				</div>
			))}
		</div>
	);
}

export default Type;
