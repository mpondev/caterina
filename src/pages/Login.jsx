import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

import './Login.scss';

function Login() {
  return (
    <main className="login-layout">
      <Logo />
      <h4 className="login-layout--title">Iniciar sesión</h4>
      <LoginForm />
    </main>
  );
}

export default Login;
