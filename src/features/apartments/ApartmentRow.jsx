import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { formatCurrency } from '../../utils/helpers';

import './ApartmentRow.scss';
import { deleteApartment } from '../../services/apiApartments';

function ApartmentRow({ apartment }) {
  const {
    apartment: apartmentName,
    discount,
    id: apartmentId,
    image,
    max_capacity,
    regular_price,
  } = apartment;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteApartment,
    onSuccess: () => {
      alert('Apartamento eliminado con éxito');
      queryClient.invalidateQueries({
        queryKey: ['apartments'],
      });
    },
    onError: err => alert(err.message),
  });

  return (
    <div className="apartmentRow" role="row">
      <img src={image} alt="apartment image" className="apartmentRow--img" />
      <div className="apartmentRow--name">{apartmentName}</div>
      <div>Hasta {max_capacity} personas</div>
      <div className="apartmentRow--price">{formatCurrency(regular_price)}</div>
      <div className="apartmentRow--discount">{formatCurrency(discount)}</div>
      <button onClick={() => mutate(apartmentId)} disabled={isDeleting}>
        Eliminar
      </button>
    </div>
  );
}

ApartmentRow.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentRow;
