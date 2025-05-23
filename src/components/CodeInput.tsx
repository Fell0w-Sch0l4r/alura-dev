import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-clike";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-go";


function CodeInput() {
	const [code, setCode] = useState('console.log("Hello World")');
	const [language, setLanguage] = useState("python");
	const handleLanguageChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setLanguage(event.target.value);
	};

	function highlightCode(language: string, code: string) {
		switch (language) {
			case "javascript":
				return highlight(code, languages.javascript, "javascript");
			case "python":
				return highlight(code, languages.python, "python");
			case "java":
				return highlight(code, languages.java, "java");
			case "c":
				return highlight(code, languages.c, "c");
			case "cpp":
				return highlight(code, languages.cpp, "cpp");
			case "csharp":
				return highlight(code, languages.csharp, "csharp");
			case "typescript":
				return highlight(code, languages.typescript, "typescript");
			case "bash":
				return highlight(code, languages.bash, "bash");
			case "ruby":
				return highlight(code, languages.ruby, "ruby");
			case "go":
				return highlight(code, languages.go, "go");
			default:
				return code;
		}
	}
	return (
		<>
			<div className=" bg-sky-300 rounded-xl h-fit flex items-center justify-center p-5">
				<Editor
					value={code}
					onValueChange={setCode}
					highlight={(code) => highlightCode(language, code)}
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

			<select
				onChange={handleLanguageChange}
				className="bg-gray-500 mt-10"
				name=""
				id=""
			>
				<option value="python">Python</option>
				<option value="javascript">JavaScript</option>
				<option value="java">Java</option>
				<option value="c">C</option>
				<option value="cpp">C++</option>
				<option value="csharp">C#</option>
				<option value="typescript">TypeScript</option>
				<option value="bash">Bash</option>
				<option value="ruby">Ruby</option>
				<option value="go">Go</option>
				{/* Add more languages as needed */}
			</select>

			<h1>{language}</h1>
		</>
	);
}

export default CodeInput;
