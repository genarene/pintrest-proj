const NavItems = ({ numberTittle, numberDigits }) => {
  return (
    <div className="nav-item">
      <span>{numberDigits}</span>
      <h3>{numberTittle}</h3>
    </div>
  );
};

export default NavItems;
