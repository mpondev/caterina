import PropTypes from 'prop-types';

import './ErrorFallback.scss';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="error-fallback">
      <div className="error-fallback--box">
        <h1>Algo ha ido mal 🧐</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Inténtelo de nuevo</button>
      </div>
    </main>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func,
};

export default ErrorFallback;
