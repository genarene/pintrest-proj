import { FiSunrise } from "react-icons/fi";

const NavHeader = ({ tittleHeader }) => {
  return (
    <div className="nav-header">
      <div className="navbar-icon">
        <FiSunrise size={55} />
      </div>
      <h1>{tittleHeader}</h1>
    </div>
  );
};

export default NavHeader;
