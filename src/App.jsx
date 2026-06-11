import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Predict from "./Predict";


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
  title: "توقع النتيجة ",
  subtitle: "شارك بتوقعك واربح جوائز طابور الحصرية",
  icon: "/icons/football.png",
  size: 50,
  url: "/predict",
  featured: true,
},{
      title: "تطبيق طابور",
      subtitle: "لعروضنا وتجهيز طلباتكم",
      icon: "/icons/appw.png",
      size:30,
      url: "https://tabur.tryorder.net/app",
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
 const Home = () => (
    <div className="page">
      <div className="container">
        <header className="header">  
               <img src="/icons/profile_tabur2022.png" alt="طابور" width="200" height="200" />
          <h6 className="subbrand">كافتيـــريا  لكل الأوقــات </h6>
          <p className="country">المملكة العربية السعودية</p>

          <div className="socials">


{/* TikTok */}
<a  href="https://www.tiktok.com/@tabur.sa" className="social-link">
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#72A294">
    <path d="M19 8.3a6.5 6.5 0 0 1-3.8-1.2V14a5 5 0 1 1-5-5h.3v2.7h-.3a2.3 2.3 0 1 0 2.3 2.3V2h2.7a3.8 3.8 0 0 0 3.8 3.8v2.5z"/>
  </svg>
</a>

{/* Instagram */}
<a href="https://www.instagram.com/tabur.sa" className="social-link">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5"
      stroke="#72A294" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4"
      stroke="#72A294" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.5" fill="#72A294"/>
  </svg>
</a>
{/* whatsapp */}
 <a
  href="https://wa.me/966544956216"
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="#72A294"
  >
    <path d="M20.52 3.48A11.83 11.83 0 0 0 12.04 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.64a11.87 11.87 0 0 0 5.74 1.46h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.24-6.15-3.4-8.46zM12.05 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.9 9.9 0 1 1 8.38 4.63zm5.45-7.43c-.3-.15-1.75-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.75-.71 2-1.39.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.57-.35z"/>
  </svg>
</a>

</div>
        </header>

 <section className="cards">
  {links.map((item, index) => (
    <a
      key={index}
      href={item.url}
      className={`card ${item.featured ? "featured-card" : ""}`}
    >
      <div className="card-icon">
        <img
          src={item.icon}
          style={{ width: item.size }}
          alt={item.title}
        />
      </div>

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
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Predict />} />
    </Routes>
  </BrowserRouter>
);
}
