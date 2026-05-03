import "./App.css";

function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <section style={{ textAlign: "center", padding: "80px 0" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Your daily gut reset.
        </h1>
        <p style={{ fontSize: "20px", color: "#555", marginBottom: "32px" }}>
          DailyGo is a functional daily drink sachet designed to support gentle bowel regularity and long-term gut health.
        </p>
        <a
          href="#waitlist"
          style={{
            background: "#222",
            color: "white",
            padding: "14px 24px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Join the Waitlist
        </a>
      </section>

      <section style={{ padding: "50px 0" }}>
        <h2>The gut problem nobody talks about</h2>
        <p>
          Long desk hours, travel, stress, and inconsistent routines can disrupt digestion.
          DailyGo is designed for busy adults who want a simple daily reset.
        </p>
      </section>

      <section style={{ padding: "50px 0" }}>
        <h2>A 10-second daily gut routine</h2>
        <p>
          Tear open a sachet, mix with water, and drink. Simple enough for your desk,
          your bag, or your next flight.
        </p>
      </section>

      <section style={{ padding: "50px 0" }}>
        <h2>Why DailyGo?</h2>
        <ul>
          <li>Portable powder sachet format</li>
          <li>Probiotics + functional fibre</li>
          <li>Low or no added sugar</li>
          <li>Designed for daily use, not harsh short-term effects</li>
        </ul>
      </section>

      <section id="waitlist" style={{ padding: "50px 0", textAlign: "center" }}>
        <h2>Be the first to try DailyGo</h2>
        <p>We’re preparing our first testing batch. Join the waitlist below.</p>

        <form>
          <input placeholder="Your name" style={{ padding: "12px", margin: "8px", width: "250px" }} />
          <input placeholder="Your email" style={{ padding: "12px", margin: "8px", width: "250px" }} />
          <br />
          <button type="submit" style={{ padding: "14px 24px", marginTop: "16px", borderRadius: "999px" }}>
            Join Waitlist
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
