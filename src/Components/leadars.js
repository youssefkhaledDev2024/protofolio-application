import { Container, Row, Col, Nav, Tab, NavLink, NavItem, Button, TabContent, TabPane, CardBody, Card, CardTitle, CardText, CardSubtitle , CardLink , CardImg } from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import person from "../Assets/Pics/person.png";

import first from "../Assets/Pics/firstimage.jpg"

import second from "../Assets/Pics/secondimage.jpg"


export const Leadars = () => {

    return (
        <section className="leadars" id="leadars" dir="rtl">
        <Container>
          <Row>
            <Col>
              <h2>اعرف قادتك</h2>
              <div className="cardContianer">
                <Card className="leadersCard">
                  <img alt="Card cap" src={first} />
                  <CardBody>
                    <CardText>فريق أول / عبد المجيد صقر</CardText>
                    <CardText>
                      القائد العام للقوات المسلحه وزير الدفاع و الانتاج الحربي
                    </CardText>
                  </CardBody>
                </Card>
      
                <Card className="leadersCard">
                  <img alt="Card cap" src={second} />
                  <CardBody>
                    <CardText>فريق / احمد خليفه</CardText>
                    <CardText>رئيس اركان حرب القوات المسلحه</CardText>
                  </CardBody>
                </Card>
      
                <Card className="leadersCard">
                  <img alt="Card cap" src={person} />
                  <CardBody>
                    <CardText>لواء / توفيق مختار توفيق مصطفي</CardText>
                    <CardText>مدير إدارة النظم</CardText>
                  </CardBody>
                </Card>
      
                <Card className="leadersCard">
                  <img alt="Card cap" src={person} />
                  <CardBody>
                    <CardText>عميد / أدهم محمد الحصري</CardText>
                    <CardText>قائد مركز التأمين الفني</CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    )
}