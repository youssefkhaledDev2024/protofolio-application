
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Assuming you've set up i18n with Arabic
import {NavBar} from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';
// import { Leadars } from './Components/leadars';
// import { Sections } from './Components/Sections';
// import { Projects } from './Components/Projects';
import { About } from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage } from './Components/AboutPage';
// import Info from './Components/Info';
import { UsePage } from './Components/UsePage';
import Footer from './Components/Footer';
import Systems from './Components/system';
import { Contact2 } from './Components/FullContact';

 
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Systems/>
                {/* <div id="skill"> <Skills /></div> */}
                {/* <div id="sections"><Sections /></div> */}
                {/* <div id='info'> <Info /></div> */}
                {/* <div id='projects'><Projects /> </div> */}
                {/* <div id='leaders'> <Leadars />  </div> */}
                <div id='about'> <About /></div>
                <div id='contact'><Contact /></div>
              </>
            }
          />
          <Route path='/skill' element={<Skills/>}></Route>
          <Route path='/use' element={<UsePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FullContact" element={<Contact2 />} />

        </Routes>
        <Footer/>
      </Router>
    </I18nextProvider>
  );
}

export default App;
