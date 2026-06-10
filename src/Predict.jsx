import { useEffect, useState } from "react";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwMAZMcORuVldnW8NZ5qmUiYi48JUwLB0IBnDDOTa-2D6CxO_TckRHEz8YyrgaupHm46e6wF3JC70m/pub?gid=441480567&single=true&output=csv";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyQPMTcGFA0NUVZZ4wfqbrqY1s8OrtxroqR8CMpGHjNL8_l30dGIRC5U9DFMEzE2C7W/exec";

const teamsList = [
  "المكسيك",
  "كوريا الجنوبية",
  "كندا",
  "أمريكا",
  "قطر",
  "المغرب",
  "هايتي",
  "أستراليا",
  "ألمانيا",
  "هولندا",
  "ساحل العاج",
  "السويد",
  "إسبانيا",
  "بلجيكا",
  "السعودية",
  "إيران",
  "فرنسا",
  "العراق",
  "الأرجنتين",
  "النمسا",
  "البرتغال",
  "إنجلترا",
  "بنما",
  "كولومبيا",
  "تشيكيا",
  "سويسرا",
  "اسكتلندا",
  "البرازيل",
  "تركيا",
  "الإكوادور",
  "تونس",
  "الرأس الأخضر",
  "نيوزيلندا",
  "النرويج",
  "الأردن",
  "البوسنة",
  "جنوب أفريقيا",
  "كوراساو",
  "اليابان",
  "الباراغواي",
  "السنغال",
  "الأوروغواي",
  "مصر",
  "كرواتيا",
  "جمهورية الكونغو",
  "الجزائر",
  "غانا",
  "أوزبكستان",
];

