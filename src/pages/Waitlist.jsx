import { useState } from "react";
import useFadeIn from "../hooks/useFadeIn";

function Waitlist() {
  const heroFade = useFadeIn();
  const formFade = useFadeIn();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Early access submission:", formData);

    // Replace this later with Formspree, Supabase,
    // your own backend, or another form service.

    alert(
      "Thanks for joining DailyGo early access! We'll keep you updated."
    );

    setFormData({
      name: "",
      email: "",
      interest: "",
    });
  };

  return (
    <main className="waitlist-page">

      {/* =====================================================
          01 — HERO
      ====================================================== */}
      <section
        ref={heroFade.ref}
        className={`waitlist-hero fade-section ${
          heroFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="waitlist-hero-inner">
          <p className="eyebrow">EARLY ACCESS</p>

          <h1>
            Be part of what
            <br />
            comes next.
          </h1>

          <p className="waitlist-hero-description">
            DailyGo® is still in development. Join our early-access list
            for product updates, future testing opportunities and
            pilot invitations.
          </p>
        </div>
      </section>


      {/* =====================================================
          02 — FORM
      ====================================================== */}
      <section
        ref={formFade.ref}
        className={`waitlist-content fade-section ${
          formFade.isVisible ? "is-visible" : ""
        }`}
      >
        <div className="waitlist-copy">
          <p className="eyebrow">JOIN THE LIST</p>

          <h2>
            We'd love to
            <br />
            keep you posted.
          </h2>

          <p>
            Leave your details below and we'll let you know when there are
            opportunities to try DailyGo or follow the product journey.
          </p>

          <div className="waitlist-benefits">
            <div>
              <span>01</span>
              <p>Product development updates</p>
            </div>

            <div>
              <span>02</span>
              <p>Future testing opportunities</p>
            </div>

            <div>
              <span>03</span>
              <p>Pilot invitations</p>
            </div>
          </div>
        </div>


        <form
          className="waitlist-form"
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            What are you most interested in?
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select an option
              </option>

              <option value="trying-dailygo">
                Trying DailyGo
              </option>

              <option value="pilot">
                Joining a future product pilot
              </option>

              <option value="updates">
                Following the product journey
              </option>
            </select>
          </label>

          <button
            type="submit"
            className="primary-btn"
          >
            Join Early Access
          </button>

          <p className="waitlist-privacy">
            No spam. Just occasional DailyGo development and launch updates.
          </p>
        </form>
      </section>

    </main>
  );
}

export default Waitlist;