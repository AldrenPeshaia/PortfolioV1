import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Feature />
          <Projects />
          <Resume />
        </div>
      </div>
    </main>
  );
}

export default App;
