import { useFadeIn } from "../hooks/useFadeIn";

function Home() {
  useFadeIn();

  return (
    <main>
      <section className="hero fade-in">
        <div className="hero-overlay">
          <h1>Gentle gut wellness, made for daily life.</h1>

          <p>
            A 10-second jasmine-flavoured drink ritual designed to support
            digestive comfort, hydration habits, and everyday regularity.
          </p>

          <div className="hero-actions">
            <a href="#waitlist" className="hero-button">
              Register Interest
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