import "../SystemCard.css"


const SysytemCard = ({ src, title, link }) => {
    return (
      <div className="cards">
        <img src={src} alt="inventory"  height={200} width={"100%"}/>
        <footer>
          {/* <h2>{title}</h2> */}
          <p className="Pbutton">{title}</p>
        </footer>
      </div>
    );
  };
  export default SysytemCard;