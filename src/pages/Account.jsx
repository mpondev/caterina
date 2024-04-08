// import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';

function Account() {
  return (
    <>
      <h1>Update your account</h1>

      <div className="account-row">
        <h3>Update user data</h3>
        <UpdateUserDataForm />
      </div>

      <div className="account-row">
        <h3>Update password</h3>
        {/* <UpdatePasswordForm /> */}
      </div>
    </>
  );
}

export default Account;
