import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/app.css";
import SearchPart from "./components/SearchPart";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SearchPart />
      <Footer />
    </div>
  );
}

export default App;
