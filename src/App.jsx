import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-gradient-to-r from-[#949b97] to-[#000000] text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto ">
          <Banner />
          <Feature />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
