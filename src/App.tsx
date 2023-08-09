import React from "react";
import logo from "./images/network-team-icon.png";
import "./App.css";
import "./style.css";

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

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
    <div>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </div>
  );
}

export default App;
