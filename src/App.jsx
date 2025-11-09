import { useActiveSection } from "./hooks/useActiveSection";
import {
  AboutTeam,
  AboutUs,
  Contact,
  Hero,
  Navbar,
  Portfolio,
  Services,
} from "./components/index.components";
function App() {
  const activeSection = useActiveSection([
    "hero",
    "aboutUs",
    "aboutTeam",
    "services",
    "portfolio",
    "contact",
  ]);
  return (
    <div
      className="flex flex-row overflow-y-hidden overflow-x-scroll snap-x snap-mandatory
     scroll-smooth w-screen h-screen"
    >
      <Navbar active={activeSection} />
      <Hero />
      <AboutTeam />
      <AboutUs />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
