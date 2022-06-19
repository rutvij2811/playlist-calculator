import React from "react";
import {
	Link
  } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex flex-wrap text-base bg-gray-800 p-5 shadow-md">
			<div className="text-white">
				<div>
					<ul className="flex justify-start">
						<li className="mx-2">
							<Link
								aria-current="page"
								to="/">
								Home
							</Link>
						</li>
						<li className="mx-2">
							<Link to="/about">
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
