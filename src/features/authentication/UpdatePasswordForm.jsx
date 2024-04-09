import { useForm } from 'react-hook-form';

import { useUpdateUser } from './useUpdateUser';
import FormRow from '../../ui/FormRow';

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <form className="update-password-form" onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Contraseña nueva (min 8 car.)"
        error={errors?.password?.message}
      >
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register('password', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener un mínimo de 8 caracteres',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirmar contraseña"
        error={errors?.passwordConfirm?.message}
      >
        <input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register('passwordConfirm', {
            required: 'Este campo es obligatorio',
            validate: value =>
              getValues().password === value ||
              'Las contraseña deben coincidir',
          })}
        />
      </FormRow>

      <FormRow>
        <button className="btn btn--cancel" onClick={reset} type="reset">
          Cancelar
        </button>
        <button className="btn" disabled={isUpdating}>
          Actualizar contraseña
        </button>
      </FormRow>
    </form>
  );
}

export default UpdatePasswordForm;
