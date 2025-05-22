function CodeInput() {
  return (
    <div className=" bg-sky-300 rounded-xl h-96 flex items-center justify-center">
      <div className="bg-black w-10/12 h-10/12 rounded-xl  p-5">
        <textarea className="w-full h-full focus:outline-none" name="" id=""></textarea>
      </div>
    </div>
  );
}

export default CodeInput;