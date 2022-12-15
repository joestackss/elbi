import "./App.css";
import TokenDetail from "./pages/TokenDetail/TokenDetail";
import TokenSite from "./pages/TokenSite/TokenSite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import SubmitPage from "./pages/SubmitPage/SubmitPage";

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
          <Route path="/submitpage" element={<SubmitPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
