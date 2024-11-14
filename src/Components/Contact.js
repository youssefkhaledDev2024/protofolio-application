import { Container, Row, Col, Nav, Tab, NavLink, NavItem, Button, TabContent, TabPane, CardBody, Card, CardTitle, CardText, } from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import { useNavigate } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

export const Contact = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/FullContact'); // Redirects to the /details route
    };


    return (
        <section className="project" id="project" dir="rtl" style={{ marginBottom: "43px" }}>
            <Container>
                <Row>
                    <Col>
                        <h2>اتصل بنا</h2>
                        <div style={{
                            display: "flex",
                            justifycontent: "space-around",/* Space out the divs */
                            backgroundcolor: "#f4f4f4", /* Background color for the container */
                            padding: "20px",
                            borderradius: "8px"

                        }}>
                            <div className="contacts">
                                {/* <h1 className="tittle">للاتصال بالمركز</h1> */}
                                <table >
                                    <tbody>
                                        {/* <th>مكتب قائد المركز  </th>
                                    <tr>
                                        <td>
                                            سنترال :
                                        </td>
                                        <td>
                                            24143716
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            استراتيجي :
                                        </td>
                                        <td>
                                            2802344
                                        </td>
                                    </tr> */}

                                        <th> التحويله</th>
                                        <tr>
                                            <td>
                                                سنترال :
                                            </td>
                                            <td>
                                                24159281
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                استراتيجي :
                                            </td>
                                            <td>
                                                2803878
                                            </td>
                                        </tr>

                                        {/* <th> الاستخدام الصوتي</th>
                                    <tr>
                                        <td>
                                            سنترال :
                                        </td>
                                        <td>
                                            24176713
                                        </td>
                                    </tr>

                                    <th> الفاكس</th>
                                    <tr>
                                        <td>
                                            سنترال :
                                        </td>
                                        <td>
                                            241431716
                                        </td>
                                    </tr> */}
                                        {/* <tr>
                                        <td>
                                            استراتيجي :
                                        </td>
                                        <td>
                                            2802344
                                        </td>
                                    </tr> */}

                                        {/* <th> هاتف الشبكه</th>
                                    <tr>
                                        <td>
                                            سنترال :
                                        </td>
                                        <td>
                                            700551
                                        </td>
                                    </tr> */}
                                        {/* <tr>
                                        <td>
                                            استراتيجي :
                                        </td>
                                        <td>
                                            8005
                                        </td>
                                    </tr> */}
                                        {/* <th> مكتب تلقي بلاغات الاعطال</th>
                                    <tr>
                                        <td>
                                            24159281
                                        </td>
                                    </tr> */}
                                    </tbody>
                                </table>
                            </div>
                            {/* <div className="contacts">
                            <h1 className="tittle">ارقام هواتف الشبكه داخل المركز </h1>
                            <table >
                                <tbody>
                                    <th>مكتب السيد قائد المركز</th>
                                    <tr>
                                        <td>
                                        عميد/ ادهم محمد الحصري: 
                                        </td>
                                        <td>
                                            70010-201
                                        </td>
                                    </tr>
                                
                                    <th> مكتب السيد قائد ثاني المركز</th>
                                    <tr>
                                        <td>
                                            عقيد / تامر محمد معاذ :
                                        </td>
                                        <td>
                                            207
                                        </td>
                                    </tr>
                                    

                                    <th>  قسم الدعم الفني</th>
                                    <tr>
                                        <td>
                                            عقيد / احمد طاهر :
                                        </td>
                                        <td>
                                            206
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                     رائد / محمود عيد عبد الجواد  :
                                        </td>
                                        <td>
                                            204
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            مساعد أ / جابر ابراهيم جابر الشناوي :
                                        </td>
                                        <td>
                                            227
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                           مساعد أ / محمد ابو زيد محمد :
                                        </td>
                                        <td>
                                            226
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                           مساعد أ / محمد حمدي رسمي :
                                        </td>
                                        <td>
                                            226
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            رقيب أ /محمد رمضان ابو العلا :
                                        </td>
                                        <td>
                                            226
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                           رقيب أ / السيد صابر السيد حشيش:
                                        </td>
                                        <td>
                                            226
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                           رقيب أ / محمود ابو بكر عبد الفتاح   :
                                        </td>
                                        <td>
                                            200
                                        </td>
                                    </tr>

                                    <th> قسم تطوير البرامج</th>
                                    <tr>
                                        <td>
                                            مقدم / صلاح كرم ابراهيم :
                                        </td>
                                        <td>
                                            77077
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            مقدم / محمد ممدوح الصافوري :
                                        </td>
                                        <td>
                                            213
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                             رائد / ممدوح كارم محمود    :
                                        </td>
                                        <td>
                                            212
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            نقيب / عمر مجدي احمد    :
                                        </td>
                                        <td>
                                            216
                                        </td>
                                    </tr>

                                    

                                    <th> قسم إداره قواعد البيانات </th>
                                    <tr>
                                        <td>
                                            مقدم / محمد يسري :
                                        </td>
                                        <td>
                                            203
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            مقدم / ثروت مجدي :
                                        </td>
                                        <td>
                                            205
                                        </td>
                                    </tr>
                                    <th>    قسم إداره نظم التشغيل</th>
                                    <tr>
                                        <td>
                                            رائد / محمد ابو السعود
                                        </td>
                                        <td>
                                            232
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            رائد / احمد راجح  
                                        </td>
                                        <td>
                                            231
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}

                            {/* <div className="contacts">
                            <h1 className="tittle">ارقام هواتف الشبكه للوحدات العامله بمنظومه MMC </h1>
                            <table >
                                <tbody>
                                    <th>  هيئه الامداد و التموين </th>
                                    <tr>
                                        <td>
                                            مركز الامداد الالي :
                                        </td>
                                        <td>
                                            8081
                                        </td>
                                    </tr>
                                 

                                    <th> إداره نظم و معلومات</th>
                                    <tr>
                                        <td>
                             المستودع الرئيسي لمعدات نظم و معلومات   :
                                        </td>
                                        <td>
                                            8702
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            استراتيجي :
                                        </td>
                                        <td>
                                            2803878
                                        </td>
                                    </tr>
                       
                                </tbody>
                            </table>
                            </div> */}

                        </div>
                        
                        <Accordion defaultActiveKey="0" style={{margin:"30px"}}>
                            <h3 style={{margin:"5px" , opacity:"1"}}>الاسئله الأكثر شيوعا</h3>
                            <Accordion.Item eventKey="0" style={{marginTop:"20px"}}>
                                <Accordion.Header >خطأ في تسجيل الدخول للمنظومه أثناء كتابه أسم المستخدم و كلمه المرور</Accordion.Header>
                                <Accordion.Body style={{margin:"5px"}}>
                                    1) التأكد من أن الكتابه باللغه الإنجليزيه و أن زر Capslock ليس مفعل<br/>
                                    2)عند كتابه كلمه المرور أكثر من مره خطأ يتم غلق المنظومة في هذه يجب التواصل مع المركز و إرسال مندوب لإستلام كلمه مرور جديدة
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>السؤال الثاني</Accordion.Header>
                                <Accordion.Body>
                                    إجابه السؤال الثاني 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp2} className="background-image-right" alt="img"></img> */}
            <div className="BackButton">
                <button onClick={handleClick}>المزيد</button>
            </div>
        </section>
    )
}