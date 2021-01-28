const PintrestCard = ({ tittle, message, img }) => {
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{message}</p>
      <img className="card-img" src={img} alt="pin" />
      <button>Follow</button>
    </div>
  );
};

export default PintrestCard;
