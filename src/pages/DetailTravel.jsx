import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useTravels } from "../contexts/TravelsContext";
import AddUsersForm from "../components/AddUsersForm";
import { useUsers } from "../contexts/UsersContext";

export default function DetailTravel() {
	const { id } = useParams(); // ottengo id dall'URL

	const travelId = Number(id);

	const { usersList } = useUsers();
	const travelUsers = usersList.filter((user) => user.travel_id === travelId);

	const { list } = useTravels();
	const travelName = list.find((current) => current.id === travelId);

	// stato iniziale: mostro tutti gli utenti già filtrati per il singolo viaggio
	const [displayedUsers, setDisplayedUsers] = useState(travelUsers);

	useEffect(() => {
		setDisplayedUsers(travelUsers);
	}, [usersList]);

	return (
		<div className="container pt-5 pb-5 my-5">
			<h1 className="text-center mb-4 fw-bold text-uppercase">
				{travelName.destination} trip
			</h1>
			<div className="d-flex justify-content-center mb-5">
				<div className="w-100" style={{ maxWidth: "600px" }}>
					<SearchBar users={travelUsers} onSearchResults={setDisplayedUsers} />
				</div>
			</div>

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
								<div className="mb-2">
									<strong>Email:</strong> {user.email}
								</div>
								<div className="mb-2">
									<strong>ID Code:</strong> <code>{user.id_code}</code>
								</div>
								<div>
									<strong>Phone:</strong> {user.phone}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<AddUsersForm id={travelId} />
		</div>
	);
}
