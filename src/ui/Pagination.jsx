import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

import './Pagination.scss';

const PAGE_SIZE = 10;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="pagination">
      <p>
        Mostrando <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> a{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        de <span>{count}</span> resultados
      </p>

      <div className="pagination-btns">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Anterior</span>
        </button>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Siguiente</span> <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  count: PropTypes.number,
};

export default Pagination;
