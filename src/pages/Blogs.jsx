import useFadeIn from "../hooks/useFadeIn";

function Blogs() {
  const heroFade = useFadeIn();
  const articlesFade = useFadeIn();
  const ctaFade = useFadeIn();

  const articles = [
    {
      category: "GUT & ROUTINE",
      title: "Your gut follows a daily rhythm too.",
      description:
        "Sleep, meals and changing routines can all influence how your digestive system feels throughout the day.",
      image: "/images/Morning.png",
      slug: "gut-daily-rhythm",
    },
    {
      category: "FOOD & FIBRE",
      title: "Simple ways to add more fibre to your day.",
      description:
        "Small changes to everyday meals can make fibre easier to build into your routine.",
      image: "/images/breakfast 1.png",
      slug: "adding-more-fibre",
    },
    {
      category: "TRAVEL",
      title: "Why travel can throw your routine off.",
      description:
        "Different meals, sleep schedules, movement and time zones can make travelling feel different for your gut too.",
      image: "/images/airport.png",
      slug: "travel-and-routine",
    },
  ];

  return (
    <main className="blogs-page">

      {/* =====================================================
          01 — HERO
      ====================================================== */}
      <section
        ref={heroFade.ref}
        className={`blogs-hero fade-section ${
          heroFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="blogs-hero-copy">
          <p className="eyebrow">THE DAILYGO JOURNAL</p>

          <h1>
            Better routines start
            <br />
            with understanding.
          </h1>

          <p className="blogs-hero-description">
            Simple, practical reads about gut wellness, everyday habits
            and the routines that shape how we feel.
          </p>
        </div>
      </section>


      {/* =====================================================
          02 — ARTICLES
      ====================================================== */}
      <section
        ref={articlesFade.ref}
        className={`blogs-content fade-section ${
          articlesFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="blogs-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <div className="blog-card-image">
                <img
                  src={article.image}
                  alt={article.title}
                />
              </div>

              <div className="blog-card-content">
                <p className="eyebrow">
                  {article.category}
                </p>

                <h2>{article.title}</h2>

                <p>{article.description}</p>

                <a
                  href={`/blogs/${article.slug}`}
                  className="text-link"
                >
                  Read article <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* =====================================================
          03 — CTA
      ====================================================== */}
      <section
        ref={ctaFade.ref}
        className={`blogs-cta fade-section ${
          ctaFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="blogs-cta-inner">
          <p className="eyebrow">FOLLOW THE JOURNEY</p>

          <h2>
            DailyGo is still
            <br />
            taking shape.
          </h2>

          <p>
            Join our early-access list for product development,
            testing and future launch updates.
          </p>

          <a href="/waitlist" className="primary-btn">
            Join Early Access
          </a>
        </div>
      </section>

    </main>
  );
}

export default Blogs;