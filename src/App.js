
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Assuming you've set up i18n with Arabic
import {NavBar} from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';
import { Leadars } from './Components/leadars';
import { Sections } from './Components/Sections';
import { Projects } from './Components/Projects';
import { About } from './Components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage } from './Components/AboutPage';
import Info from './Components/Info';

 
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
       
        <Routes>
          <Route
            path="/"
            element={
              <>
               <NavBar />
                <Banner />
               <div id = "skill"> <Skills /></div>
               <div id='leaders'> <Leadars />  </div>   
                <div id="sections"><Sections /></div>
                <div id='projects'><Projects /> </div>
               <div id='about'> <About /></div>
                <div id='contact'><Contact /></div>
                <div id='info'> <Info/></div>
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      
      </Router>
    </I18nextProvider>
  );
}

export default App;
