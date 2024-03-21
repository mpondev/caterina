import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { deleteApartment as deleteApartmentApi } from '../../services/apiApartments';

export function useDeleteApartment() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteApartment } = useMutation({
    mutationFn: deleteApartmentApi,
    onSuccess: () => {
      toast.success('Apartamento eliminado con éxito');
      queryClient.invalidateQueries({
        queryKey: ['apartments'],
      });
    },
    onError: err => toast.error(err.message),
  });

  return { deleteApartment, isDeleting };
}
