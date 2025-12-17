import travels from "../data/travels";
import TravelCard from "../components/TravelCard";

export default function HomePage() {

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {travels.map((thisTravel) => (
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
    </>
  );
}