import React, { useState } from "react";

function Counter(props) {
	const { actionInc, actionDec, currentCount } = props;

	return (
		<>
			<div>{currentCount}</div>
			<button onClick={actionInc}> + </button>
			<button onClick={actionDec}> - </button>
		</>
	);
}

export default Counter;
