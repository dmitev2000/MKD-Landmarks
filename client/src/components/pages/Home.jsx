import AboutComponent from "../interface/ui/AboutComponent";
import GetStartedButton from "../interface/ui/GetStartedButton";
import Intro from "../interface/ui/Intro";
import "./Page.css";

const Home = () => {
  return (
    <div style={{ marginTop: "calc(100vh - 70px)" }}>
      <div className="home-page">
        <Intro />
      </div>
      <GetStartedButton />
      <AboutComponent />
    </div>
  );
};

export default Home;
