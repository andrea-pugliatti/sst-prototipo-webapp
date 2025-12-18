import { useState } from "react";

const SearchBar = ({ users, onSearchResults }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();

		const value = searchTerm.toLowerCase().trim();
		setSearchTerm(value);

		if (value === "") {
			// se la barra di ricerca è vuota, mostro tutti i partecipanti
			onSearchResults(users);
			return;
		}

		// filtro gli utenti
		const results = users.filter((user) => {
			const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
			return fullName.includes(value);
		});

		onSearchResults(results);
		setSearchTerm("");
	};

	return (
		<form onSubmit={handleSearch} className="w-100">
			<div className="input-group shadow-sm">
				<input
					type="text"
					className="form-control form-control-lg"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Cerca partecipante per nome e cognome..."
					aria-label="Cerca partecipante"
				/>
				<button className="btn btn-primary px-4" type="submit">
					<i className="bi bi-search"></i> Cerca
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
