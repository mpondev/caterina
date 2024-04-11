import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';

function Dashboard() {
  return (
    <>
      <div className="dashboard-row">
        <h1>Panel de Control</h1>
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
