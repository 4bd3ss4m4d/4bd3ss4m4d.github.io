import "./App.css";

import "./App.css";

function App() {
  return (
    <>
      <div className="section-container">
        <h1 className="heading-1" style={{ color: "var(--primary-800)" }}>
          Abdessamad's Portfolio Website
        </h1>
        <button className="btn-primary">Click Me</button>
        <div
          style={{ backgroundColor: "var(--primary-100)" }}
          className="p-4 rounded-lg mt-4"
        >
          <p style={{ color: "var(--primary-800)" }}>
            This is a test of our primary colors
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
