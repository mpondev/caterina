import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: err => {
      console.log('ERROR', err);
      toast.error('El email o la contraseña son incorrectos');
    },
  });

  return { login, isLoading };
}
