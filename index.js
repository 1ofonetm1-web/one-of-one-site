export default function Home() {
  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.78)), url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: "980px" }}>
          <p
            style={{
              letterSpacing: "4px",
              color: "#ff3b30",
              fontSize: "14px",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}
          >
            Limited Drops • Made in NYC
          </p>

          <h1
            style={{
              fontSize: "72px",
              margin: 0,
              fontWeight: 900,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            UNREPEATABLE
          </h1>

          <p style={{ fontSize: "24px", marginTop: "18px", color: "rgba(255,255,255,0.88)" }}>
            Not made to fit in. Built to stand alone.
          </p>

          <div style={{ marginTop: "28px", display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#shop"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "#ff3b30",
                color: "white",
                textDecoration: "none",
                borderRadius: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Shop Now
            </a>

            <a
              href="https://www.instagram.com/10fone.us/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                textDecoration: "none",
                borderRadius: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section id="shop" style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", textTransform: "uppercase" }}>Featured Pieces</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "24px" }}>
          <div style={{ background: "#111", borderRadius: "18px", padding: "16px" }}>
            <h3 style={{ marginTop: 0, textTransform: "uppercase" }}>UNREPEATABLE Hoodie</h3>
            <img src="/hoodie.jpg" width="100%" style={{ borderRadius: "16px" }} alt="UNREPEATABLE Hoodie" />
            <p style={{ marginBottom: "8px" }}>$120</p>
            <label style={{ display: "block", marginBottom: "10px" }}>Size</label>
            <select style={{ width: "100%", padding: "10px", borderRadius: "10px", marginBottom: "12px" }} defaultValue="M">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <button style={{ width: "100%", padding: "12px", background: "#ff3b30", color: "white", border: "none", borderRadius: "12px", fontWeight: 700 }}>
              Add to Cart
            </button>
          </div>

          <div style={{ background: "#111", borderRadius: "18px", padding: "16px" }}>
            <h3 style={{ marginTop: 0, textTransform: "uppercase" }}>Trust The Process Tee</h3>
            <img src="/trust.jpg" width="100%" style={{ borderRadius: "16px" }} alt="Trust The Process Tee" />
            <p style={{ marginBottom: "8px" }}>$60</p>
            <label style={{ display: "block", marginBottom: "10px" }}>Size</label>
            <select style={{ width: "100%", padding: "10px", borderRadius: "10px", marginBottom: "12px" }} defaultValue="M">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <button style={{ width: "100%", padding: "12px", background: "#ff3b30", color: "white", border: "none", borderRadius: "12px", fontWeight: 700 }}>
              Add to Cart
            </button>
          </div>

          <div style={{ background: "#111", borderRadius: "18px", padding: "16px" }}>
            <h3 style={{ marginTop: 0, textTransform: "uppercase" }}>Resilience Tee</h3>
            <img src="/resilience.jpg" width="100%" style={{ borderRadius: "16px" }} alt="Resilience Tee" />
            <p style={{ marginBottom: "8px" }}>$60</p>
            <label style={{ display: "block", marginBottom: "10px" }}>Size</label>
            <select style={{ width: "100%", padding: "10px", borderRadius: "10px", marginBottom: "12px" }} defaultValue="M">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <button style={{ width: "100%", padding: "12px", background: "#ff3b30", color: "white", border: "none", borderRadius: "12px", fontWeight: 700 }}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 20px 70px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ background: "#111", borderRadius: "20px", padding: "24px" }}>
          <h2 style={{ marginTop: 0, textTransform: "uppercase" }}>Checkout Preview</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            This section is the placeholder for your real cart and payment flow. Next step after this redeploy is
            connecting Shopify or Stripe so inventory and live checkout work for real.
          </p>
          <button style={{ padding: "14px 24px", background: "#ff3b30", color: "white", border: "none", borderRadius: "12px", fontWeight: 700 }}>
            Pay With Card
          </button>
        </div>
      </section>
    </div>
  );
}
