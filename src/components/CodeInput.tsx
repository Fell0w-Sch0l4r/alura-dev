function CodeInput() {
	return (
		<>
		<div className=" bg-sky-300 rounded-xl h-100 flex items-center justify-center ">
			<div className="bg-black w-10/12 h-11/12 rounded-xl  p-5">
				<textarea
					placeholder="Write your code here"
					className="w-full h-full resize-none focus:outline-none placeholder:font-semibold placeholder:opacity-50 placeholder:text-white text-white"
					name=""
					id=""
				></textarea>
			</div>
		</div>

		<button className="rounded-xl w-full h-15 mt-5 bg-sky-500 active:bg-sky-700 text-xl">Highlight</button>
		</>
		
	);
}

export default CodeInput;
