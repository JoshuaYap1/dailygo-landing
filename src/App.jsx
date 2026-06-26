import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Why from "./pages/Why";
import Routine from "./pages/Routine";
import Blogs from "./pages/Blogs";
import Waitlist from "./pages/Waitlist";
import BlogArticle from "./pages/BlogArticle";

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const isArticlePage = currentHash.startsWith("#/blogs/");

    if (isArticlePage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const sectionId = currentHash.replace("#", "");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 80);
  }, [currentHash]);

  const handleNavClick = (event, hash) => {
    event.preventDefault();

    if (window.location.hash === hash) {
      setCurrentHash(hash);

      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    window.location.hash = hash;
  };

  const isBlogArticle = currentHash.startsWith("#/blogs/");

  return (
    <>
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={(event) => handleNavClick(event, "#home")}
        >
          DailyGo
        </a>

        <nav>
          <a href="#why" onClick={(event) => handleNavClick(event, "#why")}>
            Why DailyGo
          </a>

          <a
            href="#routine"
            onClick={(event) => handleNavClick(event, "#routine")}
          >
            Routine
          </a>

          <a href="#blogs" onClick={(event) => handleNavClick(event, "#blogs")}>
            Blogs
          </a>

          <a
            href="#waitlist"
            onClick={(event) => handleNavClick(event, "#waitlist")}
          >
            Contact Us / Waitlist
          </a>
        </nav>
      </header>

      {isBlogArticle ? (
        <BlogArticle />
      ) : (
        <main>
          <section id="home">
            <Home />
          </section>

          <section id="why">
            <Why />
          </section>

          <section id="routine">
            <Routine />
          </section>

          <section id="blogs">
            <Blogs />
          </section>

          <section id="waitlist">
            <Waitlist />
          </section>
        </main>
      )}
    </>
  );
}

export default App;