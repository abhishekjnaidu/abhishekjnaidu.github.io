function App() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <p
          style={{
            color: "#86868b",
            fontSize: "1.2rem",
            marginBottom: "20px",
          }}
        >
          Software Engineer
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            margin: 0,
            fontWeight: 700,
          }}
        >
          Abhishek Naidu
        </h1>

        <p
          style={{
            maxWidth: "700px",
            color: "#a1a1a6",
            fontSize: "1.3rem",
            marginTop: "30px",
            lineHeight: 1.7,
          }}
        >
          Building modern software, cloud solutions, and digital products with
          a focus on performance, scalability, and exceptional user experience.
        </p>

        <button
          style={{
            marginTop: "40px",
            padding: "14px 32px",
            borderRadius: "999px",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          View Projects
        </button>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "120px 10%",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2 style={{ fontSize: "3rem" }}>About Me</h2>

        <p
          style={{
            color: "#a1a1a6",
            fontSize: "1.2rem",
            lineHeight: 1.8,
          }}
        >
          I'm Abhishek Naidu, a software engineer passionate about building
          modern applications, cloud solutions, and automation tools. I enjoy
          learning new technologies, solving complex problems, and creating
          products that deliver real-world impact.
        </p>
      </section>

      {/* SKILLS */}
      <section
        style={{
          padding: "120px 10%",
          background: "#111",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {[
            "React",
            "JavaScript",
            "SQL Server",
            "Azure",
            "Docker",
            "Git",
            "REST APIs",
            "Node.js",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                background: "#1c1c1e",
                padding: "24px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        style={{
          padding: "120px 10%",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2 style={{ fontSize: "3rem" }}>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "24px",
            }}
          >
            <h3>Personal Portfolio</h3>
            <p style={{ color: "#a1a1a6" }}>
              Built using React, Vite, GitHub Actions and GitHub Pages.
            </p>
          </div>

          <div
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "24px",
            }}
          >
            <h3>Solar ROI Calculator</h3>
            <p style={{ color: "#a1a1a6" }}>
              Tool to estimate residential solar savings and ROI.
            </p>
          </div>

          <div
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "24px",
            }}
          >
            <h3>Future Project</h3>
            <p style={{ color: "#a1a1a6" }}>
              Add your upcoming side projects and experiments here.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        style={{
          padding: "120px 10%",
          background: "#111",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <h2 style={{ fontSize: "3rem" }}>Experience</h2>

          <div
            style={{
              marginTop: "40px",
              background: "#1c1c1e",
              padding: "30px",
              borderRadius: "24px",
            }}
          >
            <h3>Software Engineer</h3>

            <p style={{ color: "#a1a1a6" }}>
              Working on enterprise software solutions, databases, cloud
              platforms, automation, APIs, and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "140px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "3rem" }}>Let's Connect</h2>

        <p
          style={{
            color: "#a1a1a6",
            fontSize: "1.2rem",
            marginTop: "20px",
          }}
        >
          Open to collaborations, interesting projects, and technology
          discussions.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <a href="https://github.com/abhishekjnaidu">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </section>
    </div>
  );
}

export default App;