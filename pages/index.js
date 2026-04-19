import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          background: "black",
          minHeight: "100vh",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "20px" }}>IMAGE TEST</h1>

        <img
          src="/unrepeatable-hoodie-new.jpg"
          alt="UNREPEATABLE Hoodie"
          style={{
            width: "320px",
            display: "block",
            borderRadius: "12px",
          }}
        />
      </div>
    </>
  );
}
