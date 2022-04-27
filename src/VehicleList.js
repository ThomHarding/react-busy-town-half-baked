import './vehicleList.css';
import Vehicle from './Vehicle';

export default function vehicleList({ vehicles }) {
  return (
    <div className='vehicles'>
      {vehicles.map(vehicle =>
        <Vehicle
          key={vehicle}
          vehicle={vehicle} />
      )}
    </div>
  );
}
