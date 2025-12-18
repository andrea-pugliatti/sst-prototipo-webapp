import TravelCard from "../components/TravelCard";
import TravelForm from "../components/TravelForm";
import { useTravels } from "../contexts/TravelsContext";

export default function HomePage() {
	// const [travelsArray, setTravelsArray] = useState(travels);

	const { list } = useTravels();

	return (
		<div className="container">
			<TravelForm />
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
				{list.map((thisTravel) => (
					<TravelCard
						key={thisTravel.id}
						destination={thisTravel.destination}
						start_date={thisTravel.start_date}
						end_date={thisTravel.end_date}
						description={thisTravel.description}
						path={`/detail/${thisTravel.id}`}
					/>
				))}
			</div>
		</div>
	);
}
