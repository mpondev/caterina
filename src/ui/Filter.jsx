import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import './Filter.scss';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="filter">
      {options.map(option => (
        <button
          className={
            option.value === currentFilter ? 'active filter-btn' : 'filter-btn'
          }
          onClick={() => handleClick(`${option.value}`)}
          key={option.value}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

Filter.propTypes = {
  filterField: PropTypes.string,
  options: PropTypes.array,
};

export default Filter;
