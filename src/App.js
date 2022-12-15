import logo from "./logo.svg";
import img from "./images.jpeg";
import "./App.css";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import Card from "./components/Card";
import { useState } from "react";
import UserMngmnt from "./components/UserMngmnt";
function App() {
	const [url, setUrl] = useState("home");
	const checkUrl = () => {
		if (url === "home") {
		}
	};
	return (
		<div className="App">
			<header className="header">
				<nav className="navbar">
					<div className="nav-link">
						<img src={logo} className="App-logo" alt="logo" />
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Product</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
						</ul>
					</div>
					<div className="nav-icon" style={{ color: "#fff" }}>
						<Facebook className="icon" />
						<Twitter className="icon" />
						<Instagram className="icon" />
					</div>
				</nav>
			</header>
			<div className="body">
				<div className="image">
					<img src={img} className="" alt="log" />
					<span>Wellcome To React Learning</span>
				</div>
				<h1>Product Latest</h1>
				{/* <div className="content"> */}
				{/* {[1, 2, 3, 4].map((v, i) => (
						<Card
							productName={`Product ${v}`}
							content={`content card ${v}`}
							id={`${v}`}
						/>
					))} */}
				<UserMngmnt />
				{/* </div> */}
			</div>
			<footer>
				<div>react training</div>
			</footer>
		</div>
	);
}

export default App;
