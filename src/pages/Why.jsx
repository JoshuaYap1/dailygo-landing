import { Link } from "react-router-dom";
import useFadeIn from "../hooks/useFadeIn";

function Why() {
  const heroFade = useFadeIn();
  const problemFade = useFadeIn();
  const habitFade = useFadeIn();
  const developmentFade = useFadeIn();
  const ctaFade = useFadeIn();

  return (
    <main className="why-page">

      {/* =====================================================
          01 — HERO
      ====================================================== */}
      <section
        ref={heroFade.ref}
        className={`why-hero fade-section ${
          heroFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="why-hero-copy">
          <p className="eyebrow">WHY DAILYGO</p>

          <h1>
            Gut wellness should
            <br />
            fit into real life.
          </h1>

          <p className="why-hero-description">
            DailyGo® is being developed around the everyday routines that
            can influence how our gut feels — from work and meals to
            movement, sleep and travel.
          </p>
        </div>

        <div className="why-hero-image">
          <img
            src="/images/why hero.png"
            alt="DailyGo everyday wellness lifestyle"
          />
        </div>
      </section>


      {/* =====================================================
          02 — THE PROBLEM
      ====================================================== */}
      <section
        ref={problemFade.ref}
        className={`why-simple-section fade-section ${
          problemFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="why-simple-number">
          <span>01</span>
        </div>

        <div className="why-simple-copy">
          <p className="eyebrow">MODERN ROUTINES</p>

          <h2>
            Life doesn't always
            <br />
            run on schedule.
          </h2>

          <p>
            Long workdays, irregular meals, changing sleep, travel,
            stress and long periods of sitting can make everyday routines
            harder to maintain.
          </p>

          <p>
            That is the kind of real-life context DailyGo is being
            developed around.
          </p>
        </div>

        <div className="why-simple-image">
          <img
            src="/images/people-at-desks.jpg"
            alt="Busy working adults during the workday"
          />
        </div>
      </section>


      {/* =====================================================
          03 — HABIT + EXPERIENCE
      ====================================================== */}
      <section
        ref={habitFade.ref}
        className={`why-habit-section fade-section ${
          habitFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="why-habit-copy">
          <p className="eyebrow">BUILT FOR CONSISTENCY</p>

          <h2>
            A daily habit should
            <br />
            feel easy to keep.
          </h2>

          <p>
            We don't want DailyGo to feel like another wellness task
            you have to remember.
          </p>

          <p>
            The aim is to create something simple, enjoyable and portable
            enough to fit naturally into everyday life.
          </p>

          <div className="why-habit-points">
            <div>
              <span>01</span>
              <strong>Simple</strong>
              <p>Easy to understand and easy to repeat.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Enjoyable</strong>
              <p>Taste and experience matter when building a habit.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Portable</strong>
              <p>
                Designed around routines that don't always happen at home.
              </p>
            </div>
          </div>
        </div>

        <div className="why-habit-visual">
          <div className="why-flavour-card">
            <span>FLAVOUR DIRECTION</span>

            <h3 className="why-flavour-name">
              Peach Oolong
            </h3>

            <p>
              Currently one of the leading directions being explored.
              Final flavour is still under development.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          04 — DEVELOPMENT
      ====================================================== */}
      <section
        ref={developmentFade.ref}
        className={`why-development-compact fade-section ${
          developmentFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="why-development-copy">
          <p className="eyebrow">DEVELOPED THOUGHTFULLY</p>

          <h2>
            We're still learning
            <br />
            what DailyGo should become.
          </h2>

          <p>
            DailyGo is currently being developed with Singapore
            Polytechnic's Food Innovation & Resource Centre (FIRC).
          </p>

          <p>
            The product is still being refined across formulation,
            flavour, format and consumer experience before launch.
          </p>

          <Link to="/development" className="secondary-btn">
            See Our Development
          </Link>
        </div>

        <div className="why-development-roadmap">
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
      </section>


      {/* =====================================================
          05 — CTA
      ====================================================== */}
      <section
        ref={ctaFade.ref}
        className={`why-cta fade-section ${
          ctaFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="why-cta-inner">
          <p className="eyebrow">BE PART OF WHAT COMES NEXT</p>

          <h2>
            We're still building
            <br />
            DailyGo.
          </h2>

          <p>
            Join our early-access list to hear about future testing,
            pilot opportunities and launch updates.
          </p>

          <Link to="/waitlist" className="primary-btn">
            Join Early Access
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Why;