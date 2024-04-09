import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success('Usuario actualizado con éxito');
      queryClient.setQueryData(['user'], user);
    },
    onError: err => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
