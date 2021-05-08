import useDarkMode from "../hooks/useDarkMode";

const UseDarkModeDemo = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      Dark mode:
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default UseDarkModeDemo;
