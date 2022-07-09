import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/app.css";
import SearchPart from "./components/SearchPart";
import React from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SearchPart />
    </div>
  );
}

export default App;
