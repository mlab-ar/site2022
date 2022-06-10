import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
// import Faq from './components/sections/Faq';
import ScrollToTop from "./components/ScrollToTop";
import Clients from "./components/sections/Clients";



function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Navigation />
        <Home />
        <Clients />
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
