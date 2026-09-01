const levels = [
  ['প্রাথমিক', 'চতুর্থ ও পঞ্চম শ্রেণি'],
  ['মাধ্যমিক', 'ষষ্ঠ থেকে দশম শ্রেণি'],
  ['উচ্চ মাধ্যমিক', 'একাদশ ও দ্বাদশ শ্রেণি'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="প্রধান নেভিগেশন">
        <a className="brand" href="#top" aria-label="বলাকা হোম">বলাকা<span>।</span></a>
        <a className="nav-link" href="#about">আমাদের সম্পর্কে</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">শিক্ষার সঙ্গী, প্রতিদিন</p>
          <h1>পড়াশোনা হোক<br /><em>আরও সহজ।</em></h1>
          <p className="lead">বাংলাদেশের চতুর্থ থেকে দ্বাদশ শ্রেণির শিক্ষার্থীদের জন্য পাঠ্যক্রমভিত্তিক শিক্ষাসামগ্রী এক জায়গায় আনার একটি উদ্যোগ।</p>
          <div className="hero-actions">
            <a className="button" href="#levels">শ্রেণি নির্বাচন করুন <span aria-hidden="true">→</span></a>
            <a
              className="button secondary"
              href="https://play.google.com/store/apps/details?id=com.bendroidapps.bolakaapp"
              target="_blank"
              rel="noreferrer"
              aria-label="গুগল প্লে স্টোর থেকে বলাকা অ্যাপ ডাউনলোড করুন"
            >
              <span className="play-icon" aria-hidden="true">▶</span>
              গুগল প্লে থেকে অ্যাপ নিন
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun" />
          <div className="book book-back" />
          <div className="book book-front"><span>বলাকা</span><i /></div>
          <div className="leaf leaf-one" /><div className="leaf leaf-two" />
        </div>
      </section>

      <section className="levels" id="levels" aria-labelledby="levels-title">
        <div className="section-intro">
          <p className="eyebrow">শুরু করুন আপনার শ্রেণি থেকে</p>
          <h2 id="levels-title">তোমার শিক্ষার পথ</h2>
        </div>
        <div className="cards">
          {levels.map(([title, range], index) => (
            <article className="card" key={title}>
              <span className="card-no">০{index + 1}</span>
              <h3>{title}</h3>
              <p>{range}</p>
              <span className="coming">শিগগিরই আসছে</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">বলাকা সম্পর্কে</p>
        <h2>জ্ঞানকে কাছে আনার<br />একটি ছোট্ট উড়ান।</h2>
        <p>বলাকা এমন একটি শিক্ষাভিত্তিক প্ল্যাটফর্ম, যেখানে পাঠ্যক্রমের সহায়ক উপকরণ সহজে খুঁজে পাওয়া যাবে। আমরা ধাপে ধাপে আরও বিষয় ও উপকরণ যুক্ত করছি।</p>
      </section>

      <footer><a className="brand" href="#top">বলাকা<span>।</span></a><p>শিক্ষার সহজ পথ</p></footer>
    </main>
  );
}
