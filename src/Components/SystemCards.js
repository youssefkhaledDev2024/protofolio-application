import { useNavigate } from "react-router-dom";
import "../SystemCard.css"
import { useState } from "react";

const SystemCard = ({ src, title, link }) => {
  const navigate = useNavigate(); 
  const [isZoomed, setIsZoomed] = useState(false);
  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };
  const handlelink = ()=>{
    navigate(link);
    console.log(link);
  }
    return (
      <div className="cards">
        <img src={src} alt="inventory"  height={200} width={"100%"} onClick={handleImageClick} className={ isZoomed ? "zoomed" : ""}/>
        
        <footer>
          {/* <h2>{title}</h2> */}
          <p className="Pbutton" onClick={handlelink}>{title}</p>
        </footer>
      </div>
    );
  };
  export default SystemCard;