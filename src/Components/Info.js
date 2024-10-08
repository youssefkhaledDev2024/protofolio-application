import { Container, Row, Col} from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import army from "../Assets/Pics/armyLogo.png";
import { useNavigate } from "react-router-dom";

export const Info = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Use'); // Redirects to the /details route
      };


    return (
        <section className="About" id="About" dir="rtl">
            <Container>
                <Row>
                    <Col>
                        <h2> دليل المستخدم  </h2>
                        <div style={{
                            justifycontent: "space-around",/* Space out the divs */
                            backgroundcolor: "#f4f4f4", /* Background color for the container */
                            padding: "20px",
                            borderradius: "8px"
                        }}>
                            <div className="AboutContant">
                                <img src={army} alt="img"></img>

                                <div style={{ flexDirection:"column"}}>
                                <p>
                                هذا الدليل يهدف إلى تقديم إرشادات شاملة حول كيفية استخدام منظومات مركز التأمين الفني . تم تصميم هذه المنظومات لتلبية احتياجات ، وهي أداة قوية تساعد في تحسين العمليات، تبسيط الإجراءات، وتعزيز الكفاءة.
                                </p>
                                <button  onClick={handleClick}>اضغط هنا  </button>      
                                </div>   
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp2} className="background-image-right" alt="img"></img> */}
        </section>
    )
}
export default Info;