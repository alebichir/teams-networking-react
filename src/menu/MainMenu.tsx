import "./menu.css";
export function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a data-page="home">Home</a>
      </li>
      <li>
        <a data-page="skills"> Skills</a>
      </li>
      <li>
        <a data-page="languages"> Known Languages</a>
      </li>
      <li>
        <a data-page="projects">Projects</a>
      </li>
    </ul>
  );
}
