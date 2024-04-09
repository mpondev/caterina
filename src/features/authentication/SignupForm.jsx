import { useForm } from 'react-hook-form';

import { useSignup } from './useSignup';
import FormRow from '../../ui/FormRow';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Nombre completo" error={errors?.fullName?.message}>
        <input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register('fullName', { required: 'Este campo es requerido' })}
        />
      </FormRow>

      <FormRow label="Dirección de email" error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          {...register('email', {
            required: 'Este campo es requerido',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Por favor introduzca una dirección de email válida',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Contraseña (min 8 caracteres)"
        error={errors?.password?.message}
      >
        <input
          type="password"
          id="password"
          disabled={isLoading}
          {...register('password', {
            required: 'Este campo es requerido',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener un mínimo de 8 caracteres',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Repita la contraseña"
        error={errors?.passwordConfirm?.message}
      >
        <input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'Este campo es requerido',
            validate: value =>
              value === getValues().password ||
              'Las contraseñas deben ser iguales',
          })}
        />
      </FormRow>

      <FormRow>
        <button
          className="btn btn--cancel"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancelar
        </button>
        <button className="btn" disabled={isLoading}>
          Crear nuevo usuario
        </button>
      </FormRow>
    </form>
  );
}

export default SignupForm;
