import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/dangnhap" Component={Login} />
				<Route path="/" Component={Main} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
