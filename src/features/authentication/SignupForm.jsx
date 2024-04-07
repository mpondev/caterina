import { useForm } from 'react-hook-form';

import './SignupForm.scss';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="signup-form--row">
        <label htmlFor="fullName">Nombre completo</label>
        <input
          type="text"
          id="fullName"
          {...register('fullName', { required: 'Este campo es requerido' })}
        />
        {errors && <span>{errors?.fullName?.message}</span>}
      </div>

      <div className="signup-form--row">
        <label htmlFor="email">Dirección de email</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Este campo es requerido',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Por favor introduzca una dirección de email válida',
            },
          })}
        />
        {errors && <span>{errors?.email?.message}</span>}
      </div>

      <div className="signup-form--row">
        <label htmlFor="password">Contraseña (min 8 caracteres)</label>
        <input
          type="password"
          id="password"
          {...register('password', {
            required: 'Este campo es requerido',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener un mínimo de 8 caracteres',
            },
          })}
        />
        {errors && <span>{errors?.password?.message}</span>}
      </div>

      <div className="signup-form--row">
        <label htmlFor="passwordConfirm">Repita la contraseña</label>
        <input
          type="password"
          id="passwordConfirm"
          {...register('passwordConfirm', {
            required: 'Este campo es requerido',
            validate: value =>
              value === getValues().password ||
              'Las contraseñas deben ser iguales',
          })}
        />
        {errors && <span>{errors?.passwordConfirm?.message}</span>}
      </div>

      <div className="signup-form--row">
        {/* type is an HTML attribute! */}
        <button className="cancel-btn" type="reset" onClick={reset}>
          Cancelar
        </button>
        <button>Crear nuevo usuario</button>
      </div>
    </form>
  );
}

export default SignupForm;
