import React from "react";

function Button(props) {
	const { action, label, classname } = props;

	return (
		<>
			<button onClick={action} className={classname}>
				{" "}
				{label}{" "}
			</button>
		</>
	);
}

export default Button;
