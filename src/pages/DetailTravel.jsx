import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import travels from "../data/travels";
import users from "../data/users";
import { useTravels } from "../contexts/TravelsContext";

export default function DetailTravel() {
	const { id } = useParams(); // ottengo id dall'URL

	const travelId = Number(id);
	const travelUsers = users.filter((user) => user.travel_id === travelId);

	const { list } = useTravels();
	const travelName = list.find((current) => current.id === travelId);

	// stato iniziale: mostro tutti gli utenti già filtrati per il singolo viaggio
	const [displayedUsers, setDisplayedUsers] = useState(travelUsers);

	return (
		<div className="container mt-3">
			<SearchBar users={displayedUsers} onSearchResults={setDisplayedUsers} />
			<h1 className="d-flex justify-content-center">
				{travelName.destination} trip
			</h1>

			<div className="accordion" id="accordionExample">
				{displayedUsers.map((user, i) => (
					<div key={user.id} className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#collapse-${i}`}
								aria-expanded="false"
								aria-controls={`#collapse-${i}`}
							>
								{user.first_name} {user.last_name}
							</button>
						</h2>
						<div
							id={`collapse-${i}`}
							className="accordion-collapse collapse"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								{user.email} {user.id_code} {user.phone}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
