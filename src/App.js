import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Header, Hero, Work, Contact } from "./components";

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );

    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <main ref={ref}>
        <Header />

        <Hero />

        <Work />

        <Contact />
      </main>
    </div>
  );
}

export default App;
