import React, { useState } from "react";
import Button from "../components/buttonEs3.jsx";

function Es3() {
	const [count, setCount] = useState(0);
	const [classes, setClasses] = useState("green");

	let increment = (n) => {
		setCount(count + n);
	};
	let decrement = (n) => {
		setCount(count - n);
	};
	let changeClassName = (clas) => {
		setClasses(clas);
	};

	let checkClass = (n) => {
		if (classes === "green") increment(n);
		if (classes === "red") decrement(n);
	};

	return (
		<>
			<div>{count}</div>
			<Button
				label="1"
				action={() => checkClass(1)}
				classname={classes}
			></Button>
			<Button
				label="2"
				action={() => checkClass(2)}
				classname={classes}
			></Button>
			<Button
				label="3"
				action={() => checkClass(3)}
				classname={classes}
			></Button>

			<Button label="+" action={() => changeClassName("green")}></Button>
			<Button label="-" action={() => changeClassName("red")}></Button>
		</>
	);
}

export default Es3;
