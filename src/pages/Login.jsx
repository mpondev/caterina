import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

import './Login.scss';

function Login() {
  return (
    <main className="login-layout">
      <Logo />
      <h1>Iniciar sesión</h1>
      <LoginForm />
    </main>
  );
}

export default Login;
