import { useSettings } from './useSettings';
import FormRow from '../../ui/FormRow';
import Spinner from '../../ui/Spinner';

import './UpdateSettingsForm.scss';

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      min_booking_length,
      max_booking_length,
      max_guests_per_booking,
      breakfast_price,
    } = {},
  } = useSettings();

  if (isLoading) return <Spinner />;

  return (
    <form>
      <FormRow label="Mínimo noches/reserva">
        <input
          type="number"
          id="min-nights"
          defaultValue={min_booking_length}
        />
      </FormRow>
      <FormRow label="Máximo noches/reserva">
        <input
          type="number"
          id="max-nights"
          defaultValue={max_booking_length}
        />
      </FormRow>
      <FormRow label="Máximo personas/reserva">
        <input
          type="number"
          id="max-guests"
          defaultValue={max_guests_per_booking}
        />
      </FormRow>
      <FormRow label="Precio Desayuno">
        <input
          type="number"
          id="breakfast-price"
          defaultValue={breakfast_price}
        />
      </FormRow>
    </form>
  );
}

export default UpdateSettingsForm;
