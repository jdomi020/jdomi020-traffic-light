import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");
	return (
		<div className="traffic-light">
			<div
				className={
					"light red" + ((selectedColor === "red") ? " glow" : "")
				}></div>
			<div 
				className={
					"light yellow" + ((selectedColor === "yellow") ? " glow" : "")
				}></div>
			<div 
				className={
					"light green" + ((selectedColor === "green") ? " glow" : "")
				}></div>
		</div>
	);
};

// ternary operations are like a lazy if
export default Home;
