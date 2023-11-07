import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");
	// the react hook, takes the original variable and hooks it up to be more dynamic

	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"light red" + ((selectedColor === "red") ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" + ((selectedColor === "yellow") ? " glow" : "")
				}></div>
			<div 
				onClick={() => setSelectedColor("green")}
				className={
					"light green" + ((selectedColor === "green") ? " glow" : "")
				}></div>
		</div>
	);
};

// ternary operations are like a lazy if
export default Home;
