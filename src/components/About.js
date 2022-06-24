import React from "react";
import Navbar from "./Navbar";

const About = () => {
	return (
		<div>
			<Navbar />
			<h1 className="text-2xl text-center mt-5 text-gray-800">
				About Youtube Playlist Calculator
			</h1>
			<div className="mt-5 px-5 w-full flex">
				<div className="mx-auto text-lg">
					<p>
						A small hobby project created during my college time in
						order to decide the revision time while going through
						big playlists full of education videos.
					</p>
					<p>
						This project was initially a python script that fetched
						the video duration from the Youtube API based on the
						playlistId provided.
					</p>
					<p>
						While learning web development for transitioning Web3, I
						got the idea to enhance this project as a fun activity.
					</p>
					<p>
						You can checkout the project repo at{" "}
						<a
							className="text-blue-500"
							href="https://github.com/rutvij2811/youtube-playlist-calculator"
							rel="noopener">
							Github
						</a>
					</p>
					<p>
						Hire me as a freenacer at{" "}
						<a
							className="text-green-500"
							href="https://www.upwork.com/freelancers/~0179ae0009424428e5"
							rel="noopener">
							Upwork
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
