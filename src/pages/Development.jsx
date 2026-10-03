import useFadeIn from "../hooks/useFadeIn";

function Development() {
  const heroFade = useFadeIn();
  const currentFade = useFadeIn();
  const fircFade = useFadeIn();
  const productFade = useFadeIn();
  const nextFade = useFadeIn();
  const ctaFade = useFadeIn();

  return (
    <main className="development-page">

      {/* =====================================================
          01 — HERO
      ====================================================== */}
      <section
        ref={heroFade.ref}
        className={`development-hero fade-section ${
          heroFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="development-hero-copy">
          <p className="eyebrow">OUR DEVELOPMENT</p>

          <h1>
            Building DailyGo,
            <br />
            thoughtfully.
          </h1>

          <p className="development-hero-description">
            DailyGo® is still in development. We’re refining the
            formulation, flavour, product format and consumer experience
            before bringing it to market.
          </p>
        </div>

        <div className="development-hero-image">
          <img
            src="/images/product.jpg"
            alt="DailyGo product concept"
          />
        </div>
      </section>


      {/* =====================================================
          02 — WHERE WE ARE NOW
      ====================================================== */}
      <section
        ref={currentFade.ref}
        className={`development-current fade-section ${
          currentFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="development-current-heading">
          <p className="eyebrow">WHERE WE ARE NOW</p>

          <h2>
            From early idea
            <br />
            to real product.
          </h2>
        </div>

        <div className="development-current-copy">
          <p>
            DailyGo began with a simple question: how can daily gut wellness
            feel easier to fit into real life?
          </p>

          <p>
            We’re now turning that idea into a product by testing how the
            formulation, flavour and format work together in practice.
          </p>

          <div className="development-current-status">
            <div>
              <span>01</span>
              <strong>Research</strong>
              <p>In progress</p>
            </div>

            <div>
              <span>02</span>
              <strong>Formulation</strong>
              <p>In development</p>
            </div>

            <div>
              <span>03</span>
              <strong>Testing</strong>
              <p>Next</p>
            </div>

            <div>
              <span>04</span>
              <strong>Pilot</strong>
              <p>Upcoming</p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          03 — FIRC / FORMULATION
      ====================================================== */}
      <section
        ref={fircFade.ref}
        className={`development-firc fade-section ${
          fircFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="development-firc-copy">
          <p className="eyebrow">DEVELOPED WITH SP FIRC</p>

          <h2>
            Getting the product
            <br />
            fundamentals right.
          </h2>

          <p>
            DailyGo is currently being developed with Singapore
            Polytechnic’s Food Innovation & Resource Centre (FIRC).
          </p>

          <p>
            The formulation process is helping us work through the practical
            details of creating a daily wellness drink — from ingredient
            compatibility and sensory experience to how the final product
            may be prepared and used.
          </p>
        </div>

        <div className="development-firc-card">
          <span>Current focus</span>
          <strong>Formulation + sensory development</strong>

          <p>
            Refining how DailyGo tastes, feels and fits into everyday use.
          </p>
        </div>
      </section>


      {/* =====================================================
          04 — FLAVOUR + FORMAT
      ====================================================== */}
      <section
        ref={productFade.ref}
        className={`development-product fade-section ${
          productFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="development-product-image">
          <img
            src="/images/on the go 1.png"
            alt="Portable DailyGo product concept"
          />
        </div>

        <div className="development-product-copy">
          <p className="eyebrow">WHAT WE'RE EXPLORING</p>

          <h2>
            Taste and format
            <br />
            matter too.
          </h2>

          <div className="development-product-detail">
            <span>Flavour</span>

            <strong>Peach Oolong</strong>

            <p>
              Peach oolong is currently one of the leading flavour directions
              being evaluated, but the final flavour is not yet confirmed.
            </p>
          </div>

          <div className="development-product-detail">
            <span>Format</span>

            <strong>Portable by design</strong>

            <p>
              We’re exploring a bottle format that could make DailyGo easier
              to carry and use throughout the day.
            </p>
          </div>

          <p className="development-note">
            Final packaging, bottle design and product format are still
            under development.
          </p>
        </div>
      </section>


      {/* =====================================================
          05 — WHAT COMES NEXT
      ====================================================== */}
      <section
        ref={nextFade.ref}
        className={`development-next fade-section ${
          nextFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="development-next-heading">
          <p className="eyebrow">WHAT COMES NEXT</p>

          <h2>
            The next step is
            <br />
            real-world testing.
          </h2>
        </div>

        <div className="development-next-copy">
          <p>
            Once the formulation is ready, we plan to gather structured
            feedback from potential users.
          </p>

          <p>
            We’ll be looking at areas such as taste, ease of use,
            routine fit and whether people would want to continue using
            DailyGo over time.
          </p>

          <div className="development-next-points">
            <div>
              <span>01</span>
              <p>Taste</p>
            </div>

            <div>
              <span>02</span>
              <p>Ease of use</p>
            </div>

            <div>
              <span>03</span>
              <p>Routine fit</p>
            </div>

            <div>
              <span>04</span>
              <p>Willingness to continue</p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          06 — CTA
      ====================================================== */}
      <section
        ref={ctaFade.ref}
        className={`development-cta fade-section ${
          ctaFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="development-cta-inner">
          <p className="eyebrow">BE PART OF THE NEXT STEP</p>

          <h2>
            Want to try DailyGo
            <br />
            when it's ready?
          </h2>

          <p>
            Join our early-access list to hear about future product testing,
            pilot opportunities and launch updates.
          </p>

          <a href="/waitlist" className="primary-btn">
            Join Early Access
          </a>
        </div>
      </section>

    </main>
  );
}

export default Development;