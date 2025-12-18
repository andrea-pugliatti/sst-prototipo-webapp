import { useState } from "react";
import { useUsers } from "../contexts/UsersContext";

export default function AddUsersForm({ id }) {
	const emptyUser = {
		travel_id: id,
		first_name: "",
		last_name: "",
		email: "",
		id_code: "",
		phone: "",
	};

	const [newUser, setNewUser] = useState(emptyUser);

	const { usersList, setUsersList } = useUsers();

	function handleSubmit(e) {
		e.preventDefault();

		const form = { ...newUser, id: Date.now() };
		setUsersList([...usersList, form]);
		setNewUser(emptyUser);
	}

	return (
		<form onSubmit={handleSubmit} className="">
			<h2>Aggiungi Partecipante</h2>
			<div className="row mb-3">
				<div className="col">
					<label className="form-label" htmlFor="first-name">
						Nome
					</label>
					<input
						className="form-control"
						type="text"
						id="first-name"
						name="first-name"
						value={newUser.first_name}
						onChange={(e) =>
							setNewUser({ ...newUser, first_name: e.target.value })
						}
					/>
				</div>
				<div className="col">
					<label className="form-label" htmlFor="last-name">
						Cognome
					</label>
					<input
						className="form-control"
						type="text"
						id="last-name"
						name="last-name"
						value={newUser.last_name}
						onChange={(e) =>
							setNewUser({ ...newUser, last_name: e.target.value })
						}
					/>
				</div>
			</div>
			<div className="form mb-3">
				<label htmlFor="email" className="form-label">
					E-mail
				</label>
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					value={newUser.email}
					onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
				/>
			</div>
			<div className="form mb-3">
				<label htmlFor="email" className="form-label">
					Telefono
				</label>
				<input
					type="text"
					className="form-control"
					id="phone"
					name="phone"
					value={newUser.phone}
					onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
				/>
			</div>
			<div className="form mb-3">
				<label htmlFor="id_code" className="form-label">
					Codice Fiscale
				</label>
				<input
					type="text"
					className="form-control"
					id="id_code"
					name="id_code"
					value={newUser.id_code}
					onChange={(e) => setNewUser({ ...newUser, id_code: e.target.value })}
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Invia
			</button>
		</form>
	);
}
