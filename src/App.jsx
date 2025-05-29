import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer */}
      <div className="fixed top-0 -z-10 w-full min-h-screen">
        <div className="absolute top-0 z-[-2] w-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Page Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contacts/>
      </div>
    </div>
  );
};

export default App;
