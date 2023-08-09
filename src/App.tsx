import React from "react";
import logo from "./images/network-team-icon.png";
import "./style.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <img src={logo} alt="" width="100" height="100" />
        <div>
          <h1>Teams Networking</h1>
          <h2>
            CRUD operations example (<strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate,
            <strong>D</strong>elete)
          </h2>
        </div>
      </div>
    </header>
  );
}

function Toolbar() {
  return (
    <div className="toolBar">
      <button id="removeSelected">❌Remove selected</button>
      <div className="toolBarFill"></div>
      <input name="search" placeholder="Search" id="search" />
      <label htmlFor="search">🔎</label>
    </div>
  );
}

function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      TODO table ...
    </section>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="https://github.com/nmatei/node-api">📃 API Docs</a>
      <span>|</span>
      <a href="https://github.com/nmatei/teams-networking">👩‍💻 Source Code</a>
    </footer>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
