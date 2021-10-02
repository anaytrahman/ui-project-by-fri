import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import "./styles/Responsive.scss";
import AskedQuestion from "./components/asked-questions/AskedQuestion";
import ConsultingSpecialist from "./components/consulting-specialist/ConsultingSpecialist";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import OurRecentArticles from "./components/our-recent-articles/OurRecentArticles";

import Project from "./components/Project";
import StartOnlineChat from "./components/start-online-chat/StartOnlineChat";
import TrustUs from "./components/trust-us-comp/TrustUs";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <div className="project-container">
            <div className="header-dashboard-wrapper">
                  <Header/>
                  <Dashboard/>
            </div>
            <TrustUs/>
            <StartOnlineChat/>
            <ConsultingSpecialist/>
            <OurRecentArticles/>
            <AskedQuestion/>
            <Footer/>
          </div>
           {/* all codes in this single */}
          {/* <Project /> */}
          
        </div>
      </div>
    </Router>
  );
}

export default App;
