import { useSearchParams } from 'react-router-dom';

import './Filter.scss';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set('discount', value);
    setSearchParams(searchParams);
  }

  return (
    <div className="filter">
      <button className="filter-btn" onClick={() => handleClick('all')}>
        Todo
      </button>
      <button className="filter-btn" onClick={() => handleClick('no-discount')}>
        Sin Descuento
      </button>
      <button
        className="filter-btn"
        onClick={() => handleClick('with-discount')}
      >
        Con Descuento
      </button>
    </div>
  );
}

export default Filter;
