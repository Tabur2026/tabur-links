import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [branches, setBranches] = useState([]);

  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwMAZMcORuVldnW8NZ5qmUiYi48JUwLB0IBnDDOTa-2D6CxO_TckRHEz8YyrgaupHm46e6wF3JC70m/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        const rows = csv.split("\n").slice(1);

        const data = rows
          .map((row) => {
            const [id, name, status, link] = row.split(",");

            return {
              id: id?.trim(),
              name: name?.trim(),
              status: status?.trim(),
              link: link?.trim(),
            };
          })
          .filter((branch) => branch.status === "active");

        setBranches(data);
      });
  }, []);
  const links = [
    {
      title: "استمارة طلب فرنشايز طابور",
      subtitle: "",
      icon: "/icons/franchiseReq.png",
      size:40,
      url: "https://docs.google.com/forms/d/1F6SvLTzFnni_MemrOVdHHOKXYRxCla3Iysa09dpB99M/viewform?edit_requested=true",
    },
    {
      title: "تطبيق طابور",
      subtitle: "لعروضنا وتجهيز طلباتكم",
      icon: "/icons/appw.png",
      size:30,
      url: "https://tabur.tryorder.net/app",
    },{
  title: "توقع المباريات",
  subtitle: "شارك بتوقعك واربح جوائز طابور الحصرية",
  icon: "/icons/football.png",
  size: 30,
  url: "/predict",
  featured: true,
},
    {
      title: "من نحن",
      subtitle: "تعرّف على طابور",
      icon: "/icons/tabur name.png",
      size: 50,
      url: "https://drive.google.com/file/d/12sSAwbKNY_GItSNH0O_bZUdhBHDSpQEW/view",
    },
    {
      title: "انضم إلينا",
      subtitle: "",
      icon: "/icons/join_white.png",
      size: 50,
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeRy2lW0DnijNKvWTZYBMgewHvV9zoWcPovAXTfeRFkZx2N4w/viewform",
    },
  ];
 
  return (
    <div className="page">
      <div className="container">
        <header className="header">  
               <img src="/icons/profile_tabur2022.png" alt="طابور" width="200" height="200" />
          <h6 className="subbrand">كافتيـــريا  لكل الأوقــات </h6>
          <p className="country">المملكة العربية السعودية</p>

          <div className="socials">


{/* TikTok */}
<a href="#" className="social-link">
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#72A294">
    <path d="M19 8.3a6.5 6.5 0 0 1-3.8-1.2V14a5 5 0 1 1-5-5h.3v2.7h-.3a2.3 2.3 0 1 0 2.3 2.3V2h2.7a3.8 3.8 0 0 0 3.8 3.8v2.5z"/>
  </svg>
</a>

{/* Instagram */}
<a href="#" className="social-link">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5"
      stroke="#72A294" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4"
      stroke="#72A294" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.5" fill="#72A294"/>
  </svg>
</a>
{/* Location */}
<a href="#" className="social-link">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12z"
      stroke="#72A294" strokeWidth="2"/>
    <circle cx="12" cy="10" r="3" fill="#72A294"/>
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
