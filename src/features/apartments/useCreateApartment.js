import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createEditApartment } from '../../services/apiApartments';

export function useCreateApartment() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createApartment } = useMutation({
    mutationFn: createEditApartment,
    onSuccess: () => {
      toast.success('Apartamento creado con éxito');
      queryClient.invalidateQueries({ queryKey: ['apartments'] });
    },
    onError: err => toast.error(err.message),
  });

  return { createApartment, isCreating };
}
