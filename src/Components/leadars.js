import { Container, Row, Col, Nav, Tab, NavLink, NavItem, Button, TabContent, TabPane, CardBody, Card, CardTitle, CardText, CardSubtitle , CardLink , CardImg } from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";

export const Leadars = () => {

    return (
        <section className="leadars" id="leadars" dir="rtl">
            <Container>
                <Row>
                    <Col>
                        <h2> اعرف قادتك </h2>

                    <div className="cardContianer">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                             className="leadersCard"
                        >
             
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                   فريق أول / عبد المجيد صقر
                                </CardText>
                                <CardText>
القائد العام للقوات المسلحه وزير الدفاع و الانتاج الحربي                                </CardText>
                          
                            </CardBody>
                        </Card>
                        <Card
                            style={{
                                width: '18rem'
                            }}
                            className="leadersCard"

                        >

                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    فريق / احمد خليفه
                                </CardText>
                                <CardText>
                                    رئيس اركان حرب القوات المسلحه
                                </CardText>
                           
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: '18rem'
                            }}
                            className="leadersCard"

                        >
                
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    لواء / توفيق مختار توفيق مصطفي
                                </CardText>
                                <CardText>
                                    مدير إداره النظم
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card
                            style={{
                                width: '18rem'
                            }}
                            className="leadersCard"

                        >
                       
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    عميد / أدهم محمد الحصري
                                </CardText>
                                <CardText>
                                    قائد مركز التأمين الفني
                                </CardText>

                            </CardBody>
                        </Card>
                        </div>


 
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="img"></img>
        </section>
    )
}