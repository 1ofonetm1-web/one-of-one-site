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
      "The Unrepeatable Hoodie is the first statement piece from One of One. Built as the face of the brand, it represents individuality, pressure, and identity that cannot be replicated.",
  },
  {
    id: 2,
    name: "Trust The Process Tee",
    price: 60,
    image: "/trust.jpg",
    story:
      "Trust the Process reflects discipline, patience, and belief. It represents staying grounded while building something bigger than the moment you are in.",
  },
  {
    id: 3,
    name: "Resilience Tee",
    price: 60,
    image: "/resilience.jpg",
    story:
      "Resilience represents strength through struggle. Every challenge becomes part of the story, shaping identity and creating something real.",
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

    setCart([...cart, { ...product, size }]);
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
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
        }}
      >
        <section
          style={{
            minHeight: "100vh",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "10px",
                letterSpacing: "2px",
              }}
            >
              ONE OF ONE
            </h1>

            <p
              style={{
                fontSize: "15px",
                letterSpacing: "2px",
                marginBottom: "25px",
              }}
            >
              UNREPEATABLE • LIMITED DROPS • MADE IN NYC
            </p>

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() =>
                  document.getElementById("shop").scrollIntoView()
                }
                style={{
                  padding: "12px 20px",
                  background: "#ff3b30",
                  border: "none",
                  color: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  fontWeight: "bold",
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
                  fontWeight: "bold",
                }}
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="shop" style={{ padding: "40px" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "25px",
              letterSpacing: "1px",
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
                }}
              >
                <h3
                  style={{
                    marginBottom: "15px",
                    fontSize: "1.4rem",
                    letterSpacing: "0.5px",
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
                    marginBottom: "12px",
                    display: "block",
                  }}
                />

                <p
                  style={{
                    marginTop: "12px",
                    marginBottom: "16px",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "#cfcfcf",
                    letterSpacing: "0.3px",
                    fontFamily: "'Times New Roman', serif",
                    fontStyle: "italic",
                  }}
                >
                  {product.story}
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
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px", background: "#111" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "18px",
              letterSpacing: "1px",
            }}
          >
            Cart
          </h2>

          {cart.length === 0 ? (
            <p style={{ color: "#cfcfcf" }}>Cart is empty</p>
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
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    {item.name}
                  </p>
                  <p style={{ margin: "4px 0 0", color: "#cfcfcf" }}>
                    Size: {item.size}
                  </p>
                </div>
              ))}

              <h3 style={{ marginTop: "20px" }}>Total: ${total}</h3>
            </>
          )}
        </section>
      </div>
    </>
  );
}
