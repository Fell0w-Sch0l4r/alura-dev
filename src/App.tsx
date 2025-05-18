import "./App.css";

function App() {
	return (
		<>
			<header className="">
				<nav className="flex justify-between mt-5 px-6 items-center lg:w-10/12">
					<div id="logo" className="">
						<img
							className="sm:w-44 lg:w-60"
							src="assets/images/Logo.svg"
							alt=""
						/>
					</div>

					<search className="justify-between w-full hidden sm:flex sm:w-7/12 lg:w-5/12">
						<form className="w-full hidden sm:block">
							<input
								placeholder="Pesquisar"
								className="h-11 w-11/12 rounded-xl bg-slate-700 pl-5 focus:outline-none placeholder:font-semibold placeholder:opacity-50 placeholder:text-white text-white lg:h-16"
								type="search"
								id="searchInput"
								name="q"
							/>
						</form>

						<button id="closeBtn" className="hidden">
							<img
								className="size-6"
								src="assets/images/x.svg"
								alt=""
							/>
						</button>
					</search>

					<div
						id="btns"
						className="flex justify-between w-20 items-center sm:w-fit"
					>
						<button id="searchBtn" className="sm:hidden">
							<img
								className="size-6"
								src="assets/images/magGlass.svg"
								alt=""
							/>
						</button>

						<button className="lg:hidden">
							<img
								className="size-6"
								src="assets/images/menu.svg"
								alt=""
							/>
						</button>
					</div>
				</nav>
			</header>
		</>
	);
}

export default App;
