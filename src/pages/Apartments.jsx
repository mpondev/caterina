import { useEffect } from 'react';
import { getApartments } from '../services/apiApartments';

function Apartments() {
  useEffect(() => {
    getApartments().then(data => console.log(data));
  }, []);
  return <div>Cabins</div>;
}

export default Apartments;
