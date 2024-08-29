import { Container, Row, Col, Nav, Tab, NavLink, NavItem, TabContent, TabPane, CardBody, Card, CardTitle, CardText, CardSubtitle, CardLink, Button } from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import dev from "../Assets/Pics/dev.jpg";
import db from "../Assets/Pics/database.jpg";
import op from "../Assets/Pics/operatingSystems.jpg";
import ts from "../Assets/Pics/techsupport.jpg";
import ts2 from "../Assets/Pics/techsup2.jpg";
import ModalCard from "./ModalCard";
import { useState } from "react";


import Carousel from 'react-multi-carousel';

export const Sections = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    console.log(showModal);


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="Sections" id="Sections" dir="rtl">
            <Container>
                <Row>
                    <Col>
                        <h2>اقسام المركز</h2>

                        <div style={{ display: "flex", justifycontent: "space-around", backgroundcolor: "#f4f4f4", padding: "20px", borderradius: "8px" }}>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                    className="SectionsCard"
                                >
                                    <CardBody>
                                        <CardTitle tag="h5" className="SectionTittle">
                                            قسم إنتاج و تطوير و صيانه البرمجيات
                                        </CardTitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src={dev}
                                        width="100%"
                                    />
                                    <CardBody>
                                        <div className="centered-button">
                                        <Button className="custom-button" onClick={handleShow}>اقرأ</Button>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                    className="SectionsCard"
                                >
                                    <CardBody>
                                        <CardTitle tag="h5" className="SectionTittle">
                                            قسم إداره قواعد البيانات
                                        </CardTitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src={db}
                                        width="100%"
                                        height={"188px"}
                                    />
                                    <CardBody>
                                        <div className="centered-button">
                                            <Button className="custom-button">اقرأ</Button>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                    className="SectionsCard"
                                >
                                    <CardBody>
                                        <CardTitle tag="h5" className="SectionTittle">
                                            قسم إداره نظم التشغيل
                                        </CardTitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src={op}
                                        width="100%"
                                        height={"188px"}

                                    />
                                    <CardBody>
                                        <div className="centered-button">
                                            <Button className="custom-button">اقرأ</Button>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                    className="SectionsCard"
                                >
                                    <CardBody>
                                        <CardTitle tag="h5" className="SectionTittle">
                                            قسم مراقبه جوده البرمجيات
                                        </CardTitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src={ts}
                                        width="100%"
                                        height={"188px"}

                                    />
                                    <CardBody>
                                        <div className="centered-button">
                                            <Button className="custom-button">اقرأ</Button>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card
                                    style={{
                                        width: '18rem'
                                    }}
                                    className="SectionsCard"
                                >
                                    <CardBody>
                                        <CardTitle tag="h5" className="SectionTittle">
                                            قسم الدعم و التدريب الفني
                                        </CardTitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src={ts2}
                                        width="100%"
                                        height={"188px"}

                                    />
                                    <CardBody>
                                        <div className="centered-button">
                                            <Button className="custom-button">اقرأ</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                         </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img src={colorSharp2} className="background-image-right" alt="img"></img>
            <ModalCard show={showModal} handleClose={handleClose} />

        </section>
    )
}