import React from "react";
import Navbar from "./Navbar";

const About = () => {
	return (
		<div>
			<Navbar />
			<h1 className="text-2xl text-center mt-5">
				About Youtube Playlist Calculator
			</h1>
			<div className="container mx-12 mt-5">
				<p>
					A small hobby project created during my collage time in
					order to decide the revision time while going through big
					playlists full of education videos. This project was initally a python script which fetched the video duration from the Youtube API based on the playlistId provided.
				</p>
                <p>
                    While learning web-development for transitioning Web3, I got the idea to enhance this project as a fun activity.
                </p>
                <p>You can checkout my github <a className="text-blue-500" href="https://github.com/rutvij2811" target={"_blank"}>here</a></p>
			</div>
		</div>
	);
};

export default About;
