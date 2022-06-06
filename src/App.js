import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
// import Faq from './components/sections/Faq';
import ScrollToTop from "./components/ScrollToTop";
import NFTZone from "./components/sections/NFTZone";



function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <NFTZone />
        <Roadmap />
        <Team />
        <Showcase />
        {/* <Faq /> */}
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
