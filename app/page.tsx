import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="library" className="min-h-screen bg-white">
          <h2>Library</h2>
        </section>
      </main>
    </>
  );
}
