import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import DetailTravel from "./pages/DetailTravel";
import HomePage from "./pages/Homepage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/detail/:id" element={<DetailTravel />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
