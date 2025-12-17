import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	return (
		<>
			<header></header>
			<Outlet />
			<footer></footer>
		</>
	);
}
