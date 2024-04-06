import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';

export function useCheckOut() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: bookingId =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: data => {
      toast.success(
        `La reserva #${data.id} ha realizado el check-out con éxito`
      );
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error('Ha habido un error durante el check-out'),
  });

  return { checkout, isCheckingOut };
}
