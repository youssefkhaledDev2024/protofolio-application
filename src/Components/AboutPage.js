import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../Assets/Pics/color-sharp2.png";
import army from "../Assets/Pics/armyLogo.png";
import maps2 from "../Assets/Pics/maps2.jpg";
import Tabs from "./Tabs";
import cmmi_1 from "../Assets/Pics/cmmi1.png";
import cmmi_2 from "../Assets/Pics/cmmi2.png";
import cmmi_3 from "../Assets/Pics/cmmi3.png";
import cmmi_4 from "../Assets/Pics/CMMI-SVC (2).png";
import nozm from "../Assets/Pics/nozm.png"
import { useNavigate } from "react-router-dom";


export const AboutPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/'); // Redirects to the /details route
    };


    return (
      <section className="About" id="About" dir="rtl"  style={{marginBottom : "43px"}}>
        <Container>
          <Row>
            <Col>
              <h2> مقدمه عن مركز التأمين الفني</h2>
              <div
                style={{
                  justifycontent: "space-around" /* Space out the divs */,
                  backgroundcolor:
                    "#f4f4f4" /* Background color for the container */,
                  padding: "20px",
                  borderradius: "8px",
                }}
              >
                <div className="Aboutcard" dir="rtl">
                  <img src={nozm} alt="img"></img>
                  <div className="AboutTittle">
                    ١- نبذه تاريخيه عن مركز التأمين الفني
                  </div>
                  <p className="AboutDescription">
                    قام الجانب الأمريكي بإداره الإمداد الألى و السيطرة علي
                    المخزون MMC في الفتره من عام 1994 إلي عام 2005
                    <br></br>
                    قامت إداره نظم و معلومات للقوات المسلحة بتولي مسئولية إداره
                    منظومة الإمداد الألى و السيطرة علي المخزون MMC في عام 2005
                    <br></br>
                    حيث تم إنشاء مركز التأمين الفني لمنظومة الامداد الألي و
                    السيطرةعلي المخزون MMC كإحدى وحدات إداره نظم المعلومات في
                    20/5/2005 بتعليمات رقم (6868) بتاريخ 20/2/2006 .
                  </p>
                </div>

                <div className="Aboutcard" dir="rtl">
                <img src={nozm} alt="img"></img>
                  <div className="AboutTittle">٢- تعريف المنظومه </div>
                  <p className="AboutDescription">
                    تعتبر منظومة الإمداد الألي و السيطره علي المخزون بالقوات
                    المسلحة نظام متكامل للسيطره علي الأتي :<br></br>- دوره
                    الإمداد بأصناف الاإحتياجات الفنية للقوات المسلحة بدءا من
                    الاإحتياجات الفنيه و تدبيرها ثم وصول الأصناف الي موانئ
                    الوصول و استقبالها حتي تمام الوصول الي مستودعات الإضافه و
                    الصرف منها و مراقبه المخزون و السيطرة عليه حتي تكهينه او
                    اعدامه او الإستغناء عنه
                    <br></br>- دورة الإصلاح و الصيانه لمعدات القوات المسلحه و
                    التي يتم من خلالها متابعه المعدات و السيطرة عليها أثناء
                    مراحل الصيانه و مستويات الاصلاح المختلفه
                  </p>
                </div>

                <div className="Aboutcard" dir="rtl">
                  <img src={nozm} alt="img"></img>
                  <div className="AboutTittle">٣- عناصر المنظومه </div>

                  <div className="ItemsImage">
                    <img src={army} alt="img"></img>
                  </div>
                </div>

                <div className="Aboutcard" dir="rtl">
                <img src={nozm} alt="img"></img>

                  <div className="AboutTittle">٤- تعريف المنظومه </div>
                  <p className="AboutDescription">
                    - ميكنه دورات العمل المستندية اليدوية (الإضافة / الخصم /
                    الجرد /الإصلاح / التكهين) و ذلك توفيرا للوقت و الجهد و
                    تقليلا للتكلفه .<br></br>- تقليل الخطأ البشري بالإعتماد علي
                    منظومه معلوماتيه متكاملة من خلال صلاحيات محددة للمستخدمين و
                    متخذي القرار .<br></br>- ضمان سرعة الإمداد بالأصناف الموجوه
                    في الوقا المحدد .<br></br>- المناورة بالأصناف البديلة بين
                    المستودعات و الإدارات عند الضروره من خلال المستوي الاعلي و
                    طبقا للصلاحيات المحددة
                    <br></br>- سهولة معرفة الأصناف ذات معدلات الاأستهلاك
                    المرتفعة لضمان سرعة تدبيرها
                    <br></br>- ترشيد تدبير الأصناف من خلال الإطلاع علي مستويات
                    المخزون الراكد بالمستودعات .<br></br>- توفير رؤية متكاملة
                    لمختلف مستويات الإمداد بالأصناف المتعاقد عليها خلال دورة
                    التوريد و حتي الإضافة بالمستودعات .<br></br>- دعم متخذي
                    القرار علي المستويات المختلفه عن طريق إتاحة معلومات إحصائية
                    و تحليلية عن الموجودات و الأرصده .<br></br>- ترشيد
                    المأموريات و تقليل التحركات مما يؤدي الي توفير نفقات هائله
                    علي القوات المسلحه بالأضافه الي تقليل نقل البيانات .
                    <br></br>
                    -تنفيذ عمليات الجرد الدوري و المفاجئ لتحديد الإخنلاف بين
                    الرصيد الدفتري و الموجود الفعلي بالمخازن و الاقسام .
                  </p>
                </div>
              </div>

              <h2> المهام الرئيسيه لمركز التأمين الفني</h2>
              <div
                style={{
                  justifycontent: "space-around" /* Space out the divs */,
                  backgroundcolor:
                    "#f4f4f4" /* Background color for the container */,
                  padding: "20px",
                  borderradius: "8px",
                }}
              >
                <div className="Aboutcard" dir="rtl">
                <img src={nozm} alt="img"></img>
                  <p className="AboutDescription">
                    -تعميم منظومة الإمداد الألي و السيطرة علي المخزون MMC
                    بالوحدات الجديدة من خلال (معاينه المواقع / تدريب الأفراد /
                    ترتيب المخازن / تكويد الأصناف ظ إعداد الأجهزه و المعدات).
                    <br></br>
                    -تنفيذ خطه الإحلال و التطوير لأجهزه و معدات النظم المتقادمة
                    في الوحدات .<br></br>
                    -إدارة و تطوير قواعد البيانات الخاصة بمنظومة الإمداد الألي و
                    السيطرة علي المخزون MMC .<br></br>
                    -ميكنة و تطوير و إختبار دورات العمل الخاصة بمنظومة الإمداد
                    الألي و السيطرة علي المخزون MMC .<br></br>
                    -إدارة و مراقبة إجراءات تأمين البيانات بالمنظومة
                    <br></br>- إعداد و تنفيذ دورات تدريبيه لمستخدمي المنظومة
                    (أفرع فنيه / ورش و مستودعات / أفواج التشهيلات).
                    <br></br>- أستقبال كل من المطالب الجديده و بلاغات الأعطال من
                    خلال منظومه تلقي بلاغات الأعطال و التأكد من أصلاحها
                    (تليفونيا / بالمواقع).
                    <br></br>- تطبيق أحدث منهجيات الجودة العالميه من خلال إنشاء
                    اسلوب قياسي يحقق أعلي معدلات الأداء و التطوير المستمر لأليه
                    العمل بالمركز .<br></br>
                    -حفظ و توثيق جميع الوثائق الفنية و الأصدارات الخاصة بمنظومة
                    الإمداد الألي و السيطرة علي الخزون MMC .<br></br>- عمل نسخ
                    إحطياطيه (قواعد البيانات / إصدارات التطبيقات / الخوادم
                    الرئيسية).
                  </p>
                </div>
              </div>

              <h2> المواقع العاملة بمنظومة الإمداد الألى </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundImage: `url(${maps2})`,
                  backgroundSize: "cover", // Ensure the image covers the entire background
                  backgroundPosition: "center",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #ccc",
                  // Make it responsive to card's width
                }}
              >
                <Tabs />
              </div>

              <h2>الرؤية المستقبلية</h2>
              <div
                style={{
                  justifycontent: "space-around" /* Space out the divs */,
                  backgroundcolor:
                    "#f4f4f4" /* Background color for the container */,
                  padding: "20px",
                  borderradius: "8px",
                }}
              >
                <div className="Aboutcard" dir="rtl">
                <img src={nozm} alt="img"></img>
                  <p className="AboutDescription">
                   - تعكس رؤيتنا مسار المركز و تعتبر موجها أساسيا في كل جوانب أعمالنا من خلال تحديد ما نحتاج إنجازه لتعميم و تفعيل منظومة الامداد الألي بجميع المستودعات و الورش العاملة بالقوات المسلحه و الوصول إالي أعلي مستويات الجودة في مجال الامداد الالي و السيطرة علي المخزون .
                  </p>
                </div>
              </div>

              
              <h2>شهادات الجودة الحاصل عليها المركز</h2>
              <div
                style={{
                  justifycontent: "space-around" /* Space out the divs */,
                  backgroundcolor:
                    "#f4f4f4" /* Background color for the container */,
                  padding: "20px",
                  borderradius: "8px",
                }}
              >
                <div className="Aboutcard" dir="rtl">
                <img src={nozm} alt="img"></img>
                <h1>شهادة الجودة العالمية CMMI</h1>
                  <div className="AboutDescriptionWithimg">
                    <img src={cmmi_1} alt="img1"></img>
                    <p className="AboutDescription">
                      تعتبر شهادة الجودة العالمية (CMMI) Cabablity Maturity Model Integration مقياسا عالميا لافضل ممارسالت الصناعه لتطوير البرمجيات
                      , و يأتي حصول المركز علي هذة الشهادة كإعتراف بإنشطة هندسة برمجيات و نظم مركز التأمين الفني MMC و التي تعتمد علي الفحوصات و التقييمات الموسعة
                      التي يقوم بها معهد SEI لهندسة البرمجيات و هو يعتبر جهة تقييم رائدة و معتمدة و مستقلة .
                      <br />
                      <br />
                      و في اطار حرص المركز علي تقديم حلول إالكترونيه ذات مستوى عالي , فقد تم أستخدام هذا المنهج لتحقيق
                      الأمتياز في إنتاج البرمجيات بالمركز للمشاريع الحالية و المستقبلية , مما يجعل شهادة CMMI مؤشرا قويا علي مستوي مهنية
                      و احتراف تقدم عمليات هندسه البرمجيات الخاصة بالمركز .

                    </p>
                  </div>

                  <br></br>
                  <br></br>
                  <br></br>


                  <h1>شهادة الجودة العالمية لأنتاج البرمجيات المستوى الثاني لعام 2008 (CMMI_Dev/2)</h1>
                  <div className="AboutDescriptionWithimg">
                    <img src={cmmi_2} alt="img1"></img>
                    <p className="AboutDescription">
                   حصل مركز التأمين الفني لمنظومة الأمداد الألي و السيطره علي المخزون التابع لإدارة النظم و المعلومات 
                   القوات المسلحة علي شهادة الجودة العالمية لإنتاج البرمجيات المستوى الثانى , و يعتبر المركز اول جهة حكومية تحصل علي الشهادة علي مستوى جمهورية مصر العربية و الشرق الاوسط

                    </p>
                  </div>

                  <h1>شهادة الجودة العالمية لأنتاج البرمجيات المستوى الثالث لعام 2010 (CMMI_Dev/3)</h1>

                  <div className="AboutDescriptionWithimg">
                    <img src={cmmi_3} alt="img1"></img>
                    <p className="AboutDescription">
                   حصل مركز التأمين الفني لمنظومة الأمداد الألي و السيطره علي المخزون التابع لإدارة النظم و المعلومات 
                   القوات المسلحة علي شهادة الجودة العالمية لإنتاج البرمجيات المستوى الثالث , و يعتبر المركز اول جهة حكومية تحصل علي الشهادة علي مستوى جمهورية مصر العربية و الشرق الاوسط

                    </p>
                  </div>

                  <h1>شهادة الجودة العالمية للخدمات المعلوماتية المستوى الثاني لعام 2014 (CMMI-SVC/2)</h1>

                  <div className="AboutDescriptionWithimg">
                    <img src={cmmi_4} alt="img1"></img>
                    <p className="AboutDescription">
                   حصل مركز التأمين الفني لمنظومة الأمداد الألي و السيطره علي المخزون التابع لإدارة النظم و المعلومات 
                   القوات المسلحة علي شهادة الجودة العالمية للخدمات المعلوماتيه المستوى الثانى , و يعتبر المركز اول جهة حكومية تحصل علي الشهادة علي مستوى جمهورية مصر العربية و الشرق الاوسط
 
                    </p>
                  </div>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="BackButton">
          <button onClick={handleClick}>رجوع</button>
        </div>
      </section>
    );
}