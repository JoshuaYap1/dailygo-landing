import { useParams } from "react-router-dom";
import useFadeIn from "../hooks/useFadeIn";

function BlogArticle() {
  const { slug } = useParams();

  const heroFade = useFadeIn();
  const articleFade = useFadeIn();
  const relatedFade = useFadeIn();
  const ctaFade = useFadeIn();

  const articles = {
    "gut-daily-rhythm": {
      category: "GUT & ROUTINE",
      title: "Your gut follows a daily rhythm too.",
      intro:
        "Your digestive system does not work exactly the same way throughout the day. Sleep, meals, movement and changes to your usual schedule can all influence how your gut feels.",
      image: "/images/Morning.png",
      sections: [
        {
          heading: "Your body runs on rhythms",
          body: [
            "Many processes in the body follow a roughly 24-hour rhythm, often referred to as the circadian rhythm.",
            "Digestive activity is part of that broader system, which is one reason meal timing, sleep and daily habits can influence how your gut feels from one part of the day to another.",
          ],
        },
        {
          heading: "Routine can matter",
          body: [
            "When your usual schedule changes, your eating, movement, sleep and hydration patterns often change with it.",
            "That can help explain why some people notice digestive changes during periods of travel, late nights or especially busy weeks.",
          ],
        },
        {
          heading: "Keep it practical",
          body: [
            "You do not need a perfect routine. Small amounts of consistency around sleep, meals, movement and hydration can make everyday wellness habits easier to maintain.",
          ],
        },
      ],
    },

    "adding-more-fibre": {
      category: "FOOD & FIBRE",
      title: "Simple ways to add more fibre to your day.",
      intro:
        "Fibre is found in everyday foods like fruits, vegetables, whole grains, beans, nuts and seeds. Building more of these foods into your routine can be simpler than it sounds.",
      image: "/images/breakfast 1.png",
      sections: [
        {
          heading: "Start with foods you already eat",
          body: [
            "You do not necessarily need to redesign your entire diet.",
            "Try adding fruit to breakfast, choosing a whole-grain option, adding vegetables to a familiar meal, or including beans and lentils where they fit naturally.",
          ],
        },
        {
          heading: "Increase gradually",
          body: [
            "A sudden increase in fibre may feel uncomfortable for some people.",
            "Building intake up gradually gives your routine time to adjust.",
          ],
        },
        {
          heading: "Remember fluids too",
          body: [
            "Fibre and hydration work together as part of everyday digestive health, so it is useful to think about both rather than focusing on fibre alone.",
          ],
        },
      ],
    },

    "travel-and-routine": {
      category: "TRAVEL",
      title: "Why travel can throw your routine off.",
      intro:
        "Travel can change almost every part of your normal day at once — meals, sleep, movement, hydration and even when you use the bathroom.",
      image: "/images/airport.png",
      sections: [
        {
          heading: "Your schedule changes quickly",
          body: [
            "Flights, long journeys and unfamiliar schedules can shift when you eat, sleep and move.",
            "Even relatively small changes can make your usual routine feel noticeably different.",
          ],
        },
        {
          heading: "Movement and hydration may change too",
          body: [
            "Long periods of sitting and forgetting to drink regularly are common when travelling.",
            "Keeping water accessible and finding small opportunities to move can help you maintain familiar habits.",
          ],
        },
        {
          heading: "Bring some routine with you",
          body: [
            "You may not be able to recreate your normal day while travelling, but keeping a few familiar habits can make the transition easier.",
            "That idea — creating a routine that can move with you — is one of the principles influencing DailyGo's development.",
          ],
        },
      ],
    },
  };

  const article = articles[slug];

  if (!article) {
    return (
      <main className="article-page">
        <section className="article-not-found">
          <p className="eyebrow">DAILYGO JOURNAL</p>

          <h1>Article not found.</h1>

          <p>
            The article you're looking for may have moved or isn't
            available yet.
          </p>

          <a href="/blogs" className="secondary-btn">
            Back to Journal
          </a>
        </section>
      </main>
    );
  }

  const relatedArticles = Object.entries(articles)
    .filter(([articleSlug]) => articleSlug !== slug)
    .slice(0, 2);

  return (
    <main className="article-page">

      {/* =====================================================
          01 — ARTICLE HERO
      ====================================================== */}
      <section
        ref={heroFade.ref}
        className={`article-hero fade-section ${
          heroFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="article-hero-copy">
          <a href="/blogs" className="article-back-link">
            ← Journal
          </a>

          <p className="eyebrow">{article.category}</p>

          <h1>{article.title}</h1>

          <p className="article-intro">
            {article.intro}
          </p>
        </div>

        <div className="article-hero-image">
          <img
            src={article.image}
            alt={article.title}
          />
        </div>
      </section>


      {/* =====================================================
          02 — ARTICLE
      ====================================================== */}
      <section
        ref={articleFade.ref}
        className={`article-content fade-section ${
          articleFade.isVisible ? "is-visible" : ""
        }`}
      >
        <article className="article-body">
          {article.sections.map((section) => (
            <div
              className="article-section"
              key={section.heading}
            >
              <h2>{section.heading}</h2>

              {section.body.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="article-note">
            <strong>A note from DailyGo</strong>

            <p>
              Our Journal is designed for general wellness education and
              does not replace personalised medical advice. If digestive
              symptoms are persistent, severe or concerning, speak with a
              qualified healthcare professional.
            </p>
          </div>
        </article>
      </section>


      {/* =====================================================
          03 — RELATED ARTICLES
      ====================================================== */}
      <section
        ref={relatedFade.ref}
        className={`article-related fade-section ${
          relatedFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="article-related-heading">
          <p className="eyebrow">KEEP READING</p>

          <h2>From the Journal.</h2>
        </div>

        <div className="article-related-grid">
          {relatedArticles.map(([relatedSlug, related]) => (
            <a
              href={`/blogs/${relatedSlug}`}
              className="related-article-card"
              key={relatedSlug}
            >
              <div className="related-article-image">
                <img
                  src={related.image}
                  alt={related.title}
                />
              </div>

              <div className="related-article-content">
                <p className="eyebrow">
                  {related.category}
                </p>

                <h3>{related.title}</h3>

                <span className="text-link">
                  Read article <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* =====================================================
          04 — CTA
      ====================================================== */}
      <section
        ref={ctaFade.ref}
        className={`article-cta fade-section ${
          ctaFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="article-cta-inner">
          <p className="eyebrow">FOLLOW DAILYGO</p>

          <h2>
            Building better
            <br />
            everyday routines.
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

export default BlogArticle;