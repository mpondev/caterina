import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';

export function useCheckIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: bookingId =>
      updateBooking(bookingId, {
        status: 'checked-in',
        is_paid: true,
      }),

    onSuccess: data => {
      toast.success(
        `La reserva #${data.id} ha realizado el check-in con éxito`
      );
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },

    onError: () => toast.error('Ha habido un error durante el check-in'),
  });

  return { checkin, isCheckingIn };
}
