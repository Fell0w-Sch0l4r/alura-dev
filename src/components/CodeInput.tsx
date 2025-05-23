import { useState } from "react";
import Editor from "react-simple-code-editor";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
function CodeInput() {
	const [code, setCode] = useState("console.log('hello world')");

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

			

			<div className=" bg-sky-300 rounded-xl h-fit flex items-center justify-center mt-5">
				<div className="w-10/12 h-11/12 rounded-xl">
					<SyntaxHighlighter language="python" style={oneDark}>
						{code}
					</SyntaxHighlighter>
				</div>
			</div>

			
		</>
	);
}

export default CodeInput;
