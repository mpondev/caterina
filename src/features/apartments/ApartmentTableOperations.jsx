import Filter from '../../ui/Filter';

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
    </div>
  );
}

export default ApartmentTableOperations;
