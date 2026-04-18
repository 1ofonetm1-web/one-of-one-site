import Head from "next/head";
import { useState } from "react";

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

      <div
        style={{
          background: "black",
          color: "white",
          fontFamily: "Arial",
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

        <section
          id="shop"
          style={{
            padding: "50px 30px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ marginBottom: "25px", fontSize: "2rem" }}>Collection</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
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
                <h3 style={{ marginBottom: "15px" }}>{product.name}</h3>

                <img
                  src
