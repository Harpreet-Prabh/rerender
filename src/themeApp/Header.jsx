import useTheme from "./useTheme";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1>{theme}</h1>
      <button
        onClick={() => {
          setTheme((prev) => {
            return prev == "light" ? "dark" : "light";
          });
        }}
      >
        value of theme
      </button>
    </div>
  );
}

export default Header;
