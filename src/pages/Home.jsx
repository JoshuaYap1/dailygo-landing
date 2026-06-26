import { useFadeIn } from "../hooks/useFadeIn";

function Home() {
  useFadeIn();

  return (
    <main>
      <section className="hero fade-in">
        <div className="hero-overlay">
          <h1>Stay regular, even when life gets busy.</h1>

          <p>
            A 10-second daily gut routine for workdays, travel, and disrupted
            schedules.
          </p>

          <div className="hero-actions">
            <a href="#waitlist" className="hero-button">
              Join the Waitlist
            </a>

            <a href="#why" className="hero-secondary">
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;