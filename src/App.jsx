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
    { id: 1, name: "فرع الرياض - العارض ", city: "الرياض", link: "https://www.google.com/maps/place/%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%E2%80%AD/@24.7299147,46.7991298,90154m/data=!3m1!1e3!4m6!3m5!1s0x3e2eef0058c5a305:0xa3463d20cb01d36e!8m2!3d24.8854337!4d46.6114065!16s%2Fg%2F11xp2hlf01?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" },
    { id: 2, name: "فرع جدة - الحمدانية", city: "جدة", link: "https://www.google.com/maps/place/%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A%D8%A9%E2%80%AD/@21.757826,39.1870442,17z/data=!3m1!4b1!4m6!3m5!1s0x15c17d0025b5d977:0xc6c83b0c540c529e!8m2!3d21.757826!4d39.1870442!16s%2Fg%2F11x12xczpk?entry=tts&g_ep=EgoyMDI1MDMxMi4wIPu8ASoASAFQAw%3D%3D" },
    { id: 3, name: "فرع جدة - النسيم", city: "جدة",  link: "https://www.google.com/maps/place/%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D8%A7%D9%84%D9%86%D8%B3%D9%8A%D9%85%E2%80%AD/@21.5110066,39.2303005,180m/data=!3m1!1e3!4m6!3m5!1s0x15c3cf007d081c99:0x775f6d84224e4ebf!8m2!3d21.5113505!4d39.2301067!16s%2Fg%2F11x6hswzmw?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" },
    { id: 4, name: "فرع جدة - النهضة", city: "جدة", link: "https://www.google.com/maps?q=J48C+68Q+%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D8%A7%D9%84%D9%86%D9%87%D8%B6%D8%A9+%D8%AC%D8%AF%D8%A9+Cafeteria+tabur+jeddah,+%D8%AD%D9%8A%D8%8C+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86+%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84%D8%8C+An+Nahdah,+Jeddah+23523&ftid=0x15c3db0039189e69:0x349fc42937e2fdae&entry=gps&lucs=,94244542,94242571,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94233073,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTQxLjAuOTE2NjAYACCIJyp-LDk0MjQ0NTQyLDk0MjQyNTcxLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjMzMDczLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJTQQ%3D%3D&g_st=com.google.maps.preview.copy" },
    { id: 5, name: "فرع المدينة", city: "المدينة", link: "https://www.google.com/maps/place/%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%E2%80%AD/@24.4776667,39.5514167,706m/data=!3m2!1e3!4b1!4m6!3m5!1s0x15bdb900138a4939:0xe8d3f490479164b3!8m2!3d24.4776667!4d39.5514167!16s%2Fg%2F11xsb6lkqs?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" },
    { id: 6, name: "فرع الباحة", city: "الباحة", link: "https://www.google.com/maps?q=%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%A8%D8%A7%D8%AD%D8%A9,+Raghdan,+Alnuzhah,+Al+Bahah+65528&ftid=0x15ef45f313cc39d7:0xbddacd60499db526&entry=gps&lucs=,94242571,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI0LjUwLjAuNzA0NDI3ODkxMBgAIIgnKmwsOTQyNDI1NzEsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAlNB&g_st=com.google.maps.preview.copy" },
    { id: 7, name: "فرع خميس مشيط  ", city: "خميس مشيط",  link: "https://www.google.com/maps/place/%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1%E2%80%AD/@18.2645051,42.7454082,17z/data=!3m1!4b1!4m6!3m5!1s0x15fb59007ec14d83:0x2195c9975d0982c4!8m2!3d18.2645!4d42.7428333!16s%2Fg%2F11x5c7x70b?entry=tts&g_ep=EgoyMDI1MDMxOS4yIPu8ASoASAFQAw%3D%3D" },
    { id: 8, name: "فرع صبيا", city: "صبيا",  link: "https://www.google.ae/maps/place/%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1%E2%80%AD/@17.1607092,42.6401428,17z/data=!3m1!4b1!4m6!3m5!1s0x15fd510033dbc3c1:0x7961e84feb0f4bd0!8m2!3d17.1607092!4d42.6401428!16s%2Fg%2F11xf71x91z?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" },
    { id: 9, name: "فرع الدمام", city: "الدمام",  link: "https://www.google.com/maps?q=%D9%83%D8%A7%D9%81%D8%AA%D9%8A%D8%B1%D9%8A%D8%A7+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85%D8%8C+7677+%D8%B4%D8%A7%D8%B1%D8%B9+%D9%82%D8%B7%D8%A8+%D8%A7%D9%84%D8%AF%D9%8A%D9%86+%D8%A7%D9%84%D8%B4%D8%A7%D9%81%D8%B9%D9%8A%D8%8C+%D8%A7%D9%84%D9%82%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9%D8%8C+EASA2914%D8%8C+2914%D8%8C+%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85+34273&ftid=0x3e49e3000215cb6d:0xb9578393c5b0d679&entry=gps&lucs=,94259551,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjIwLjAuNzU3ODEwNjA5MBgAIIgnKlosOTQyNTk1NTEsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDRCAlNB&skid=2f28703c-cb66-4995-ad6b-9d362bf1ebaf&g_st=com.google.maps.preview.copy" },
    { id: 10, name: "فرع الطائف", city: "الطائف", link: "https://www.google.ae/maps/place/%D9%85%D8%B7%D8%B9%D9%85+%D8%B7%D8%A7%D8%A8%D9%88%D8%B1+%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81%E2%80%AD/@21.3280312,40.4374526,17z/data=!3m1!4b1!4m6!3m5!1s0x15e9896ed2855f39:0x355e06eeb89d059a!8m2!3d21.3280312!4d40.4352639!16s%2Fg%2F11y1124xt0?entry=tts&g_ep=EgoyMDI1MTAyOS4yIPu8ASoASAFQAw%3D%3D&skid=1b2558ae-ac93-423d-9465-b34dee9a2916" },
    { id: 11, name: "فرع نجران", city: "نجران",  link: "https://www.google.com/maps/place/%D8%B7%D8%A7%D8%A8%D9%88%D8%B1%E2%80%AD/@17.5610264,44.2264054,933m/data=!3m2!1e3!4b1!4m6!3m5!1s0x15fec3003d127687:0x91ff8ee39b4d81fe!8m2!3d17.5610264!4d44.2238305!16s%2Fg%2F11ynf3zb18?entry=tts&g_ep=EgoyMDI1MTExMi4wIPu8ASoASAFQAw%3D%3D&skid=49a55dff-dff3-4d03-8c74-5e1735a3404d" },
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