import { useState } from "react";
import { useTravels } from "../contexts/TravelsContext";

export default function TravelForm() {
	const emptyForm = {
		destination: "",
		start_date: "",
		end_date: "",
		image: "",
		description: "",
	};

	const [newForm, setNewForm] = useState(emptyForm);

	const { list, setList } = useTravels();

	function handleSubmit(e) {
		e.preventDefault();
		console.log(newForm);
		if (newForm.destination < 2 || newForm.start_date > newForm.end_date) {
			setNewForm(emptyForm);
			return;
		}

		const newTravel = { ...newForm, id: Date.now() };
		setList([...list, newTravel]);
		setNewForm(emptyForm);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Aggiungi viaggio</h2>
			<div className="form mb-3">
				<label htmlFor="destination" className="form-label">
					Destinazione
				</label>
				<input
					type="text"
					className="form-control"
					id="destination"
					value={newForm.destination}
					onChange={(e) =>
						setNewForm({ ...newForm, destination: e.target.value })
					}
				/>
			</div>
			<div className="row mb-3">
				<div className="col">
					<label className="form-label" htmlFor="start-date">
						Data di inizio viaggio
					</label>
					<input
						class="form-control"
						type="date"
						id="start-date"
						name="start-date"
						value={newForm.start_date}
						onChange={(e) =>
							setNewForm({ ...newForm, start_date: e.target.value })
						}
					/>
				</div>
				<div className="col">
					<label className="form-label" htmlFor="start-date">
						Data di fine viaggio
					</label>
					<input
						className="form-control"
						type="date"
						id="end-date"
						name="end-date"
						value={newForm.end_date}
						onChange={(e) =>
							setNewForm({ ...newForm, end_date: e.target.value })
						}
					/>
				</div>
			</div>
			<div className="form mb-3">
				<label htmlFor="form-image" className="form-label">
					Immagine destinazione
				</label>
				<input
					type="url"
					className="form-control"
					id="form-image"
					value={newForm.image}
					onChange={(e) => setNewForm({ ...newForm, image: e.target.value })}
				/>
			</div>
			<div className="form mb-3">
				<label htmlFor="form-description" className="form-label">
					Descrizione
				</label>
				<textarea
					className="form-control"
					id="form-description"
					rows={5}
					value={newForm.description}
					onChange={(e) =>
						setNewForm({ ...newForm, description: e.target.value })
					}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Invia
			</button>
		</form>
	);
}
