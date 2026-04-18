import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    if (!size) {
      alert("Select a size first");
      return;
    }

    setCart([...cart, { product, size }]);
  };

  return (
    <>
      <Head>
        <title>ONE OF ONE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ color: "white", fontFamily: "Arial", background: "black" }}>
        
        {/* HERO SECTION */}
        <section
          style={{
            minHeight: "100vh",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.8)), url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem" }}>ONE OF ONE</h1>
          <p>UNREPEATABLE • LIMITED DROPS • MADE IN NYC</p>
          <button
            onClick={() =>
              document.getElementById("products").scrollIntoView()
            }
            style={{ marginTop: "20px", padding: "10px 20px" }}
          >
            SHOP NOW
          </button>
        </section>

        {/* PRODUCTS */}
        <section id="products" style={{ padding: "40px" }}>
          <h2>Products</h2>

          {/* HOODIE */}
          <div>
            <h3>UNREPEATABLE Hoodie</h3>
            <img src="/hoodie.jpg" width="300" />

            <p>
              The UNREPEATABLE Hoodie is the first statement piece from ONE OF
              ONE. Built as the face of the brand, it represents individuality,
              pressure, and the idea that real identity can’t be copied.
            </p>

            <select id="hoodieSize">
              <option value="">Select Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <button
              onClick={() =>
                addToCart(
                  "UNREPEATABLE Hoodie",
                  document.getElementById("hoodieSize").value
                )
              }
            >
              Add to Cart
            </button>
          </div>

          {/* TRUST TEE */}
          <div>
            <h3>Trust The Process Tee</h3>
            <img src="/trust.jpg" width="300" />

            <p>
              Trust The Process is about discipline, growth, and staying grounded
              while building something bigger than the moment you're in.
            </p>

            <select id="trustSize">
              <option value="">Select Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <button
              onClick={() =>
                addToCart(
                  "Trust The Process Tee",
                  document.getElementById("trustSize").value
                )
              }
            >
              Add to Cart
            </button>
          </div>

          {/* RESILIENCE TEE */}
          <div>
            <h3>Resilience Tee</h3>
            <img src="/resilience.jpg" width="300" />

            <p>
              Resilience represents strength through struggle and identity built
              through experience. Every challenge becomes part of the story.
            </p>

            <select id="resilienceSize">
              <option value="">Select Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <button
              onClick={() =>
                addToCart(
                  "Resilience Tee",
                  document.getElementById("resilienceSize").value
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </section>

        {/* CART */}
        <section style={{ padding: "40px", background: "#111" }}>
          <h2>Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <p key={index}>
                {item.product} - Size: {item.size}
              </p>
            ))
          )}
        </section>

        {/* INSTAGRAM */}
        <section style={{ padding: "40px" }}>
          <h2>Follow Us</h2>
          <a
            href="https://instagram.com/YOUR_REAL_LINK"
            target="_blank"
          >
            Instagram
          </a>
        </section>
      </div>
    </>
  );
}
