function Routine() {
  return (
    <main className="routine-page">
      <section className="routine-hero">
        <p className="eyebrow">DailyGo routines</p>
        <h1>A gentle jasmine ritual for everyday gut comfort.</h1>

        <p>
          DailyGo is designed to fit into familiar daily moments — from the
          first drink of the morning, to a quiet afternoon pause, to days when
          routines are disrupted by travel or appointments.
        </p>
      </section>

      <section className="routine-tabs">
        <a href="#morning">Morning drink</a>
        <a href="#afternoon">Afternoon pause</a>
        <a href="#travel">When routines change</a>
      </section>

      <section className="routine-grid">
        <article id="morning" className="routine-card">
          <img src="/images/Morning.png" alt="Morning DailyGo routine" />

          <div className="routine-overlay overlay-left">
            <h2>Morning drink</h2>

            <p>
              Start the day with a light jasmine-flavoured drink that feels
              familiar, gentle, and easy to prepare. DailyGo turns gut wellness
              into a simple morning ritual that can be taken before breakfast,
              after waking up, or as part of your usual first drink of the day.
            </p>

            <p>
              For adults who experience bloating, heaviness, or irregular
              routines, a small daily habit can make wellness feel more
              manageable. No complicated steps, no major lifestyle change — just
              tear, mix, and drink.
            </p>
          </div>
        </article>

        <article id="afternoon" className="routine-card">
          <img
            src="/images/satchet next to desktop.png"
            alt="DailyGo sachet beside a desktop"
          />

          <div className="routine-overlay">
            <h2>Afternoon pause</h2>

            <p>
              Daily routines can become busy, especially with long sitting
              hours, irregular meals, errands, caregiving, or work. DailyGo is
              designed to become a small pause in the day — a light drink that
              supports hydration, digestive comfort, and consistency.
            </p>

            <p>
              Its jasmine flavour is inspired by familiar Asian tea rituals, so
              it feels less like taking a supplement and more like enjoying a
              gentle daily drink. This makes the habit easier to repeat and
              easier to keep.
            </p>
          </div>
        </article>

        <article id="travel" className="routine-card">
          <img src="/images/airport.png" alt="DailyGo travel routine" />

          <div className="routine-overlay overlay-left">
            <h2>When routines change</h2>

            <p>
              Travel, medical appointments, family visits, and long days outside
              the home can disrupt meal timing, hydration, movement, and bowel
              habits. DailyGo is made in a portable sachet format so it can be
              kept in a bag and used whenever daily rhythm becomes harder to
              maintain.
            </p>

            <p>
              Whether at home or on the go, DailyGo helps make gut wellness feel
              simple, familiar, and accessible — supporting everyday comfort
              through a routine that takes just 10 seconds.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Routine;