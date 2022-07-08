import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function Nav() {
  const [adminPath, setAdminPath] = useState("admin");
  const adminPassword = () => {
    const handlePassword = prompt("Enter the ADMIN password please");
    if (handlePassword === "password") {
      setAdminPath("admin");
    } else {
      alert("That is not the correct password");
      setAdminPath("/");
    }
  };
  const [activeNav, setActiveNav] = useState("#");
  console.log(adminPath);
  return (
    <>
      <nav>
        <Link to="/" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
          <h5>Home</h5>
        </Link>
        <h5>|</h5>
        <Link
          to={adminPath}
          onClick={() => {
            adminPassword();
            setActiveNav("#ADMIN");
          }}
          className={activeNav === "#ADMIN" ? "active" : ""}
        >
          <h5>ADMIN Page</h5>
        </Link>
        <h5>|</h5>
        <Link to="order" onClick={() => setActiveNav("#order")} className={activeNav === "#order" ? "active" : ""}>
          <h5>Place Order Here</h5>
        </Link>
      </nav>
    </>
  );
}

export default Nav;

//
