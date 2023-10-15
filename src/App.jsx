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
} from "./containers/index";

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Extention />
      <Customise />
      <Plans />
      <Remote />
      <Sponsors />
      <Apps />
      <Testimonies />
      <Footer />
    </>
  );
}

export default App;
