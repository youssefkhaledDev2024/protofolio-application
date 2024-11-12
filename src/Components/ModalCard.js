import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "../Modalstyle.css";
import { FaFilePdf } from 'react-icons/fa';
import { FaHtml5 } from "react-icons/fa";
import { MdOutlineTextSnippet } from "react-icons/md";


function ModalCard({ show, handleClose, Title  , video , pdfPath }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-dialog"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header dir="rtl"> {/* Ensure RTL direction */}
          <button className="custom-close-button" onClick={handleClose}>
            ×
          </button>
          <Modal.Title id="example-custom-modal-styling-title h1" className="text-end" style={{fontSize:"15px"}}>
            {Title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='body_content'>
            <div>
              <video width="400" height={200} controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='preview'>
              <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                <FaFilePdf size={30} color="red" />
              </a>
              <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                <FaHtml5 size={30} color="red" />
              </a>
              <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                <MdOutlineTextSnippet size={30} color="red" />
              </a>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCard;
