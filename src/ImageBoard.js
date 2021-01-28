import PintrestCard from "./PintrestCard";

const ImageBoard = ({ cards }) => {
  return (
    <div className="image-board">
      {cards.map((card, index) => {
        return (
          <div key={card.id}>
            <PintrestCard
              tittle={card.tittle}
              message={card.text}
              img={card.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageBoard;
