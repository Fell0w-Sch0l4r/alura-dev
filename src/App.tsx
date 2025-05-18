import { useState } from "react";
import "./App.css";
import { Drawer, DrawerContent, DrawerTrigger } from "./components/ui/drawer";

function App() {
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	function toggleSearch() {
		setIsSearchVisible(!isSearchVisible);
	}
	return (
		<>
			<header className="">
				<nav className="flex justify-between mt-5 px-6 items-center lg:w-10/12">
					{!isSearchVisible && (
						<div className="">
							<img
								className="sm:w-44 lg:w-60"
								src="assets/images/Logo.svg"
								alt=""
							/>
						</div>
					)}

					{isSearchVisible && (
						<search className="justify-between w-full flex sm:w-7/12 lg:w-5/12">
							<form className="w-full sm:block">
								<input
									placeholder="Pesquisar"
									className="h-11 w-11/12 rounded-xl bg-slate-700 pl-5 focus:outline-none placeholder:font-semibold placeholder:opacity-50 placeholder:text-white text-white lg:h-16"
									type="search"
									id="searchInput"
									name="q"
								/>
							</form>

							<button id="closeBtn" onClick={toggleSearch}>
								<img
									className="size-6"
									src="assets/images/x.svg"
									alt=""
								/>
							</button>
						</search>
					)}
					<form className="w-full hidden sm:flex sm:w-7/12 lg:w-5/12">
						<input
							placeholder="Pesquisar"
							className="h-11 w-11/12 rounded-xl bg-slate-700 pl-5 focus:outline-none placeholder:font-semibold placeholder:opacity-50 placeholder:text-white text-white lg:h-20 lg:placeholder:text-2xl lg:text-2xl"
							type="search"
							id="searchInput"
							name="q"
						/>
					</form>

					{!isSearchVisible && (
						<div
							id="btns"
							className="flex justify-between w-20 items-center sm:w-fit"
						>
							<button
								id="searchBtn"
								className="sm:hidden"
								onClick={toggleSearch}
							>
								<img
									className="size-6"
									src="assets/images/magGlass.svg"
									alt=""
								/>
							</button>

							{/* <button className="lg:hidden">
                                <img
                                    className="size-6"
                                    src="assets/images/menu.svg"
                                    alt=""
                                />
                            </button> */}

							<Drawer>
								<DrawerTrigger asChild>
									<button className="lg:hidden">
										<img
											className="size-6"
											src="assets/images/menu.svg"
											alt=""
										/>
									</button>
								</DrawerTrigger>
								<DrawerContent className="bg-slate-700 b-none shad h-50">
									<div className="mx-auto w-8/12 max-w-sm">
										<div className="p-4 pb-0">
											<ul className="flex flex-col gap-4 text-white md:text-xl">
												<li className="flex items-center gap-2">
													<img
														src="assets/images/CodingIcon.svg"
														alt=""
													/>
													Editor de Código
												</li>
												<li className="flex items-center gap-2">
													<img
														src="assets/images/peopleIcon.svg"
														alt=""
													/>
													Lista Códigos
												</li>
											</ul>
										</div>
									</div>
								</DrawerContent>
							</Drawer>
						</div>
					)}
				</nav>
			</header>
		</>
	);
}

export default App;
