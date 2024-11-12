import { useState } from "react";
import "../card.css"
import ModalCard from "./ModalCard";


const Card = ({ src, title, link  , pdfPath }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  console.log(showModal);
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
          <p onClick={handleShow}>{title}</p>
        </footer>
        <ModalCard show={showModal} handleClose={handleClose} Title={title} Vedio={link} pdfPath={pdfPath}/>
      </div>
    );
  };
  export default Card;