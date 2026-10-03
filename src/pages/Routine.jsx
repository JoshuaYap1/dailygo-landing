import useFadeIn from "../hooks/useFadeIn";

function Routine() {
  const heroFade = useFadeIn();
  const morningFade = useFadeIn();
  const workFade = useFadeIn();
  const travelFade = useFadeIn();
  const ctaFade = useFadeIn();

  return (
    <main className="routine-page">

      {/* =====================================================
          01 — HERO
      ====================================================== */}
      <section
        ref={heroFade.ref}
        className={`routine-hero fade-section ${
          heroFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="routine-hero-copy">
          <p className="eyebrow">YOUR DAILY ROUTINE</p>

          <h1>
            Small habits.
            <br />
            Easier to keep.
          </h1>

          <p className="routine-hero-description">
            DailyGo® is being developed to fit naturally into the moments
            you already have throughout the day — at home, at work
            and on the move.
          </p>
        </div>

        <div className="routine-hero-image">
          <img
            src="/images/morning_routine_with_dailygo_gut_reset.png"
            alt="Daily wellness as part of a morning routine"
          />
        </div>
      </section>


      {/* =====================================================
          02 — MORNING
      ====================================================== */}
      <section
        ref={morningFade.ref}
        className={`routine-simple-section routine-morning fade-section ${
          morningFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="routine-simple-image">
          <img
            src="/images/Morning.png"
            alt="Morning wellness routine"
          />
        </div>

        <div className="routine-simple-copy">
          <span className="routine-number">01</span>

          <p className="eyebrow">MORNING</p>

          <h2>
            Start with something
            <br />
            consistent.
          </h2>

          <p>
            Mornings can provide a natural cue for everyday habits.
            DailyGo is being designed to fit into that rhythm without
            making the start of your day more complicated.
          </p>
        </div>
      </section>


      {/* =====================================================
          03 — WORKDAY
      ====================================================== */}
      <section
        ref={workFade.ref}
        className={`routine-simple-section routine-work fade-section ${
          workFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="routine-simple-copy">
          <span className="routine-number">02</span>

          <p className="eyebrow">WORKDAY</p>

          <h2>
            Wellness that works
            <br />
            around your day.
          </h2>

          <p>
            Long working hours, irregular meals and extended periods of
            sitting can make familiar routines harder to maintain.
          </p>

          <p>
            DailyGo is being developed with convenience in mind so that
            it can fit around your schedule rather than interrupt it.
          </p>
        </div>

        <div className="routine-simple-image">
          <img
            src="/images/work 1.png"
            alt="Daily wellness during a busy workday"
          />
        </div>
      </section>


      {/* =====================================================
          04 — TRAVEL
      ====================================================== */}
      <section
        ref={travelFade.ref}
        className={`routine-simple-section routine-travel fade-section ${
          travelFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="routine-simple-image">
          <img
            src="/images/airport.png"
            alt="Daily wellness while travelling"
          />
        </div>

        <div className="routine-simple-copy">
          <span className="routine-number">03</span>

          <p className="eyebrow">TRAVEL</p>

          <h2>
            Your routine doesn't
            <br />
            have to stay home.
          </h2>

          <p>
            Travel can change meal timing, movement, hydration and sleep,
            which can make familiar routines feel less predictable.
          </p>

          <p>
            That is why portability is becoming an important part of
            the DailyGo product direction.
          </p>

          <p className="development-note">
            Portable bottle formats are currently being explored.
          </p>
        </div>
      </section>


      {/* =====================================================
          05 — CTA
      ====================================================== */}
      <section
        ref={ctaFade.ref}
        className={`routine-closing fade-section ${
          ctaFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="routine-closing-inner">
          <p className="eyebrow">WHEREVER LIFE GOES</p>

          <h2>
            One simple routine,
            <br />
            wherever the day takes you.
          </h2>

          <p>
            DailyGo is still in development. Join our early-access list
            to hear about future testing and pilot opportunities.
          </p>

          <a href="/waitlist" className="primary-btn">
            Join Early Access
          </a>
        </div>
      </section>

    </main>
  );
}

export default Routine;