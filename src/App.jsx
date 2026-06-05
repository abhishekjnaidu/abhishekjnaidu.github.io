function App() {
  return (
    <>
      <section style={hero}>
        <p style={tag}>HELLO, I'M</p>

        <h1 style={title}>Abhishek Naidu</h1>

        <h2 style={subtitle}>
          Building products, learning technologies, and creating solutions.
        </h2>

        <div style={buttonContainer}>
          <button style={primaryBtn}>View Projects</button>
          <button style={secondaryBtn}>Contact Me</button>
        </div>
      </section>
    </>
  );
}

const hero = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "#f5f5f7",
  padding: "20px",
};

const tag = {
  letterSpacing: "4px",
  color: "#86868b",
  fontSize: "14px",
};

const title = {
  fontSize: "72px",
  fontWeight: "700",
  margin: "10px 0",
  color: "#1d1d1f",
};

const subtitle = {
  maxWidth: "700px",
  fontSize: "28px",
  fontWeight: "400",
  lineHeight: "1.4",
  color: "#424245",
};

const buttonContainer = {
  marginTop: "40px",
  display: "flex",
  gap: "15px",
};

const primaryBtn = {
  padding: "14px 28px",
  borderRadius: "999px",
  border: "none",
  background: "#0071e3",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const secondaryBtn = {
  padding: "14px 28px",
  borderRadius: "999px",
  border: "1px solid #d2d2d7",
  background: "white",
  cursor: "pointer",
  fontSize: "16px",
};

export default App;