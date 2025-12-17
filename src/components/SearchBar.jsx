import { useState } from "react";

const SearchBar = ({ users, onSearchResults }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {

        e.preventDefault()

        const value = searchTerm.toLowerCase()
        setSearchTerm(value)

        if (value.trim() === '') {
            // se la barra di ricerca è vuota, mostro tutti i partecipanti
            onSearchResults(users)
            return
        }

        // filtro gli utenti
        const term = value.toLowerCase()
        const results = users.filter(user => {
            const fullName = `${user.first_name} ${user.last_name}`.toLowerCase()
            return fullName.includes(term)
        })

        onSearchResults(results)

        const clearSearch = () => {
            onSearchResults(users)
        }
        setSearchTerm('')

        console.log(users);

    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cerca partecipante per nome e cognome..."
            />
        </form >
    )
}

export default SearchBar;