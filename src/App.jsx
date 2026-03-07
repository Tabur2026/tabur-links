import "./App.css";

export default function App() {
  const links = [
    {
      title: "استمارة طلب فرنشايز طابور",
      subtitle: "",
      icon: "/icons/franchise.png",
      size:25,
      url: "https://docs.google.com/forms/d/1F6SvLTzFnni_MemrOVdHHOKXYRxCla3Iysa09dpB99M/viewform?edit_requested=true",
    },
    {
      title: "تطبيق طابور",
      subtitle: "لعروضنا وتجهيز طلباتكم",
      icon: "/icons/app.png",
      size: 25,
      url: "https://tabur.tryorder.net/app",
    },
    {
      title: "من نحن",
      subtitle: "تعرّف على طابور",
      icon: "/icons/about.png",
      size: 50,
      url: "https://drive.google.com/file/d/12sSAwbKNY_GItSNH0O_bZUdhBHDSpQEW/view",
    },
    {
      title: "انضم إلينا",
      subtitle: "",
      icon: "/icons/join.png",
      size: 50,
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeRy2lW0DnijNKvWTZYBMgewHvV9zoWcPovAXTfeRFkZx2N4w/viewform",
    },
  ];
  const branches = [
    { id: 1, name: "فرع جدة - المروة", city: "جدة", link: "#" },
    { id: 2, name: "فرع جدة - الحمدانية", city: "جدة", link: "#" },
    { id: 3, name: "فرع جدة - الصفا", city: "جدة",  link: "#" },
    { id: 4, name: "فرع مكة", city: "مكة", link: "#" },
    { id: 5, name: "فرع المدينة", city: "المدينة", link: "#" },
    { id: 6, name: "فرع ينبع", city: "ينبع", link: "#" },
    { id: 7, name: "فرع الرياض - العارض ", city: "الرياض",  link: "#" },
    { id: 8, name: "فرع الخبر", city: "الخبر",  link: "#" },
    { id: 9, name: "فرع الدمام", city: "الدمام",  link: "#" },
    { id: 10, name: "فرع الطائف", city: "الطائف", link: "#" },
    { id: 11, name: "فرع تبوك", city: "تبوك",  link: "#" },
  ];
  return (
    <div className="page">
      <div className="container">
        <header className="header">  
               <img src="/logo.png" alt="طابور" width="160px" height="125px" />

          <h1 className="brand">طــابـور</h1>
          <h6 className="subbrand">كافتيـــريا  جميـــع الأوقــات </h6>
          <p className="country">المملكة العربية السعودية</p>

          <div className="socials">


{/* TikTok */}
<a href="#" className="social-link">
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#c9835d">
    <path d="M19 8.3a6.5 6.5 0 0 1-3.8-1.2V14a5 5 0 1 1-5-5h.3v2.7h-.3a2.3 2.3 0 1 0 2.3 2.3V2h2.7a3.8 3.8 0 0 0 3.8 3.8v2.5z"/>
  </svg>
</a>

{/* Instagram */}
<a href="#" className="social-link">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5"
      stroke="#c9835d" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4"
      stroke="#c9835d" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.5" fill="#c9835d"/>
  </svg>
</a>
{/* Location */}
<a href="#" className="social-link">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12z"
      stroke="#c9835d" strokeWidth="2"/>
    <circle cx="12" cy="10" r="3" fill="#c9835d"/>
  </svg>
</a>

</div>
        </header>

        <section className="cards">
          {links.map((item, index) => (
            <a key={index} href={item.url} className="card">
              <div className="card-icon"><img src={item.icon} style={{width: item.size}} alt={item.title} /></div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                {item.subtitle ? (
                  <p className="card-subtitle">{item.subtitle}</p>
                ) : null}
              </div>

              <div className="card-arrow">›</div>
            </a>
          ))}
        </section>

        <section className="branches-section">
          <h2 className="branches-title">فـــروعــنــا</h2>

          <div className="branches-list">
  {branches.map((branch) => (
    <a
      key={branch.id}
      href={branch.link}
      className="branch-card"
      target="_blank"
    >
      <span className="branch-name">{branch.name}</span>
      <span className="branch-arrow">›</span>
    </a>
  ))}
</div>
        </section>
        <footer className="footer">
  © 2026 طابور. جميع الحقوق محفوظة
</footer>

      </div>
    </div>
  );
}