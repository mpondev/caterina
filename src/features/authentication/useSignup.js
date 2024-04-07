import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signup as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        '¡Cuenta creada con éxito! Por favor verifique la cuenta desde su dirección de correo electrónico.'
      );
    },
  });

  return { signup, isLoading };
}
