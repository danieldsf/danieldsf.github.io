import Main from './layouts/main/index';
import Resume from './partials/resume';
import Skills from './partials/skills';
import About from './partials/about';
import Portfolio from './partials/portfolio';
import Services from './partials/services';
import Contact from './partials/contact';

{/* <Facts /> */}
{/* <Testimonials /> */}
function App() {
  return (
    <Main>
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </Main>
  )
}

export default App;
