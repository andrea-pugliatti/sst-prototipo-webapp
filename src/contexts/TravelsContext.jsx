import { createContext, useContext, useState } from "react";
import travels from "../data/travels";

const TravelsContext = createContext();

function TravelsProvider({ children }) {
	const [list, setList] = useState(travels);

	return (
		<TravelsContext.Provider
			value={{
				list,
				setList,
			}}
		>
			{children}
		</TravelsContext.Provider>
	);
}

function useTravels() {
	const context = useContext(TravelsContext);
	return context;
}

export { TravelsProvider, useTravels };
