function App() {
	return (
		<>
			{/* Nav */}
			<div className="p-4 grid place-items-center shadow-md max-h-32 fixed w-full">
				<nav className="flex justify-start items-center w-4/5">
					<a href="/" className="text-4xl w-1/4 font-bold">
						WT4
					</a>
				</nav>
			</div>

			<div className="h-32"></div>
			<div className="grid place-items-center grid-rows-5 h-[500px]">
				<p className="row-span-4">This page is currently being built.</p>
				<p className="row-span-1">
					2024 &copy; <b>whatthefour.com</b>, 2024
				</p>
			</div>
		</>
	);
}

export default App;
