import React, { useState } from "react";
// import axios from "axios";

const Calculator = () => {
	const [result, setResult] = useState(0);
	const KEY = process.env.REACT_APP_API_KEY;
	const [pid, setPid] = useState("");
	const [displayResult, setDisplayResult] = useState();
	let vidIds = [];
	function YTDurationToSeconds(duration) {
		var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

		// eslint-disable-next-line array-callback-return
		match = match.slice(1).map((x) => {
			if (x != null) {
				return x.replace(/\D/, "");
			}
		});

		var hours = parseInt(match[0]) || 0;
		var minutes = parseInt(match[1]) || 0;
		var seconds = parseInt(match[2]) || 0;

		return hours * 3600 + minutes * 60 + seconds;
	}
	const getTotalTime = async () => {
		// setResult(0);
		if (pid === "") {
			setDisplayResult();
			return
		}
		const res = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems/?part=contentDetails&playlistId=${pid}&maxResults=50&key=${KEY}`
		);
		const resJson = await res.json();
		// console.log(resJson['items'])
		for (let i = 0; i < resJson["items"].length; i++) {
			// console.log(resJson['items'][i]['contentDetails']['videoId']);
			vidIds.push(resJson["items"][i]["contentDetails"]["videoId"]);
		}
		// console.log(vidIds);

		const vidRes = await fetch(
			`https://www.googleapis.com/youtube/v3/videos/?part=contentDetails&id=${vidIds}&maxResults=50&key=${KEY}`
		);
		const vidResJson = await vidRes.json();
		// console.log(vidResJson)
		let timeInSeconds = 0;
		for (let i = 0; i < vidResJson["items"].length; i++) {
			// console.log(vidResJson['items'][i]['contentDetails']['duration'])
			timeInSeconds += YTDurationToSeconds(
				vidResJson["items"][i]["contentDetails"]["duration"]
			);
		}
		setResult(timeInSeconds);
		// Set the result and desplay result
		setDisplayResult(
			new Date(timeInSeconds * 1000).toISOString().substring(11, 19)
		);
		timeInSeconds = 0;
	};

	const handlePidChange = (e) => {
		e.preventDefault();
		setPid(e.target.value);
		// console.log(e.target.value)
	};
	const handleClick = (e) => {
		e.preventDefault();
		getTotalTime();
	};
	return (
		<div className="container m-auto">
			<div className="relative flex-grow w-full mt-5 px-5">
				<label
					htmlFor="pid"
					className="leading-7 text-lg font-bold text-gray-600">
					Playlist ID
				</label>
				<input
					type="text"
					className="mt-2 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					id="pid"
					value={pid}
					aria-describedby="emailHelp"
					onChange={(e) => {
						handlePidChange(e);
					}}
					required
				/>
			</div>
			<button
				onClick={handleClick}
				className="mt-3 text-white mx-5 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
				Get Total Time
			</button>

			<div className="row mt-5">
				<div className="container">
					{displayResult && (
						<>
							<h3 className="text-xl font-bold">Total Time: {displayResult} hours</h3>
							<div className="space-x-2">
								<button
									onClick={() => {
										setDisplayResult(
											new Date((result / 0.5) * 1000)
												.toISOString()
												.substring(11, 19)
										);
									}}
									className="mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
									0.5x
								</button>
								<button
									onClick={() => {
										setDisplayResult(
											new Date(result * 1000)
												.toISOString()
												.substring(11, 19)
										);
									}}
									className="mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
									1x
								</button>
								<button
									onClick={() => {
										setDisplayResult(
											new Date((result / 1.25) * 1000)
												.toISOString()
												.substring(11, 19)
										);
									}}
									className="mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
									1.25x
								</button>
								<button
									onClick={() => {
										setDisplayResult(
											new Date((result / 1.5) * 1000)
												.toISOString()
												.substring(11, 19)
										);
									}}
									className="mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
									1.5x
								</button>
								<button
									onClick={() => {
										setDisplayResult(
											new Date((result / 1.75) * 1000)
												.toISOString()
												.substring(11, 19)
										);
									}}
									className="mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
									1.75x
								</button>
								<button
									onClick={() => {
										setDisplayResult(
											new Date((result / 2) * 1000)
												.toISOString()
												.substring(11, 19)
										);
									}}
									className="mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
									2x
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Calculator;
