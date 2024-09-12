import "../card.css"


const Card = ({ title, link }) => {
    return (
      <div className="cards">
        <footer>
          <h2>{title}</h2>
          <p>{link}</p>
        </footer>
      </div>
    );
  };
  export default Card;