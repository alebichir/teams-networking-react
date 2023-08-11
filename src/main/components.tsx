import { TeamsTableWrapper } from "../teams/TeamsTable";

const Toolbar = () => (
  <div className="toolBar">
    <button id="removeSelected">❌Remove selected</button>
    <div className="toolBarFill"></div>
    <input name="search" placeholder="Search" id="search" />
    <label htmlFor="search">🔎</label>
  </div>
);

export function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      <TeamsTableWrapper />
    </section>
  );
}
