import { Container, Row, Col} from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import army from "../Assets/Pics/armyLogo.png";
import { useNavigate } from "react-router-dom";

export const About = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about'); // Redirects to the /details route
      };


    return (
        <section className="About" id="About" dir="rtl">
            <Container>
                <Row>
                    <Col>
                        <h2> معلومات عن المركز</h2>
                        <div style={{
                            justifycontent: "space-around",/* Space out the divs */
                            backgroundcolor: "#f4f4f4", /* Background color for the container */
                            padding: "20px",
                            borderradius: "8px"
                        }}>
                            <div className="AboutContant">
                                <img src={army} alt="img"></img>
                                <button  onClick={handleClick}>اضغط لقراءه التفاصيل</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="img"></img>
        </section>
    )
}