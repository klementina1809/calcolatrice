import React, { useState } from "react";
import Button from "../components/buttonEs4.jsx";
import "../stylesEsercizi/styleEs4.css";

function Es3() {
	const [count, setCount] = useState(0);

	const [action, setAction] = useState("+");
	const [saved, setSaved] = useState("");
	const [saved2, setSaved2] = useState([]);

	let increment = (n) => {
		setCount(count + n);
	};
	let decrement = (n) => {
		setCount(count - n);
	};
	let divide = (n) => {
		setCount(count / n);
	};
	let multiply = (n) => {
		setCount(count * n);
	};

	let changeAction = (act) => {
		setAction(act);
	};

	let saveNum = (n) => {
		setSaved(n);
		setSaved2([...saved2, n]);
	};

	let checkAction = (n) => {
		if (action === "+") increment(n);
		if (action === "-") decrement(n);
		if (action === "/") divide(n);
		if (action === "*") multiply(n);
	};

	let transfer = (el) => {
		setCount(el);
	};

	return (
		<>
			<div className="container">
				<div className="calculatoreContainer">
					<div className="countContainer">{count}</div>
					<div>
						<Button
							label="1"
							onClickHandler={() => checkAction(1)}
						></Button>
						<Button
							label="2"
							onClickHandler={() => checkAction(2)}
						></Button>
						<Button
							label="3"
							onClickHandler={() => checkAction(3)}
						></Button>
						<Button
							label="+"
							onClickHandler={() => changeAction("+")}
						></Button>
					</div>
					<div>
						<Button
							label="4"
							onClickHandler={() => checkAction(4)}
						></Button>
						<Button
							label="5"
							onClickHandler={() => checkAction(5)}
						></Button>
						<Button
							label="6"
							onClickHandler={() => checkAction(6)}
						></Button>
						<Button
							label="-"
							onClickHandler={() => changeAction("-")}
						></Button>
					</div>
					<div>
						<Button
							label="7"
							onClickHandler={() => checkAction(7)}
						></Button>
						<Button
							label="8"
							onClickHandler={() => checkAction(8)}
						></Button>
						<Button
							label="9"
							onClickHandler={() => checkAction(9)}
						></Button>
						<Button
							label="/"
							onClickHandler={() => changeAction("/")}
						></Button>
					</div>
					<div>
						<Button
							label="reset"
							onClickHandler={() => setCount(0)}
						></Button>
						<Button
							label="x"
							onClickHandler={() => changeAction("*")}
						></Button>
					</div>
					<div>
						<Button
							label="Save"
							onClickHandler={() => saveNum(count)}
						></Button>
					</div>
				</div>
				<div className="saveContainer">
					{saved2.map((el) => (
						<div onClick={() => transfer(el)}>{el}</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Es3;
