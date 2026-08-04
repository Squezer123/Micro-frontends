import React from "react";

export default function Root(props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👋 Hello from React-micro!</h1>
      <p style={styles.text}>
        Ten mikrofrontend jest zarządzany przez <strong>single-spa</strong> i
        załadowany dynamicznie przez <code>root-config</code>.
      </p>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Status</h2>
        <ul style={styles.list}>
          <li>✅ Moduł załadowany poprawnie</li>
          <li>✅ React działa wewnątrz single-spa</li>
          <li>✅ Współdzielone zależności (react, react-dom) rozwiązane</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "24px",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "8px",
    color: "#1a1a1a",
  },
  text: {
    color: "#555",
    lineHeight: "1.5",
  },
  card: {
    marginTop: "20px",
    padding: "16px",
    background: "#f7f9fb",
    borderRadius: "8px",
  },
  cardTitle: {
    fontSize: "16px",
    marginBottom: "8px",
  },
  list: {
    margin: 0,
    paddingLeft: "20px",
    color: "#333",
    lineHeight: "1.6",
  },
};