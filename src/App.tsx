import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import TravelSpots from "./components/TravelSpots";
import GourmetGuide from "./components/GourmetGuide";
// import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Hero />
      <Highlights />
      <TravelSpots />
      <GourmetGuide />
      {/* <SocialFeed /> */}
      <Footer />
    </div>
  );
}

export default App;
