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
      "The UNREPEATABLE Hoodie is the first statement piece from ONE OF ONE. Built as the face of the brand, it represents individuality, pressure, and the idea that real identity can’t be copied.",
  },
  {
    id: 2,
    name: "Trust The Process Tee",
    price: 60,
    image: "/trust.jpg",
    story:
      "Trust The Process is about discipline, growth, and staying grounded while building something bigger than the moment you're in.",
  },
  {
    id: 3,
    name: "Resilience Tee",
    price: 60,
    image: "/resilience.jpg",
    story:
      "Resilience represents strength through struggle and identity built through experience. Every challenge becomes part of the story.",
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

      <div style={{ background: "black", color: "white", fontFamily: "Arial" }}>
        
        {/* HERO */}
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
          }}
        >
          <div>
            <h1 style={{ fontSize: "3rem" }}>ONE OF ONE</h1>
            <p>UNREPEATABLE • LIMITED DROPS • MADE IN NYC</p>

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
                }}
              >
                Shop Now
              </button>

              <a
                href={instagramUrl}
                target="_blank"
                style={{
                  padding: "12px 20px",
                  border: "1px solid white",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* SHOP */}
        <section id="shop" style={{ padding: "40px" }}>
          <h2>Collection</h2>

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
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <h3>{product.name}</h3>

                <img src={product.image} width="100%" />

                {/* DESCRIPTION */}
                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  {product.story}
                </p>

                <select
                  onChange={(e) =>
                    setSizesSelected({
                      ...sizesSelected,
                      [product.id]: e.target.value,
                    })
                  }
                  style={{ marginTop: "10px", width: "100%" }}
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
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CART */}
        <section style={{ padding: "40px", background: "#111" }}>
          <h2>Cart</h2>

          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <p key={index}>
                  {item.name} - {item.size}
                </p>
              ))}
              <h3>Total: ${total}</h3>
            </>
          )}
        </section>
      </div>
    </>
  );
}
