import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import SysytemCard from "./SystemCards";
import inventory from "../Assets/Pics/InventoryManagment.jpeg"
import Dashboard from "../Assets/Pics/Dashboard.jpg"
import inv_audit from "../Assets/Pics/inventory-audit.jpg"
import matrokat from "../Assets/Pics/matrokat.jpg"
import warehaouse from "../Assets/Pics/warehouse.jpg"


export const Systems = () => {


  return (
    <section className="Use" id="Use" dir="rtl" style={{marginBottom:"74px" , marginTop:"-32px"}}>
      <Container>
        <Row>
          <Col>
            <h2> منظومات المركز </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap", // Wraps items to the next row when no space
                padding: "20px", // Padding inside the container
                borderRadius: "8px", //

              }}
            >
              <SysytemCard
                src={inventory}
                title=" منظومة الامداد الألي و السيطرة علي المخزون"
                link="اضغط هنا"
                style={{
                  flex: "1 1 30%", // Each card takes 30% of the parent's width
                  marginBottom: "20px", // Space below each card
                  boxSizing: "border-box", // Include padding in width calculation
                }}
              ></SysytemCard>
              <SysytemCard
                style={{
                  flex: "1 1 30%", // Each card takes 30% of the parent's width
                  marginBottom: "20px", // Space below each card
                  boxSizing: "border-box", // Include padding in width calculation
                }}
                src={inv_audit}
                title=" منظومة مراقبة العهدة"
                link="اضغط هنا"
              ></SysytemCard>

              <SysytemCard
                style={{
                  flex: "1 1 30%", // Each card takes 30% of the parent's width
                  marginBottom: "20px", // Space below each card
                  boxSizing: "border-box", // Include padding in width calculation
                }}
                src={warehaouse}
                title=" منظومة تدبير الأحتياجات     "
                link="اضغط هنا"
              ></SysytemCard>

              <SysytemCard
                style={{
                  flex: "1 1 30%", // Each card takes 30% of the parent's width
                  marginBottom: "20px", // Space below each card
                  boxSizing: "border-box", // Include padding in width calculation
                }}
              src={matrokat}
                title=" منظومة المتروكات     "
                link="اضغط هنا"
              ></SysytemCard>

              <SysytemCard
                style={{
                  flex: "1 1 30%", // Each card takes 30% of the parent's width
                  marginBottom: "20px", // Space below each card
                  boxSizing: "border-box", // Include padding in width calculation
                }}
                src={Dashboard}
                title=" لوحة القيادة      "
                link="اضغط هنا"
              ></SysytemCard>

            </div>
          </Col>
        </Row>
      </Container>
      {/* <img
          src={colorSharp2}
          className="background-image-right"
          alt="img"
        ></img> */}
    </section>
  );
}
export default Systems;