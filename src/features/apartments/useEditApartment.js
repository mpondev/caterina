import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createEditApartment } from '../../services/apiApartments';

export function useEditApartment() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editApartment } = useMutation({
    mutationFn: ({ id, newApartmentData }) =>
      createEditApartment(id, newApartmentData),
    onSuccess: () => {
      toast.success('Apartamento actualizado con éxito');
      queryClient.invalidateQueries({ queryKey: ['apartments'] });
    },
    onError: err => toast.error(err.message),
  });

  return { editApartment, isEditing };
}
