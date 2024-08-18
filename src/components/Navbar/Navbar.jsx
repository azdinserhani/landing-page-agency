import "./Navbar.scss";
import logo from "../../../public/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="icon">
        <MenuIcon fontSize="large"/>
      </div>
    </div>
  );
};

export default Navbar;
