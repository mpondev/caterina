import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('Usuario actualizado con éxito');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: err => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
