import { useState } from "react";

function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxgafC6VdrAH5eknI1P0uliHAjy9v6uXCONszOjI_42Ou7h8cxG4_iTCE1WZ4Td-HAG/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("Submitting...");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name,
          email,
        }),
      });

      setMessage("You’ve successfully joined the DailyGo waitlist.");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page waitlist-page">
      <h1>Contact Us / Join the Waitlist</h1>

      <p>Be the first to try DailyGo when our testing batch is ready.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </main>
  );
}

export default Waitlist;