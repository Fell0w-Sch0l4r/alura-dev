import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import CodeInput from "./components/CodeInput";
import CodeGalery from "./components/CodeGalery";
import type { Code } from "./types/code";
import { getCodesFromStorage, setCodesToStorage } from "./lib/codeStorage";



function App() {
	
	const [activeMenu, setActiveMenu] = useState<"editor" | "list">("editor");
	function handleMenuSelect(menu: "editor" | "list") {
		setActiveMenu(menu);
	}

	const [codeList, setCodeList] = useState<Code[]>(getCodesFromStorage())
	function getCode(code: Code){
		setCodeList([...codeList, code])
		setCodesToStorage([...codeList, code]);
		handleMenuSelect("list")
	}
	
	return (
		<>
			<header className="">
				<NavBar activeMenu={activeMenu} handleMenuSelect={handleMenuSelect}/>
			</header>

			<main className="lg:flex lg:justify-between lg:mt-10 border-red-500">
				<div className="text-white hidden lg:block border-white text-2xl h-50 ml-5">
					<h2>Menu</h2>
					<ul>
						<li
							onClick={() => handleMenuSelect("editor")}
							className={`flex items-center gap-2 mb-5 mt-3 cursor-pointer ${
								activeMenu === "editor" ? "" : "opacity-50"
							}`}
						>
							<img src="assets/images/CodingIcon.svg" alt="" />
							Editor de Código
						</li>
						<li
							onClick={() => handleMenuSelect("list")}
							className={`flex items-center gap-2 cursor-pointer ${
								activeMenu === "list" ? "" : "opacity-50"
							}`}
						>
							<img src="assets/images/peopleIcon.svg" alt="" />
							Lista Códigos
						</li>
						
					</ul>
				</div>
				<section className=" border-green-400 mt-6 w-11/12 mx-auto lg:w-9/12 text-white">
					
					{activeMenu === "editor"? <CodeInput getCode={getCode}/> : <CodeGalery Codes={codeList} setCode={setCodeList}/>}
					
				</section>
			</main>
		</>
	);
}

export default App;
