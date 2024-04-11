import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

import './Table.scss';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="table" role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

Table.propTypes = {
  columns: PropTypes.string,
  children: PropTypes.array,
};

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      className="table-header"
      role="row"
      style={{ gridTemplateColumns: `${columns}` }}
    >
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.array,
};

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      className="table-row"
      role="row"
      style={{ gridTemplateColumns: `${columns}` }}
    >
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.array,
};

function Body({ data, render }) {
  if (!data.length)
    return (
      <p className="table-empty">No hay datos para mostrar por el momento</p>
    );

  return <section className="table-body">{data.map(render)}</section>;
}

Body.propTypes = {
  data: PropTypes.array,
  render: PropTypes.func,
};

function Footer({ children }) {
  return <footer className="table-footer">{children}</footer>;
}

Footer.propTypes = {
  children: PropTypes.object,
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
