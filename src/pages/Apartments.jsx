import { useEffect } from 'react';
import { getApartments } from '../services/apiApartments';

function Apartments() {
  useEffect(() => {
    getApartments().then(data => console.log(data));
  }, []);

  return (
    <div>
      Cabins
      <img
        src="https://qdizsvqhgxaudqcmcnih.supabase.co/storage/v1/object/public/apartment-images/apartment-001.webp"
        alt="apartment-001"
      />
    </div>
  );
}

export default Apartments;
