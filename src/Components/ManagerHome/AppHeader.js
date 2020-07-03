import React from "react";

import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <nav className="d-flex flex-row-reverse p-3">
      <Link to="/sign-in" className="nav-link">
        Log Out
      </Link>
      <a href="#" className="nav-link ">
        <i className="fas fa-user mr-2"></i>Welcome Brad
      </a>
    </nav>
  );
}

export default AppHeader;
