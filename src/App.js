import React from "react";
import Project1 from "./components/Project1";
import SplashPage from './components/SplashPage'
import "./styles/App.css";

function App() {
  return (
    <div className="App bg-gray-900 overflow-hidden">
			<div className="sections">
				<SplashPage />
				<Project1 />
			</div>
		</div>
  );
}

export default App;
