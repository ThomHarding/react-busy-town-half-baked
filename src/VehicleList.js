import './vehicleList.css';
import Vehicle from './Vehicle';

export default function vehicleList({ vehicles }) {
  return (
    vehicles.map((vehicle) => 
      <Vehicle
        key={vehicle.name}
        vehicle={vehicle} />
    )
  );
}
