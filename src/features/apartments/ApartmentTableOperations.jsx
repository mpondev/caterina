import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

import './ApartmentTableOperations.scss';

function ApartmentTableOperations() {
  return (
    <div className="table-operations">
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'Todo' },
          { value: 'no-discount', label: 'Sin Descuento' },
          { value: 'with-discount', label: 'Con Descuento' },
        ]}
      />

      <SortBy
        options={[
          { value: 'apartment-asc', label: 'Ordenar por nombre (A-Z)' },
          { value: 'apartment-desc', label: 'Ordenar por nombre (Z-A)' },
          {
            value: 'regular_price-asc',
            label: 'Ordenar por precio (primero menor)',
          },
          {
            value: 'regular_price-desc',
            label: 'Ordenar por precio (primero mayor)',
          },
          {
            value: 'max_capacity-asc',
            label: 'Ordenar por capacidad (primero menor)',
          },
          {
            value: 'max_capacity-desc',
            label: 'Ordenar por capacidad (primero mayor)',
          },
        ]}
      />
    </div>
  );
}

export default ApartmentTableOperations;
