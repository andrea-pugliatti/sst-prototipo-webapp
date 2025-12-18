import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import DetailTravel from "./pages/DetailTravel";
import HomePage from "./pages/Homepage";
import { TravelsProvider } from "./contexts/TravelsContext";
import { UsersProvider } from "./contexts/UsersContext";

function App() {
	return (
		<UsersProvider>
			<TravelsProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<DefaultLayout />}>
							<Route path="/" element={<HomePage />} />
							<Route path="/detail/:id" element={<DetailTravel />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</TravelsProvider>
		</UsersProvider>
	);
}

export default App;
