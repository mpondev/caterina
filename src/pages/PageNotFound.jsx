import { useMoveBack } from '../hooks/useMoveBack';
import './PageNotFound.scss';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="page-not-found">
      <div className="page-not-found--box">
        <h1>La página que busca no se encuentra 😢</h1>
      </div>
      <button onClick={moveBack} className="page-not-found--btn">
        &larr; Volver
      </button>
    </main>
  );
}

export default PageNotFound;
