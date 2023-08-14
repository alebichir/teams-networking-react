import logo from "../images/network-team-icon.png";
import { Page } from "../main/models";
import { MainMenu } from "../menu/MainMenu";
import "./style.css";
type Props = {
  activePage: Page;
};
export default function AppHeader(props: Props) {
  return (
    <header>
      <div id="header-wrapper">
        <img src={logo} alt="" width="100" height="100" />
        <div>
          <h1>Teams Networking</h1>
          <h2>
            {props.activePage === "home" ? "🏠" : ""}
            CRUD operations example (<strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate,
            <strong>D</strong>elete)
          </h2>
        </div>
      </div>

      <MainMenu activePage={props.activePage} />
    </header>
  );
}
