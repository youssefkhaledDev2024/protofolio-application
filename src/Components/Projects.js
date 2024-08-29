import { Container, Row, Col, Nav, Tab, NavLink, NavItem, Button, TabContent, TabPane, CardBody, Card, CardTitle, CardText, } from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import { useState } from "react";
import ModalCard from "./ModalCard";


export const Projects = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    console.log(showModal);
    return (
        <section className="currentProject" id="currentProject" dir="rtl">
            <Container>
                <Row>
                    <Col>
                        <h2>المشروعات الحاليه</h2>
                        <div style={{
                            display: "inline flow-root list-item",
                            justifycontent: "space-around",/* Space out the divs */
                            backgroundcolor: "#f4f4f4", /* Background color for the container */
                            padding: "20px",
                            borderradius: "8px"
                        }}>

                            <div className="containercontant" dir="rtl">
                                <div className="circle">١</div>
                                <div className="rectangle" onClick={handleShow}>  تطوير منظومه تدبير الأحتياجات للقوات المسلحه </div>
                            </div>
                            <div className="containercontant" dir="rtl">
                                <div className="circle">٢</div>
                                <div className="rectangle">  تطوير منظومه مراقبه العهد للقوات المسلحه </div>
                            </div>
                            <div className="containercontant" dir="rtl">
                                <div className="circle">٣</div>
                                <div className="rectangle">  تطوير منظومه الامداد الالي و السيطره علي المخزون </div>
                            </div>
                            <div className="containercontant" dir="rtl">
                                <div className="circle">٤</div>
                                <div className="rectangle">  تنفيذ المرور و المراجعه الفنيه علي الوحدات من خلال هيئه تسليح ق.م و مركز التأمين الفني لمنظومه الامداد الالي</div>
                            </div>
                            <div className="containercontant" dir="rtl">
                                <div className="circle">٥</div>
                                <div className="rectangle">  الوحدات المدرجه ضمن خطه تعميم منظومه الامداد الالي و السيطره علي المخزون MMC للعام المالي (2019\2020) </div>
                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="img"></img>
            <ModalCard show={showModal} handleClose={handleClose} />
        </section>
    )
}