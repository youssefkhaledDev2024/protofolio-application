import { useState } from "react";
import "../card.css"


const Card = ({ src, title, link }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle the zoom effect on image click
  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };
    return (
      <div className="cards">
         <img
        src={src}
        alt="inventory"
        height={200}
        width={"100%"}
        className={isZoomed ? "zoomed" : ""}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }} // Make it clear the image is clickable
      />

        <footer>
          {/* <h2>{title}</h2> */}
          <p>{title}</p>
        </footer>
      </div>
    );
  };
  export default Card;