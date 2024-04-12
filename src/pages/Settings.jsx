import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';

import './Settings.scss';

function Settings() {
  return (
    <>
      <div className="settings-row">
        <h1>Actualizar ajustes</h1>
        <UpdateSettingsForm />
      </div>
    </>
  );
}

export default Settings;
