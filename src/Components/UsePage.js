import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import Card from "./Card";




export const UsePage = () => {


    return (
      <section className="Use" id="Use" dir="rtl">
        <Container>
          <Row>
            <Col>
              <h2> دليل استخدام منظومات MMC</h2>
              <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Wraps items to the next row when no space
                    justifyContent: "space-between", // Space out evenly between items
                    padding: "20px", // Padding inside the container
                    borderRadius: "8px", //
                  
                }}
              >

                            <Card
                                title="كيفيه الدخول علي MMC"
                                link="اضغط هنا"
                                style={{
                                    flex: "1 1 30%", // Each card takes 30% of the parent's width
                                    marginBottom: "20px", // Space below each card
                                    boxSizing: "border-box", // Include padding in width calculation
                                  }}
                            ></Card>
                            <Card
                             style={{
                                flex: "1 1 30%", // Each card takes 30% of the parent's width
                                marginBottom: "20px", // Space below each card
                                boxSizing: "border-box", // Include padding in width calculation
                              }}
                                title="كيفية الدخول علي منظومة مراقبة العهدة"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                             style={{
                                flex: "1 1 30%", // Each card takes 30% of the parent's width
                                marginBottom: "20px", // Space below each card
                                boxSizing: "border-box", // Include padding in width calculation
                              }}
                                title="ملف التعديلات للإصدار رقم 1-28-2018"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="طريقه البحث في اصناف المنظومه"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="دورة عمل الصرف بالافرع الفنية"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="دورة عمل نموذج خصم 2 أت"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="دورة الصرف من المستودع الرئيسي للمستودع الفرعي"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="دورة الصرف بالوحدات الميدانية حتي النهاية"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="دورة الصرف الداخلي و الخصم الداخلي"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="دورة الاضافة المحلية"
                                link="اضغط هنا"
                            ></Card>

                            <Card
                                title="دورة الاضافة الداخلية"
                                link="اضغط هنا"
                            ></Card>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={colorSharp2}
          className="background-image-right"
          alt="img"
        ></img>
      </section>
    );
}