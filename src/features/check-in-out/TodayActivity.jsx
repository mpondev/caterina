import { useTodayActivity } from '../check-in-out/useTodayActivity';
import TodayItem from './TodayItem';
import Spinner from '../../ui/Spinner';

import './TodayActivity.scss';

function TodayActivity() {
  const { isLoading, activities } = useTodayActivity();
  return (
    <div className="today-activity">
      <div className="today-activity--row">
        <h2>Hoy</h2>
      </div>

      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className="today-activity--list">
            {activities.map(activity => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="no-activity">Nada para hoy...</p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;
