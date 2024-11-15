import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import army from "../Assets/Pics/armyLogo.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // const toRotate = [ "مركز التأمين الفني", "لمنظومة الامداد الالي", "و السيطرة علي المخزون"];
  const toRotate = ["مركز التأمين الفني لمنظومة الامداد الآلي والسيطرة على المخزون"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <section className="banner" id="home" >
    <Container>
      <Row className="align-items-center">
        <Col xs={12}>
          <div className="banner-content">
            <div className="text-content">
              {/* <span className="tagline">MMC</span> */}
              <h1>
                <span className="txt-rotate" dataPeriod="100" data-rotate='[ "مركز التأمين الفني", "لمنظومه الامداد الالي", "و السيطره علي المخزون" ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p> */}
              {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
            </div>
            <div className="image-content">
              <img src={army} alt="Header Img" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Banner;