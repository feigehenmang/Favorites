import * as React from "react";
import * as ReactDOM from "react-dom";

import First from "./component/first";
ReactDOM.render(
	<First name="TypeScript" enthusiasmLevel={10} />,
	document.getElementById('root') as HTMLElement,
	function(){
		console.log("?")
	}
);
