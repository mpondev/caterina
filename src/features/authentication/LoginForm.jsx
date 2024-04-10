import { useState } from 'react';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';

import './LoginForm.scss';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading } = useLogin();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form--row">
        <label htmlFor="email">Dirección de email</label>
        <input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="login-form--row">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="login-form--row">
        <button disabled={isLoading}>
          {/* BUG ? Spinner not working properly */}
          {!isLoading ? 'Login' : <SpinnerMini />}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
