import AdminPage from "./components/adminPage/adminPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import Nav from "./components/navBar/navBar";
import OrderPage from "./components/orderPage/orderPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/admin" element={<AdminPage />} />
            <Route exact path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
