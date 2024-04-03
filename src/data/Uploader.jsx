import { useState } from 'react';
import { isFuture, isPast, isToday } from 'date-fns';
import supabase from '../services/supabase.js';
import { subtractDates } from '../utils/helpers';

import { bookings } from './data-bookings';
import { apartments } from './data-apartments';
import { guests } from './data-guests';

import './Uploader.scss';

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

async function deleteGuests() {
  const { error } = await supabase.from('guests').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteApartments() {
  const { error } = await supabase.from('apartments').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from('bookings').delete().gt('id', 0);
  if (error) console.log(error.message);
}

async function createGuests() {
  const { error } = await supabase.from('guests').insert(guests);
  if (error) console.log(error.message);
}

async function createApartments() {
  const { error } = await supabase.from('apartments').insert(apartments);
  if (error) console.log(error.message);
}

async function createBookings() {
  // Bookings need a guestId and a apartmentId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and apartmentIds, and then replace the original IDs in the booking data with the actual ones from the DB
  const { data: guests_ids } = await supabase
    .from('guests')
    .select('id')
    .order('id');
  const allGuestIds = guests_ids.map(apartment => apartment.id);
  const { data: apartments_ids } = await supabase
    .from('apartments')
    .select('id')
    .order('id');
  const allApartmentIds = apartments_ids.map(apartment => apartment.id);

  const finalBookings = bookings.map(booking => {
    // Here relying on the order of apartments, as they don't have and ID yet
    const apartment = apartments.at(booking.apartment_id - 1);
    const num_nights = subtractDates(booking.end_date, booking.start_date);
    const apartment_price =
      num_nights * (apartment.regular_price - apartment.discount);
    const extras_price = booking.has_breakfast
      ? num_nights * 15 * booking.num_guests
      : 0; // hardcoded breakfast price
    const total_price = apartment_price + extras_price;

    let status;
    if (
      isPast(new Date(booking.end_date)) &&
      !isToday(new Date(booking.end_date))
    )
      status = 'checked-out';
    if (
      isFuture(new Date(booking.start_date)) ||
      isToday(new Date(booking.start_date))
    )
      status = 'unconfirmed';
    if (
      (isFuture(new Date(booking.end_date)) ||
        isToday(new Date(booking.end_date))) &&
      isPast(new Date(booking.start_date)) &&
      !isToday(new Date(booking.start_date))
    )
      status = 'checked-in';

    return {
      ...booking,
      num_nights,
      apartment_price,
      extras_price,
      total_price,
      guest_id: allGuestIds.at(booking.guestId - 1),
      apartment_id: allApartmentIds.at(booking.apartment_id - 1),
      status,
    };
  });

  console.log(finalBookings);

  const { error } = await supabase.from('bookings').insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deleteApartments();

    // Bookings need to be created LAST
    await createGuests();
    await createApartments();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div className="uploader-btns">
      <h3>SAMPLE DATA</h3>

      <button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </button>

      <button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </button>
    </div>
  );
}

export default Uploader;
