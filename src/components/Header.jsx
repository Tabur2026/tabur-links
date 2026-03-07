export default function Header() {
    return (
      <header style={{ textAlign: "center", paddingTop: 28 }}>
        {/* Logo circle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "999px",
              background: "#f3d8b5",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "6px solid rgba(255,255,255,0.7)",
            }}
          >
            <span style={{ color: "rgba(43,31,27,0.45)", fontWeight: 800, fontSize: 24 }}>
              مدن
            </span>
          </div>
        </div>
  
        {/* Title */}
        <h1 style={{ margin: "8px 0 6px", fontSize: 54, color: "#2b1f1b" }}>طابور</h1>
  
        {/* Location */}
        <div style={{ color: "rgba(43,31,27,0.55)", fontSize: 18, display: "flex", justifyContent: "center", gap: 10 }}>
          <span>المملكة العربية السعودية</span>
          <span style={{ color: "#63b7ad" }}>📍</span>
        </div>
  
        {/* Tagline */}
        <div style={{ marginTop: 10, color: "rgba(196,101,72,0.85)", fontSize: 18 }}>تكا وكافتيريا</div>
  
        {/* Social icons */}
        <div style={{ marginTop: 18, display: "flex", gap: 14, justifyContent: "center" }}>
          {["♪", "◎", "✉"].map((icon, i) => (
            <button
              key={i}
              style={{
                width: 54,
                height: 54,
                borderRadius: "999px",
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
                cursor: "pointer",
                color: "rgba(43,31,27,0.6)",
                fontSize: 20,
              }}
            >
              {icon}
            </button>
          ))}
        </div>
      </header>
    );
  }