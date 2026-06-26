import { useState } from "react";

const blogPosts = [
  {
    title: "A Gentle Morning Drink for Daily Gut Comfort",
    category: "Daily Gut Comfort",
    date: "May 2026",
    image: "/images/morning_routine_with_dailygo_gut_reset.png",
    slug: "morning-ritual",
    excerpt:
      "How a simple jasmine-flavoured drink can support a calmer, more comfortable start to the day.",
  },
  {
    title: "Why Gut Comfort Matters More for Adults 50+",
    category: "50+ Wellness",
    date: "May 2026",
    image: "/images/50_plus_wellness.png",
    slug: "modern-routines",
    excerpt:
      "As routines, hydration, movement, and meal timing change, small daily habits can help support everyday comfort.",
  },
  {
    title: "How Travel and Long Days Can Affect Your Body Rhythm",
    category: "Routine Changes",
    date: "May 2026",
    image: "/images/Travel 1.png",
    slug: "travel-rhythm",
    excerpt:
      "Travel, appointments, errands, and long days outside the home can affect hydration, meals, movement, and gut rhythm.",
  },
  {
    title: "Why Familiar Taste Makes Wellness Easier to Keep",
    category: "Jasmine Rituals",
    date: "May 2026",
    image: "/images/satchet next to desktop.png",
    slug: "wellness-habits",
    excerpt:
      "A light jasmine flavour inspired by Asian tea rituals can make gut wellness feel more familiar and less clinical.",
  },
  {
    title: "How to Build a Gut Wellness Habit Without Changing Your Life",
    category: "Simple Routines",
    date: "May 2026",
    image: "/images/coffee 1.png",
    slug: "gut-wellness-ritual",
    excerpt:
      "Gut wellness does not need to feel complicated. It can begin with one small drink ritual that fits into your day.",
  },
  {
    title: "The Role of Tea Rituals in Everyday Asian Wellness",
    category: "Asian Daily Habits",
    date: "May 2026",
    image: "/images/breakfast 1.png",
    slug: "small-daily-rituals",
    excerpt:
      "DailyGo builds on the familiarity of Asian tea culture with a gentle jasmine flavour designed for everyday use.",
  },
];

const tabs = [
  "All",
  "Daily Gut Comfort",
  "50+ Wellness",
  "Routine Changes",
  "Jasmine Rituals",
  "Simple Routines",
  "Asian Daily Habits",
];

function Blogs() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPosts =
    activeTab === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeTab);

  const handleTopicClick = (tab) => {
    setActiveTab(tab);

    setTimeout(() => {
      const blogResults = document.getElementById("blog-results");

      if (blogResults) {
        blogResults.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  const handleBlogClick = (post) => {
    window.location.hash = `#/blogs/${post.slug}`;
  };

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <p className="eyebrow">DailyGo Journal</p>

        <h1>Simple gut wellness guides for everyday comfort.</h1>

        <p>
          Thoughtful reads on digestive comfort, gentle routines, jasmine taste,
          and everyday wellness habits designed for adults aged 50 and above.
        </p>
      </section>

      <section className="blog-content-layout" id="blog-results">
        <section className="blog-grid">
          {filteredPosts.map((post, index) => (
            <button
              type="button"
              className="blog-card"
              key={`${post.slug}-${activeTab}`}
              onClick={() => handleBlogClick(post)}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="blog-image-wrap">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h2>{post.title}</h2>

                <p>{post.excerpt}</p>

                <span className="read-more">Read more →</span>
              </div>
            </button>
          ))}
        </section>

        <aside className="blog-sidebar-tabs">
          <p className="blog-sidebar-label">Journal topics</p>

          <div className="blog-tabs">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                className={`blog-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTopicClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Blogs;