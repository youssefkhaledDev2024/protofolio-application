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
        <section className="AboutSm" id="AboutSm" dir="rtl">
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
                                <div style={{flexDirection:"column"}}>
                                <p>
                                    تعتبر منظومة الإمداد الألي و السيطره علي المخزون بالقوات المسلحة نظام متكامل للسيطره علي الأتي :
                                    دوره الإمداد بأصناف الاإحتياجات الفنية للقوات المسلحة بدءا من الاإحتياجات الفنيه و تدبيرها ثم وصول الأصناف الي موانئ الوصول و استقبالها حتي تمام الوصول الي مستودعات الإضافه و الصرف منها و مراقبه المخزون و السيطرة عليه حتي تكهينه او اعدامه او الإستغناء عنة
                                </p>
                                <button onClick={handleClick}>اضغط لقراءه المزيد</button>
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