import React, { useState } from "react";

const Card = (prop) => {
	const [color, setColor] = useState("");
	const changeColor = (id) => {
		setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
		document.getElementById(id).style.color = color;
	};
	return (
		<div className="card">
			<div className="card-image">
				<img src="/images.jpeg"></img>
			</div>
			<div className="card-content">
				<h3>{prop.productName}</h3>
				<p id={`${prop.id}`}>{prop.content}</p>
				<button type="button" onClick={() => changeColor(prop.id)}>
					Add to card
				</button>
			</div>
		</div>
	);
};

export default Card;
