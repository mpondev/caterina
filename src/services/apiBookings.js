import supabase from './supabase';
import { PAGE_SIZE } from '../utils/constants';
import { getToday } from '../utils/helpers';

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from('bookings')
    .select(
      'id, created_at, start_date, end_date, num_nights, num_guests, status, total_price, apartments(apartment), guests(full_name, email)',
      { count: 'exact' }
    );

  // FILTER
  if (filter) query = query[filter.method || 'eq'](filter.field, filter.value);

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { count, data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Las reservas no se han podido cargar');
  }

  return { count, data };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, apartments(*), guests(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Reserva no encontrada');
  }

  return data;
}

// Returns all BOOKINGS that were created after the given date. Useful to get bookings created in the last 30 days, for example.
// Date: ISOString
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from('bookings')
    .select('created_at, total_price, extras_price')
    .gte('created_at', date)
    .lte('created_at', getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error('Las reservas no se han podido cargar');
  }

  return data;
}

// Returns all STAYS that are were created after the given date
// Date: ISOString
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from('bookings')
    // .select('*')
    .select('*, guests(full_name)')
    .gte('start_date', date)
    .lte('start_date', getToday());

  if (error) {
    console.error(error);
    throw new Error('Las reservas no se han podido cargar');
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, guests(full_name, nationality, country_flag)')
    .or(
      `and(status.eq.unconfirmed,start_date.eq.${getToday()}),and(status.eq.checked-in,end_date.eq.${getToday()})`
    )
    .order('created_at');

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error('Las reservas no se han podido cargar');
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from('bookings')
    .update(obj)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('La reserva no se han podido actualizar');
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('La reserva no se han podido eliminar');
  }
  return data;
}
