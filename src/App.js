import "./style/App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/histoire" element={<History />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
