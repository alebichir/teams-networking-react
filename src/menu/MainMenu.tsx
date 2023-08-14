import "./menu.css";
export function MainMenu() {
  const active: string = "teams";
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#home" className={active === "home" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#todos" className={active === "todos" ? "active" : ""}>
          {" "}
          TO DOs
        </a>
      </li>
      <li>
        <a href="#teams" className={active === "teams" ? "active" : ""}>
          Teams
        </a>
      </li>
    </ul>
  );
}
