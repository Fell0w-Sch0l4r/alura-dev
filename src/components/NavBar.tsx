import { useState } from "react";
import { DrawerTrigger, DrawerContent, DrawerClose, Drawer } from "./ui/drawer";

interface NavBarProps {
	activeMenu: "editor" | "list";
	handleMenuSelect: (menu: "editor" | "list") => void;
}

function NavBar({ activeMenu, handleMenuSelect }: NavBarProps) {
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	function toggleSearch() {
		setIsSearchVisible(!isSearchVisible);
	}
	return (
		<nav className="flex justify-between mt-5 px-6 items-center lg:w-full">
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
			<form className="w-full hidden sm:flex sm:w-7/12 lg:w-7/12 xl:w-250 lg:mr-32">
				<input
					placeholder="Pesquisar"
					className="h-10 w-full rounded-xl bg-slate-700 pl-5 focus:outline-none placeholder:font-semibold placeholder:opacity-50 placeholder:text-white text-white lg:h-15 xl:h-20 lg:placeholder:text-2xl lg:text-2xl"
					type="search"
					id="searchInput"
					name="q"
				/>
			</form>

			<div className="hidden lg:flex lg:gap-2 lg:items-center text-white text-2xl">
				<img className="size-13 rounded-full hidden lg:inline xl:size-20" src="assets/images/user.jpg" alt="" />
				Harry
			</div>
			
		

			{!isSearchVisible && (
				<div
					className="flex justify-between w-20 items-center sm:w-fit lg:hidden"
				>
					<button
						className="sm:hidden"
						onClick={toggleSearch}
					>
						<img
							className="size-6"
							src="assets/images/magGlass.svg"
							alt=""
						/>
					</button>

					{/* whenever it is possible, turn this menu button into a component, it need global state management and/or something from tanstack */}
					<Drawer>
						<DrawerTrigger asChild>
							<button className="">
								<img
									className="size-6"
									src="assets/images/menu.svg"
									alt=""
								/>
							</button>
						</DrawerTrigger>
						<DrawerContent className="bg-slate-700 b-none shad h-60">
							<div className="mx-auto w-8/12 max-w-sm">
								<div className="p-4 pb-0">
									<ul className="flex flex-col gap-4 text-white md:text-xl">
										<DrawerClose>
											<li
												className={`flex items-center gap-2 ${
													activeMenu === "editor"
														? ""
														: "opacity-50"
												}`}
												onClick={() =>
													handleMenuSelect("editor")
												}
											>
												<img
													src="assets/images/CodingIcon.svg"
													alt=""
												/>
												Code Editor
											</li>
										</DrawerClose>
										<DrawerClose>
											<li
												className={`flex items-center gap-2 ${
													activeMenu === "list"
														? ""
														: "opacity-50"
												}`}
												onClick={() =>
													handleMenuSelect("list")
												}
											>
												<img
													src="assets/images/peopleIcon.svg"
													alt=""
												/>
												Code List
											</li>
										</DrawerClose>
										<DrawerClose>
											<li className="flex items-center gap-2 ">
												<img
													className="size-13 rounded-full"
													src="assets/images/user.jpg"
													alt=""
												/>
												Harry
											</li>
										</DrawerClose>
									</ul>
								</div>
							</div>
						</DrawerContent>
					</Drawer>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
