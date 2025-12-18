import { createContext, useContext, useState } from "react";
import users from "../data/users";

const UsersContext = createContext();

function UsersProvider({ children }) {
	const [usersList, setUsersList] = useState(users);

	return (
		<UsersContext.Provider
			value={{
				usersList,
				setUsersList,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
}

function useUsers() {
	const context = useContext(UsersContext);
	return context;
}

export { UsersProvider, useUsers };
