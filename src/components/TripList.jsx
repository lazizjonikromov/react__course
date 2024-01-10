import { useCallback, useEffect, useState } from "react";
import "./TripList.css";
import { UseFetch } from "../hooks/UseFetch";

function TripList() {
  const [url, setUrl] = useState("http://localhost:5000/trips");
	const {data:trips, isPending, error} = UseFetch(url)

  return (
    <div className="trip-list">
      <h1>TripList</h1>
			{isPending && <div><h3>Loading...</h3></div>}
			{error && <div><h3>{error}</h3></div>}
      <ul>
        {trips && trips.map((trip) => {
          return (
            <li key={trip.title}>
              <h2>{trip.title}</h2>
              <h2>{trip.price}</h2>
            </li>
          );
        })}
      </ul>
	  <div className="filters">
		<button onClick={() => setUrl('http://localhost:5000/trips?loc=Europe')}>Europe</button>
		<button onClick={() => setUrl('http://localhost:5000/trips')}>All Trips</button>
	  </div>
    </div>
  );
}

export default TripList;
