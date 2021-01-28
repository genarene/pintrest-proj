import NavHeader from "./NavHeader";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavHeader tittleHeader="Aviation Explorer" />
      <div className="nav-items-container">
        <NavItems numberDigits="37" numberTittle="Boards" />
        <NavItems numberDigits="8.9k" numberTittle="pins" />
        <NavItems numberDigits="186" numberTittle="likes" />
        <NavItems numberDigits="9.5k" numberTittle="followers" />
        <NavItems numberDigits="1.8k" numberTittle="following" />
      </div>
    </div>
  );
};

export default NavBar;
