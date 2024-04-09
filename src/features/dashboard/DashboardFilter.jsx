import Filter from '.././../ui/Filter';

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: '7', label: 'Últimos 7 días' },
        { value: '30', label: 'Último mes' },
        { value: '90', label: 'Últimos 3 meses' },
      ]}
    />
  );
}

export default DashboardFilter;
