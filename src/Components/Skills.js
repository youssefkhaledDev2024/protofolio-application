import FireFox from "../Assets/Pics/firefox.svg";
import chrome from "../Assets/Pics/chrome.svg";
import flash from "../Assets/Pics/flash.svg";
import Winrar from "../Assets/Pics/output.png";
import pdf from "../Assets/Pics/pdf.svg";
import power_point from "../Assets/Pics/power_point.svg";
import excel from "../Assets/Pics/excel.svg";
import vnc from "../Assets/Pics/vncviewer.svg";
import Lync from "../Assets/Pics/Lync-icon.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../Assets/Pics/arrow1.svg";
import arrow2 from "../Assets/Pics/arrow2.svg";
import colorSharp from "../Assets/Pics/color-sharp.png"
import { useNavigate } from "react-router-dom";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    const navigate = useNavigate();

    const handleClick = (link) => {
       window.open(link , "_blank")
    };
    return (
        <section className="skill" id="skills" style={{ marginBottom: "-48px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>الادوات و البرامج المساعده</h2>
                            <p>تحتوي هذه القائمه علي كل الادوات و البرامج المساعده<br></br> يمكنك تحميل البرنامج بالضغط علي الايقونه</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <a>
                                    <img 
                                    src={FireFox}
                                     alt="Image"
                                    //  onClick={()=>handleClick("https://www.mozilla.org/en-US/firefox/new/")}
                                     style={{ cursor: 'pointer' }}        
                                     />
                                    </a>            
                                    <h5>FireFox متصفح</h5>
                                </div>
                                <div className="item">
                                    <img
                                        src={chrome}
                                        alt="Image"
                                        onClick={()=>handleClick("https://www.google.com/chrome/?brand=YTUH&gad_source=1&gclid=CjwKCAjw0aS3BhA3EiwAKaD2ZZxQGeoEnv8bj5Ujuhrs86uWyZB40p8I_RKEr4h9BnmVcAPVQiyTVBoCs34QAvD_BwE&gclsrc=aw.dshttps://example.com")}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <h5>Chrome متصفح</h5>
                                </div>
                                <div className="item">
                                    <img 
                                    src={flash}
                                     alt="Image" 
                                     onClick={()=>handleClick("https://adobe-flash-player.en.uptodown.com/windows#google_vignette")}
                                     style={{ cursor: 'pointer' }}
                                     
                                     />
                                    <h5>Flash برنامج تشغيل الملفات    </h5>
                                </div>
                                <div className="item">
                                    <img src={Winrar} alt="Image"
                                    onClick={()=>handleClick("https://www.win-rar.com/download.html?&L=0")}
                                    style={{ cursor: 'pointer' }}
                                    />
                                    <h5>WinRar  برنامج فك الملفات</h5>
                                </div>
                                <div className="item">
                                    <img src={pdf} alt="Image"
                                    onClick={()=>handleClick("https://get.adobe.com/reader/")}
                                    style={{ cursor: 'pointer' }}
                                    />
                                    <h5>Pdf برنامج لقراءه الملفات</h5>
                                </div>
                                <div className="item">
                                    <img src={power_point} alt="Image" 
                                    
                                    onClick={()=>handleClick("https://microsoft-powerpoint.en.softonic.com/")}
                                     style={{ cursor: 'pointer' }}
                                    />
                                    <h5>PowerPoint برنامج لقراءه ملفات </h5>
                                </div>
                                <div className="item">
                                    <img src={excel} alt="Image" 
                                    onClick={()=>handleClick("https://microsoft-excel.en.softonic.com/")}
                                    style={{ cursor: 'pointer' }}
                                    />
                                    <h5>Excel برنامج لقراءه الملفات</h5>
                                </div>
                                <div className="item">
                                    <img src={vnc} alt="Image" 
                                    onClick={()=>handleClick("https://www.realvnc.com/en/connect/download/viewer/")}
                                    style={{ cursor: 'pointer' }}
                                    />
                                    <h5>VNC برنامج التحكم عن بعد</h5>
                                </div>
                                <div className="item">
                                    <img src={Lync} alt="Image"
                                    onClick={()=>handleClick("https://www.microsoft.com/en-us/download/details.aspx?id=35450")}
                                    style={{ cursor: 'pointer' }}
                                    />
                                    <h5>Microsoft Lync x64</h5>
                                </div>
                                <div className="item">
                                    <img src={Lync} alt="Image"
                                    onClick={()=>handleClick("https://www.microsoft.com/en-us/download/details.aspx?id=35450")}
                                    style={{ cursor: 'pointer' }}
                                    />
                                    <h5>Microsoft Lync x32</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}