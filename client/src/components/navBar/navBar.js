import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav>
        <Link to="/" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
          <h5>Home</h5>
        </Link>
        <h5>|</h5>
        <Link to="ADMIN" onClick={() => setActiveNav("#ADMIN")} className={activeNav === "#ADMIN" ? "active" : ""}>
          <h5>ADMIN Page</h5>
        </Link>
      </nav>
    </>
  );
}

export default Nav;
