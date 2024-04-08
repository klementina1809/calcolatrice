import React from "react";

function Button(props) {
	const { onClickHandler, label, classname } = props;

	return (
		<>
			<button onClick={onClickHandler} className={classname} label={label}>
				{" "}
				{label}{" "}
			</button>
		</>
	);
}

export default Button;
