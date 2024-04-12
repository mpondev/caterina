import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';

import './Dashboard.scss';

function Dashboard() {
  return (
    <>
      <div className="dashboard-row">
        <h1 className="dashboard-title">Panel de Control</h1>
        <DashboardFilter />
      </div>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
