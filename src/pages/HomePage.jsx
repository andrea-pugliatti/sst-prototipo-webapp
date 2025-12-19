import TravelCard from "../components/TravelCard";
import TravelForm from "../components/TravelForm";
import { useTravels } from "../contexts/TravelsContext";

export default function HomePage() {
	// const [travelsArray, setTravelsArray] = useState(travels);

	const { list } = useTravels();

	return (
		<div className="container pt-5 pb-5 my-5">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
				{list.map((thisTravel) => (
					<TravelCard
						key={thisTravel.id}
						destination={thisTravel.destination}
						start_date={thisTravel.start_date}
						end_date={thisTravel.end_date}
						image={thisTravel.image}
						description={thisTravel.description}
						path={`/detail/${thisTravel.id}`}
					/>
				))}
			</div>
			<TravelForm />
		</div>
	);
}
