import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';

import './ApartmentRow.scss';

function ApartmentRow({ apartment }) {
  const {
    apartment: apartmentName,
    discount,
    image,
    max_capacity,
    regular_price,
  } = apartment;

  return (
    <div className="apartmentRow" role="row">
      <img src={image} alt="apartment image" className="apartmentRow--img" />
      <div className="apartmentRow--name">{apartmentName}</div>
      <div>Hasta {max_capacity} personas</div>
      <div className="apartmentRow--price">{formatCurrency(regular_price)}</div>
      <div className="apartmentRow--discount">{formatCurrency(discount)}</div>
      <button>Eliminar</button>
    </div>
  );
}

ApartmentRow.propTypes = {
  apartment: PropTypes.object,
};

export default ApartmentRow;
