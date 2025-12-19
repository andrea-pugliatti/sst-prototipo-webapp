import { Link } from "react-router-dom";

export default function TravelCard({
	destination,
	start_date,
	end_date,
	image,
	description,
	path,
}) {
	return (
		<div className="col-12 col-md-6 col-lg-4 mb-4 mt-4">
			<div className="card h-100 border-1">
				<img
					src={image}
					className="card-img-top"
					style={{ height: "200px", objectFit: "cover" }}
					alt={destination}
				/>
				<div className="card-header bg-white border-0 pt-3">
					<h3 className="text-center h5 mb-0 fw-bold">{destination}</h3>
				</div>
				<div className="card-body d-flex flex-column text-center">
					<p className="card-text text-muted fs-6 flex-grow-1">{description}</p>
					<div className="my-3 py-2 bg-light rounded-3">
						<div className="small text-secondary">Periodo del viaggio:</div>
						<div className="fw-semibold">
							{start_date} — {end_date}
						</div>
					</div>
					<Link to={path} className="btn btn-primary w-100 py-2 mt-auto">
						<i className="bi bi-people-fill me-2"></i> Partecipanti
					</Link>
				</div>
			</div>
		</div>
	);
}
