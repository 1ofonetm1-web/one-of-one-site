import Head from "next/head";
import { useState, useMemo } from "react";

const instagramUrl =
  "https://www.instagram.com/1ofone.us?igsh=eWtycml4MHJmeHZr&utm_source=qr";

const products = [
  {
    id: 1,
    name: "UNREPEATABLE Hoodie",
    price: 120,
    image: "/unrepeatable-hoodie-new.jpg",
    story:
      "The original Unrepeatable statement piece. Built around individuality, pressure, and identity that cannot be replicated. This is the design that defines the brand.",
  },
  {
    id: 2,
    name: "Trust The Process Tee",
    price: 60,
    image: "/trust.jpg",
    story:
      "Built in pressure. No shortcuts. Trust the process.",
  },
  {
    id: 3,
    name: "Resilience Tee",
    price: 60,
    image: "/resilience.jpg",
    story:
      "Resilience is earned. Not given. Built through pressure.",
  },
  {
    id: 4,
    name: "ONE OF ONE Sweatsuit Set – Dark Gray",
    price: 100,
    image: "/oneofone-sweatsuit-darkgray.jpg",
    story:
      "The full One of One sweatsuit in Dark Gray. Designed to be worn together, not copied. Built for presence, individuality, and those who stand alone. Limited release. Save $20 when you buy the full set.",
  },
  {
    id: 5,
    name: "ONE OF ONE Sweatsuit Set – Light Gray",
    price: 100,
    image: "/oneofone-sweatsuit-lightgray.jpg",
    story:
      "The full One of One sweatsuit in Light Gray. Designed to be worn together, not copied. Built for presence, individuality, and those who stand alone. Limited release. Save $20 when you buy the full set.",
  },
  {
    id: 6,
    name: "ONE OF ONE Hoodie – Dark Gray",
    price: 60,
    image: "/oneofone-hoodie-darkgray.jpg",
    story:
      "The Dark Gray hoodie from the One of One collection. Clean, bold, and built to stand out without forcing it. Wear it alone or complete the full sweatsuit.",
  },
  {
    id: 7,
    name: "ONE OF ONE Hoodie – Light Gray",
    price: 60,
    image: "/oneofone-hoodie-lightgray.jpg",
    story:
      "The Light Gray hoodie from the One of One collection. Clean, bold, and built to stand out without forcing it. Wear it alone or complete the full sweatsuit.",
  },
  {
    id: 8,
    name: "ONE OF ONE Sweatpants – Dark Gray",
    price: 60,
    image: "/oneofone-pants-darkgray.jpg",
    story:
      "Clean. Minimal. Intentional. Designed to move with you while keeping the message clear — You are One of One. Pair it with the hoodie or stand on its own.",
  },
  {
    id: 9,
    name: "ONE OF ONE Sweatpants – Light Gray",
    price: 60,
    image: "/oneofone-pants-lightgray.jpg",
    story:
      "Clean. Minimal. Intentional. Designed to move with you while keeping the message clear — You are One of One. Pair it with the hoodie or stand on its own.",
  },
];

const sizes = ["S", "M", "L", "XL"];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [sizesSelected, setSizesSelected] = useState({});

  const addToCart = (product) => {
    const size = sizesSelected[product.id];

    if (!size) {
      alert("Select a size first");
      return;
    }

    setCart((prev) => [...prev, { ...product, size }]);
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  return (
    <>
      <Head>
        <title>ONE OF ONE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          background: "black",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
          minHeight: "100vh",
        }}
      >
        <section
          style={{
            minHeight: "100vh",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.88)), url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <div style={{ maxWidth: "900px" }}>
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "10px",
                letterSpacing: "2px",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              ONE OF ONE
            </h1>

            <p
              style={{
                fontSize: "15px",
                letterSpacing: "2px",
                marginBottom: "25px",
                fontWeight: 700,
              }}
            >
              UNREPEATABLE • LIMITED DROPS • MADE IN NYC
            </p>

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() =>
                  document.getElementById("shop").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                style={{
                  padding: "12px 20px",
                  background: "#ff3b30",
                  border: "none",
                  color: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Shop Now
              </button>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "12px 20px",
                  border: "1px solid white",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        <section
          id="shop"
          style={{
            padding: "40px",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "25px",
              letterSpacing: "1px",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            Collection
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "#111",
                  padding: "18px",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3
                  style={{
                    marginBottom: "15px",
                    fontSize: "1.15rem",
                    letterSpacing: "0.5px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: "1.35",
                  }}
                >
                  {product.name}
                </h3>

                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "14px",
                    display: "block",
                  }}
                />

                <p
                  style={{
                    marginTop: "12px",
                    marginBottom: "16px",
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "#d4d4d4",
                    letterSpacing: "0.2px",
                    fontWeight: 700,
                  }}
                >
                  {product.story}
                </p>

                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "12px",
                    fontSize: "1rem",
                    fontWeight: 900,
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  ${product.price}
                </p>

                <select
                  onChange={(e) =>
                    setSizesSelected({
                      ...sizesSelected,
                      [product.id]: e.target.value,
                    })
                  }
                  defaultValue=""
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    background: "#0f0f0f",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontWeight: 700,
                  }}
                >
                  <option value="">Select Size</option>
                  {sizes.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    background: "#ff3b30",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    borderRadius: "8px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "40px",
            background: "#111",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "18px",
              letterSpacing: "1px",
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            Cart
          </h2>

          {cart.length === 0 ? (
            <p
              style={{
                color: "#cfcfcf",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              Cart Is Empty
            </p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "12px",
                    paddingBottom: "12px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 800,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "#cfcfcf",
                      fontWeight: 700,
                    }}
                  >
                    Size: {item.size}
                  </p>
                </div>
              ))}

              <h3
                style={{
                  marginTop: "20px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                Total: ${total}
              </h3>
            </>
          )}
        </section>
      </div>
    </>
  );
}
