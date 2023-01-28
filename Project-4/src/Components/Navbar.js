import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
  return {
    padding: "15px",
    textDecoration: isActive ? "underline" : "none",
    color: "white",
  };
};

export const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "rebeccapurple" }}>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
};