export default function Predict() {
  const [matches, setMatches] = useState([]);
  const [scores, setScores] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegistered, setIsRegistered] = useState("");
  const [winnerTeam, setWinnerTeam] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((data) => {
        const rows = data.trim().split("\n");

        const parsed = rows.slice(1).map((row) => {
          const cols = row.split(",");

          return {
            date: cols[0]?.trim(),
            time: cols[1]?.trim(),
            team1: cols[2]?.trim(),
            code1: cols[3]?.trim().toLowerCase(),
            team2: cols[4]?.trim(),
            code2: cols[5]?.trim().toLowerCase(),
          };
        });

        const today = new Date().toLocaleDateString("en-US");
        const todayOnly = parsed.filter((match) => match.date === today);

        setMatches(todayOnly);
      });
  }, []);

  const getMatchId = (match) => {
    return `${match.date}-${match.code1}-${match.code2}`;
  };

  const changeScore = (matchId, team, amount) => {
    setScores((prev) => {
      const current = prev[matchId] || { score1: 0, score2: 0 };
      const newScore = Math.max(current[team] + amount, 0);

      return {
        ...prev,
        [matchId]: {
          ...current,
          [team]: newScore,
        },
      };
    });
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setMessage("يرجى إدخال الاسم الكامل");
      return;
    }

    if (!phone.trim()) {
      setMessage("يرجى إدخال رقم الجوال");
      return;
    }

    if (!isRegistered) {
      setMessage("يرجى اختيار هل أنت مسجل في طابور");
      return;
    }

    if (!winnerTeam) {
      setMessage("يرجى اختيار الفريق الفائز المتوقع");
      return;
    }

    if (matches.length === 0) {
      setMessage("لا توجد مباريات متاحة اليوم");
      return;
    }

    setIsSending(true);
    setMessage("");

    try {
      for (const match of matches) {
        const matchId = getMatchId(match);
        const matchScore = scores[matchId] || { score1: 0, score2: 0 };

        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name: name.trim(),
            phone: phone.trim(),
            isRegistered,
            winnerTeam,
            matchId,
            matchDate: match.date,
            matchTime: match.time,
            team1: match.team1,
            score1: matchScore.score1,
            team2: match.team2,
            score2: matchScore.score2,
          }),
        });
      }

      setMessage(
        "تم تسجيل توقعك بنجاح وفي حال كان الرقم مسجلًا مسبقًا لن يتم تكرار التوقع"
      );
    } catch (error) {
      setMessage("حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى");
    }

    setIsSending(false);
  };

  return (
    <div className="predict-page" dir="rtl">
      <div className="predict-container">
        <header className="header">
          <img
            src="/icons/profile_tabur2022.png"
            alt="طابور"
            width="200"
            height="200"
          />

          <h6 className="subbrand">كافتيـــريا لكل الأوقــات</h6>
          <p className="country">المملكة العربية السعودية</p>

          <div className="socials">
            <a href="#" className="social-link">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#72A294">
                <path d="M19 8.3a6.5 6.5 0 0 1-3.8-1.2V14a5 5 0 1 1-5-5h.3v2.7h-.3a2.3 2.3 0 1 0 2.3 2.3V2h2.7a3.8 3.8 0 0 0 3.8 3.8v2.5z" />
              </svg>
            </a>

            <a href="#" className="social-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="#72A294"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="#72A294"
                  strokeWidth="2"
                />
                <circle cx="17" cy="7" r="1.5" fill="#72A294" />
              </svg>
            </a>

            <a href="#" className="social-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12z"
                  stroke="#72A294"
                  strokeWidth="2"
                />
                <circle cx="12" cy="10" r="3" fill="#72A294" />
              </svg>
            </a>
          </div>
        </header>

        {matches.map((match, index) => {
          const matchId = getMatchId(match);
          const matchScore = scores[matchId] || { score1: 0, score2: 0 };

          const firstTeam = {
            name: match.team1,
            flag: `https://flagcdn.com/w160/${match.code1}.png`,
          };

          const secondTeam = {
            name: match.team2,
            flag: `https://flagcdn.com/w160/${match.code2}.png`,
          };

          if (!match.code1 || !match.code2) return null;

          return (
            <div key={index}>
              <section className="predict-card">
                <h2>المباراة القادمة</h2>

                <div className="match-box">
                  <div className="team">
                    <div className="team-flag">
                      <img src={firstTeam.flag} alt={firstTeam.name} />
                    </div>
                    <p>{firstTeam.name}</p>
                  </div>

                  <div className="vs">
                    <strong>VS</strong>
                    <span>{match.date}</span>
                    <span>{match.time}</span>
                  </div>

                  <div className="team">
                    <div className="team-flag">
                      <img src={secondTeam.flag} alt={secondTeam.name} />
                    </div>
                    <p>{secondTeam.name}</p>
                  </div>
                </div>
              </section>

              <section className="predict-card">
                <h2>توقع نتيجتك</h2>

                <div className="score-labels">
                  <span>نتيجة {firstTeam.name}</span>
                  <span>نتيجة {secondTeam.name}</span>
                </div>

                <div className="score-row">
                  <div className="score-control">
                    <button
                      onClick={() => changeScore(matchId, "score1", -1)}
                      type="button"
                    >
                      -
                    </button>

                    <div className="score-box">{matchScore.score1}</div>

                    <button
                      onClick={() => changeScore(matchId, "score1", 1)}
                      type="button"
                    >
                      +
                    </button>
                  </div>

                  <span className="score-dash">-</span>

                  <div className="score-control">
                    <button
                      onClick={() => changeScore(matchId, "score2", -1)}
                      type="button"
                    >
                      -
                    </button>

                    <div className="score-box">{matchScore.score2}</div>

                    <button
                      onClick={() => changeScore(matchId, "score2", 1)}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </section>
            </div>
          );
        })}

        <section className="predict-card">
          <h2>بياناتك</h2>

          <input
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="رقم الجوال"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="registered-box">
            <p className="field-title">هل أنت مسجل في طابور؟</p>

            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="isRegistered"
                  value="نعم"
                  checked={isRegistered === "نعم"}
                  onChange={(e) => setIsRegistered(e.target.value)}
                />
                <span>نعم</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="isRegistered"
                  value="لا"
                  checked={isRegistered === "لا"}
                  onChange={(e) => setIsRegistered(e.target.value)}
                />
                <span>لا</span>
              </label>
            </div>
          </div>

          <select
            className="winner-select"
            value={winnerTeam}
            onChange={(e) => setWinnerTeam(e.target.value)}
          >
            <option value="">توقعك للفريق الفائز</option>
            {teamsList.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </section>

        <button
          className="submit-predict"
          onClick={handleSubmit}
          disabled={isSending}
          type="button"
        >
          {isSending ? "جاري الإرسال..." : "🏆 إرسال التوقع"}
        </button>

        {message && <p className="predict-message">{message}</p>}
      </div>
    </div>
  );
}
