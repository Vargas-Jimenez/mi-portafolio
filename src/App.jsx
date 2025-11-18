import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RinconArepa from "./projects/rincon-arepa";
import SaasWeb from "./projects/saas-web";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects/rincon-arepa" element={<RinconArepa />} />
			<Route path="/projects/saas-web" element={<SaasWeb />} />
		</Routes>
	);
}

export default App;
