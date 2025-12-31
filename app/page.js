import About from "./components/About";
import ComIntro from "./components/ComIntro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Qualifications from "./components/Qualifications";
import Project from "./components/Project";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="container">
        <section id="about" className="mt-8">
          <About />
        </section>
        <section className="mt-8">
           <ComIntro />
        </section>
        <section className="mt-8">
           <Project />
        </section>
        <section id='qualifications' className="mt-8">
          <Qualifications />
        </section>
      </main>
      <Footer />
    </div>
  );
}
