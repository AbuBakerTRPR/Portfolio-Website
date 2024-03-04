import Footer from "./components/Footer";
import HomeBody from "./components/HomeBody";
import Navbar from "./components/Navbar";
import SkillList from "./components/SkillList";
import Offerings from "./components/Offerings";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <div className="relative">
        
        <Navbar/>
        <HomeBody />      
        <SkillList />
        <AboutMe/>
        <Offerings />
        <Footer />
    
      </div>
    </>
  );
}

export default App;
