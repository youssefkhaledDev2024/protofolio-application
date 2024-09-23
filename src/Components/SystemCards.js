import "../SystemCard.css"


const SysytemCard = ({ src, title, link }) => {
    return (
      <div className="cards">
        <img src={src} alt="inventory" />
        <footer>
          <h2>{title}</h2>
          <p>{link}</p>
        </footer>
      </div>
    );
  };
  export default SysytemCard;