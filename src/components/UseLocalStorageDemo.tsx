import useLocalStorage from "../hooks/useLocalStorage";

const defaultSettings = "";

const UseLocalStorageDemo = () => {
  const [appSettings, setAppSettings] = useLocalStorage(
    "app-settings",
    defaultSettings
  );

  return (
    <div>
      <p>Your application's settings:</p>
      <pre>
        <code>{JSON.stringify(appSettings)}</code>
      </pre>
      <button onClick={() => setAppSettings(defaultSettings)}>
        Reset settings
      </button>
    </div>
  );
};

export default UseLocalStorageDemo;
