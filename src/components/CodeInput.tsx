import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

function CodeInput() {
	const [code, setCode] = useState(
		`function helloWorld() {
  console.log("Hello, world!");
}
helloWorld();`
	);
	
	return (
		<>
		<div className=" bg-sky-300 rounded-xl h-fit flex items-center justify-center p-5">
				<Editor
					value={code}
					onValueChange={setCode}
					highlight={(code) =>
						highlight(code, languages.javascript, "javascript")
					}
					padding={10}
					style={{
						fontFamily: "monospace",
						fontSize: 16,
						background: "black",
						color: "#fff",
						borderRadius: "12px",
						minHeight: "50px",
						height: "fit-content",
						width: "100%",
					}}
				/>
			</div>
		</>
		
	);
}

export default CodeInput;
