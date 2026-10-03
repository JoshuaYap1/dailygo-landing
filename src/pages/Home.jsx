import useFadeIn from "../hooks/useFadeIn";

function Home() {
  const heroFade = useFadeIn();
  const problemFade = useFadeIn();
  const whyFade = useFadeIn();
  const productFade = useFadeIn();
  const developmentFade = useFadeIn();

  return (
    <main className="home-page">

      {/* =====================================================
          01 — HERO
      ====================================================== */}
      <section
        ref={heroFade.ref}
        className={`home-hero fade-section ${
          heroFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="home-hero-copy">
          <p className="eyebrow">DAILY GUT WELLNESS</p>

          <h1>
            Gut wellness,
            <br />
            made for real life.
          </h1>

          <p className="home-hero-description">
            DailyGo® is being developed as a simple daily gut-wellness
            drink designed around busy schedules, changing routines
            and life on the go.
          </p>

          <p className="home-hero-development">
            Currently in development with Singapore Polytechnic’s
            Food Innovation & Resource Centre (FIRC).
          </p>

          <div className="home-hero-actions">
            <a href="/waitlist" className="primary-btn">
              Join Early Access
            </a>

            <a href="/why" className="text-link">
              Why DailyGo <span>→</span>
            </a>
          </div>
        </div>

        <div className="home-hero-image">
          <img
            src="/images/on the go 1.png"
            alt="DailyGo wellness on the go"
          />

          <div className="hero-floating-note">
            <span>Made for</span>
            <strong>real routines.</strong>
          </div>
        </div>
      </section>


      {/* =====================================================
          02 — THE PROBLEM
      ====================================================== */}
      <section
        ref={problemFade.ref}
        className={`home-problem fade-section ${
          problemFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="home-problem-heading">
          <p className="eyebrow">WHEN ROUTINES CHANGE</p>

          <h2>
            Your gut can notice
            <br />
            it too.
          </h2>
        </div>

        <div className="home-problem-copy">
          <p>
            Work, travel, irregular meals, stress, changing sleep
            and long periods of sitting can all make familiar routines
            harder to maintain.
          </p>

          <p>
            DailyGo is being developed around a simple idea:
            make everyday gut wellness easier to fit into the life
            you already live.
          </p>
        </div>
      </section>


      {/* =====================================================
          03 — WHY DAILYGO
      ====================================================== */}
      <section
        ref={whyFade.ref}
        className={`home-why fade-section ${
          whyFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="home-why-heading">
          <p className="eyebrow">THE DAILYGO APPROACH</p>

          <h2>
            Easy to understand.
            <br />
            Easier to keep.
          </h2>
        </div>

        <div className="home-why-grid">

          <article className="home-why-card">
            <span>01</span>

            <h3>Simple</h3>

            <p>
              Designed to fit naturally into everyday routines
              without becoming another complicated wellness task.
            </p>
          </article>

          <article className="home-why-card">
            <span>02</span>

            <h3>Enjoyable</h3>

            <p>
              Taste and drinking experience are being treated
              as an important part of building a habit.
            </p>
          </article>

          <article className="home-why-card">
            <span>03</span>

            <h3>Portable</h3>

            <p>
              Developed around the reality that your routine
              does not always happen in the same place.
            </p>
          </article>

        </div>

        <div className="home-why-link">
          <a href="/why" className="text-link">
            Learn why we're building DailyGo <span>→</span>
          </a>
        </div>
      </section>


      {/* =====================================================
          04 — PRODUCT DIRECTION
      ====================================================== */}
      <section
        ref={productFade.ref}
        className={`home-product-direction fade-section ${
          productFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="home-product-direction-image">
          <img
            src="/images/product.jpg"
            alt="DailyGo product concept"
          />
        </div>

        <div className="home-product-direction-copy">
          <p className="eyebrow">WHAT WE'RE BUILDING</p>

          <h2>
            A daily drink you'll
            <br />
            actually want to drink.
          </h2>

          <p>
            We're exploring a light, refreshing, tea-inspired flavour
            profile designed to feel more like an everyday drink than
            another supplement.
          </p>

          <div className="product-direction-detail">
            <span>Flavour direction</span>

            <strong>Peach Oolong</strong>

            <p>
              Currently one of the leading flavour profiles being
              evaluated. The final flavour has not yet been confirmed.
            </p>
          </div>

          <div className="product-direction-detail">
            <span>Product format</span>

            <strong>Made to move</strong>

            <p>
              We're also exploring a portable bottle format designed
              around convenience and everyday use.
            </p>
          </div>

          <a href="/development" className="secondary-btn">
            See Our Development
          </a>
        </div>
      </section>


      {/* =====================================================
          05 — DEVELOPMENT + EARLY ACCESS
      ====================================================== */}
      <section
        ref={developmentFade.ref}
        className={`home-development-compact fade-section ${
          developmentFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="home-development-compact-copy">
          <p className="eyebrow">CURRENTLY IN DEVELOPMENT</p>

          <h2>
            We're still building
            <br />
            DailyGo.
          </h2>

          <p>
            DailyGo is currently being developed with Singapore
            Polytechnic's Food Innovation & Resource Centre (FIRC).
          </p>

          <p>
            We're working through formulation, flavour, product format
            and consumer validation before bringing the product to market.
          </p>
        </div>

        <div className="home-development-compact-right">

          <div className="home-roadmap">
            <div>
              <span>01</span>
              <p>Research</p>
            </div>

            <div>
              <span>02</span>
              <p>Formulation</p>
            </div>

            <div>
              <span>03</span>
              <p>Testing</p>
            </div>

            <div>
              <span>04</span>
              <p>Pilot</p>
            </div>
          </div>

          <div className="home-final-cta">
            <h3>Want to be part of what comes next?</h3>

            <p>
              Join our early-access list for future testing,
              pilot opportunities and launch updates.
            </p>

            <a href="/waitlist" className="primary-btn">
              Join Early Access
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;