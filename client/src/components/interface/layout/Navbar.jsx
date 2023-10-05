import { NavLink } from "react-router-dom";
import "./Layout.css";
import SearchInput from "../ui/SearchInput";
import Account from "../ui/Account";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <span className="nav-logo">KULTURA</span>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tour-package"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Tour Package
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <SearchInput />
        <Account />
      </div>
    </nav>
  );
};

export default Navbar;
