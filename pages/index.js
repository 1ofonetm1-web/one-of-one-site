export default function Home() {
  return (
    <div style={{background: 'black', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '40px', letterSpacing: '5px'}}>ONE OF ONE</h1>
      <p style={{color: '#ff3b30'}}>UNREPEATABLE STREETWEAR</p>

      <div style={{marginTop: '40px'}}>
        <h2>Products</h2>

        <div style={{marginTop: '20px'}}>
          <img src="/hoodie.jpg" width="300"/>
          <p>UNREPEATABLE Hoodie - $120</p>
        </div>

        <div style={{marginTop: '20px'}}>
          <img src="/trust.jpg" width="300"/>
          <p>Trust The Process Tee - $60</p>
        </div>

        <div style={{marginTop: '20px'}}>
          <img src="/resilience.jpg" width="300"/>
          <p>Resilience Tee - $60</p>
        </div>
      </div>

      <div style={{marginTop: '60px'}}>
        <h2>Follow Us</h2>
        <a href="https://instagram.com/10fone.us" style={{color:'#ff3b30'}}>Instagram</a>
      </div>
    </div>
  );
}
