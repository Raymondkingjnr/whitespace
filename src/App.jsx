import "./App.css";
import {
  Plans,
  Footer,
  Apps,
  Customise,
  Header,
  Extention,
  Projects,
  Remote,
  Sponsors,
  Testimonies,
  WorkTogether,
  UseData,
} from "./containers/index";

function App() {
  return (
    <>
      <Header />
      <Projects />
      <WorkTogether />
      <Extention />
      <Customise />
      <Plans />
      <Remote />
      <UseData />
      <Sponsors />
      <Apps />
      <Testimonies />
      <Footer />
    </>
  );
}

export default App;
