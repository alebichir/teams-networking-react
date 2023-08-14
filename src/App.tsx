import "./style.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";
import { ContentWrapper } from "./main/components";
import { Page } from "./main/models";
import { useState } from "react";

function App() {
  const [active, setActive] = useState<Page>("home");

  return (
    <>
      <AppHeader
        activePage={active}
        setActive={newActive => {
          console.warn("active", newActive);
          setActive(newActive);
        }}
      />
      <ContentWrapper activePage={active} />
      <AppFooter />
    </>
  );
}

export default App;
