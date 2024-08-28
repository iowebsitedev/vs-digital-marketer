import { Header } from "./components/Header";
import { HeroSectionLeft } from "./components/HeroSectionLeft";
import { HeroSectionRight } from "./components/HeroSectionRight";
import "./styles/font-size-class_link.css";
import "./styles/general.css";
function App() {
  return (
    <>
      <Header />
      <div className="container-fluid row px-2 px-sm-0 mx-0">
        <div className="container-fluid col-sm-7 col-12">
          <HeroSectionLeft />
        </div>
        <div className="container-fluid col pt-sm-5 pt-4 px-4 px-sm-3 pb-sm-0 pb-3">
          <HeroSectionRight />
        </div>
      </div>
      <div className="container-fluid fs-20 fs-md-32 col-10 mt-3 px-3 d-flex d-xl-none justify-content-center montserrat">
        Harness advanced tools and strategies to amplify your brand's presence, captivate your audience, and rise above the noise in a crowded digital landscape.
      </div>

    </>
  );
}

export default App;
