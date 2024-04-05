import { useEffect, useState } from 'react';

import { useCheckIn } from './useCheckIn';
import { useMoveBack } from '../../hooks/useMoveBack';
import Checkbox from '../../ui/Checkbox';
import Spinner from '../../ui/Spinner';
import BookingDataBox from '../bookings/BookingDataBox';
import { useBooking } from '../bookings/useBooking';
import { formatCurrency } from '../../utils/helpers';

import './CheckInBooking.scss';

function CheckInBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();

  useEffect(() => setConfirmPaid(booking?.is_paid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckIn();

  if (isLoading) return <Spinner />;

  const { id: bookingId, guests, total_price } = booking;

  function handleCheckIn() {
    if (!confirmPaid) return;
    checkin(bookingId);
  }

  return (
    <>
      <div className="checkin">
        <h1>Check in Reserva #{bookingId}</h1>
        <button className="back-btn" onClick={moveBack}>
          &larr; Volver
        </button>
      </div>

      <BookingDataBox booking={booking} />

      <div className="check-box">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid(confirm => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          Confirmo que {guests.full_name} ha pagado la cantidad total de{' '}
          {formatCurrency(total_price)}
        </Checkbox>
      </div>

      <div className="btn-group">
        <button
          className="checkin-btn"
          onClick={handleCheckIn}
          disabled={!confirmPaid || isCheckingIn}
        >
          Check-in Reserva #{bookingId}
        </button>

        <button className="bck-btn" onClick={moveBack}>
          Volver
        </button>
      </div>
    </>
  );
}

export default CheckInBooking;

// import BookingDataBox from "../../features/bookings/BookingDataBox";

// import { useSettings } from "../settings/useSettings";

// function CheckinBooking() {
//   const [addBreakfast, setAddBreakfast] = useState(false);
//   const { settings, isLoading: isLoadingSettings } = useSettings();

//   if (isLoading || isLoadingSettings) return <Spinner />;

//   const {
//     id: bookingId,
//     guests,
//     totalPrice,
//     numGuests,
//     hasBreakfast,
//     numNights,
//   } = booking;

//   const optionalBreakfastPrice =
//     settings.breakfastPrice * numNights * numGuests;

//   function handleCheckin() {
//     if (!confirmPaid) return;

//     if (addBreakfast) {
//       checkin({
//         bookingId,
//         breakfast: {
//           hasBreakfast: true,
//           extrasPrice: optionalBreakfastPrice,
//           totalPrice: totalPrice + optionalBreakfastPrice,
//         },
//       });
//     } else {
//       checkin({ bookingId, breakfast: {} });
//     }
//   }

//   return (
//     <>
//       <Row type="horizontal">
//       </Row>

//       <BookingDataBox booking={booking} />

//       {!hasBreakfast && (
//         <Box>
//           <Checkbox
//             checked={addBreakfast}
//             onChange={() => {
//               setAddBreakfast((add) => !add);
//               setConfirmPaid(false);
//             }}
//             id="breakfast"
//           >
//             Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
//           </Checkbox>
//         </Box>
//       )}

//       <Box>
//         <Checkbox
//           checked={confirmPaid}
//           onChange={() => setConfirmPaid((confirm) => !confirm)}
//           disabled={confirmPaid || isCheckingIn}
//           id="confirm"
//         >
//           I confirm that {guests.fullName} has paid the total amount of{" "}
//           {!addBreakfast
//             ? formatCurrency(totalPrice)
//             : `${formatCurrency(
//                 totalPrice + optionalBreakfastPrice
//               )} (${formatCurrency(totalPrice)} + ${formatCurrency(
//                 optionalBreakfastPrice
//               )})`}
//         </Checkbox>
//       </Box>

//       <ButtonGroup>
//         <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
//           Check in booking #{bookingId}
//         </Button>
//         <Button variation="secondary" onClick={moveBack}>
//           Back
//         </Button>
//       </ButtonGroup>
//     </>
//   );
// }

// export default CheckinBooking;
