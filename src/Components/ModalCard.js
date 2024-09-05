import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "../Modalstyle.css";

function ModalCard({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-dialog"
        aria-labelledby="example-custom-modal-styling-title"
        // backdrop="static" // Prevent closing on backdrop click
      >
        <Modal.Header>
          <button className="custom-close-button" onClick={handleClose}>
            ×
          </button>
          <Modal.Title id="example-custom-modal-styling-title">
            قسم إنتاج و تطوير و صيانه البرمجيات
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            دراسه و تحليل دورات العمل بالمنظومه لدرجها بخطه تطوير التطبيقات -
            <br />
            انتاج الاصدارات الجديده من التطبيقات بشكل دوري-
            <br />
            عمل تحديث و تعديلات للتطبيقات بشكل دوري -
            <br />
            انشاء تقارير تساعد المستخدم و متخدذي القرار -
            <br />
            انشاء الوثائق الفنيه الخاصه بالتطبيقات -
            <br />
            المتابيعه الدوريه للتطبيقات -
            <br />
           
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCard;