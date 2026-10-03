import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Home";
import Why from "./pages/Why";
import Routine from "./pages/Routine";
import Development from "./pages/Development";
import Blogs from "./pages/Blogs";
import BlogArticle from "./pages/BlogArticle";
import Waitlist from "./pages/Waitlist";

import "./App.css";


/* =========================================================
   SCROLL TO TOP ON EVERY PAGE CHANGE
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}


/* =========================================================
   404 PAGE
========================================================= */

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-inner">
        <p className="eyebrow">404</p>

        <h1>
          This page
          <br />
          doesn't exist.
        </h1>

        <p>
          The page may have moved, or the link may be incorrect.
        </p>

        <Link to="/" className="primary-btn">
          Back to DailyGo
        </Link>
      </section>
    </main>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      {/* Automatically return to top when route changes */}
      <ScrollToTop />


      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <header className="site-header">

        <Link
          to="/"
          className="site-logo"
        >
          DailyGo
        </Link>

        <nav className="site-nav">

          <Link to="/why">
            Why DailyGo
          </Link>

          <Link to="/routine">
            Routine
          </Link>

          <Link to="/development">
            Development
          </Link>

          <Link to="/blogs">
            Journal
          </Link>

          <Link
            to="/waitlist"
            className="nav-cta"
          >
            Early Access
          </Link>

        </nav>

      </header>


      {/* =====================================================
          ROUTES
      ====================================================== */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/why"
          element={<Why />}
        />

        <Route
          path="/routine"
          element={<Routine />}
        />

        <Route
          path="/development"
          element={<Development />}
        />

        <Route
          path="/blogs"
          element={<Blogs />}
        />

        <Route
          path="/blogs/:slug"
          element={<BlogArticle />}
        />

        <Route
          path="/waitlist"
          element={<Waitlist />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;