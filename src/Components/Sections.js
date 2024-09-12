import {
    Container, Row, Col, Card, CardBody, CardTitle, Button,
  } from "react-bootstrap";
  import Carousel from 'react-multi-carousel';
  import colorSharp2 from "../Assets/Pics/color-sharp2.png";
  import dev from "../Assets/Pics/dev.jpg";
  import db from "../Assets/Pics/database.jpg";
  import op from "../Assets/Pics/operatingSystems.jpg";
  import ts from "../Assets/Pics/techsupport.jpg";
  import ts2 from "../Assets/Pics/techsup2.jpg";
  import ModalCard from "./ModalCard";
  import { useState } from "react";
  
  export const Sections = () => {
    const [showModal, setShowModal] = useState(false);
  
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  
    const responsive = {
      superLargeDesktop: {
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
              <div className="carousel-wrapper">
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  {/* Card 1 */}
                  <Card className="SectionsCard">
                    <CardBody style={{fontSize:"10px"}}>
                      <CardTitle className="SectionTittle" style={{

                        fontSize:"15px",
                        fontWeight:"bold",
                        margin:"7px"
                      }}>
                        قسم إنتاج و تطوير و صيانه البرمجيات
                      </CardTitle>
                    </CardBody>
                    <img alt="Card cap" src={dev} className="card-img" height={20}/>
                    <CardBody>
                      <div className="centered-button">
                        <Button className="btn-custom" onClick={handleShow}>اقرأ</Button>
                      </div>
                    </CardBody>
                  </Card>
  
                  {/* Card 2 */}
                  <Card className="SectionsCard">
                    <CardBody>
                      <CardTitle className="SectionTittle">
                        قسم إداره قواعد البيانات
                      </CardTitle>
                    </CardBody>
                    <img alt="Card cap" src={db} className="card-img" />
                    <CardBody>
                      <div className="centered-button">
                      <Button className="btn-custom" onClick={handleShow}>اقرأ</Button>
                      </div>
                    </CardBody>
                  </Card>
  
                  {/* Card 3 */}
                  <Card className="SectionsCard">
                    <CardBody>
                      <CardTitle className="SectionTittle">
                        قسم إداره نظم التشغيل
                      </CardTitle>
                    </CardBody>
                    <img alt="Card cap" src={op} className="card-img" />
                    <CardBody>
                      <div className="centered-button">
                      <Button className="btn-custom" onClick={handleShow}>اقرأ</Button>
                      </div>
                    </CardBody>
                  </Card>
  
                  {/* Card 4 */}
                  <Card className="SectionsCard">
                    <CardBody>
                      <CardTitle className="SectionTittle">
                        قسم مراقبه جوده البرمجيات
                      </CardTitle>
                    </CardBody>
                    <img alt="Card cap" src={ts} className="card-img" />
                    <CardBody>
                      <div className="centered-button">
                      <Button className="btn-custom" onClick={handleShow}>اقرأ</Button>
                      </div>
                    </CardBody>
                  </Card>
  
                  {/* Card 5 */}
                  <Card className="SectionsCard">
                    <CardBody>
                      <CardTitle className="SectionTittle">
                        قسم الدعم و التدريب الفني
                      </CardTitle>
                    </CardBody>
                    <img alt="Card cap" src={ts2} className="card-img" />
                    <CardBody>
                      <div className="centered-button">
                      <Button className="btn-custom" onClick={handleShow}>اقرأ</Button>
                      </div>
                    </CardBody>
                  </Card>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
  
        <img src={colorSharp2} className="background-image-right" alt="img" />
        <ModalCard show={showModal} handleClose={handleClose} />
      </section>
    )
  }
  