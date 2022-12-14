import "./App.css";
import TokenDetail from "./pages/TokenDetail/TokenDetail";
import TokenSite from "./pages/TokenSite/TokenSite";
// import DetailToken from "./pages/TokenDetail/DetailToken";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      {/* <TokenSite />
      <TokenDetail /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TokenSite />}></Route>
          <Route path="/tokendetail" element={<TokenDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
