import React, { useEffect, useState } from "react";
import { addItem } from "@KK/cart-store";

const API_BASE_URL = "http://localhost:3001";

const CATEGORY_LABELS = {
  LAPTOP: "Laptop",
  PHONE: "Telefon",
  CAMERA: "Aparat",
  OTHER: "Inne",
};

const STATUS_LABELS = {
  AVAILABLE: { label: "Dostępny", color: "#1a7f37" },
  MAINTENANCE: { label: "W serwisie", color: "#9a6700" },
  RETIRED: { label: "Wycofany", color: "#cf222e" },
};

export default function Root(props) {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_BASE_URL}/equipment`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Błąd odpowiedzi API: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setEquipment(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛍️ Katalog sprzętu</h1>
      <p style={styles.subtitle}>
        Dane pobrane na żywo z <code>AssetManager-API</code> (
        <code>{API_BASE_URL}/equipment</code>)
      </p>

      {loading && <p style={styles.info}>Ładowanie...</p>}

      {error && (
        <p style={styles.error}>
          Nie udało się pobrać danych: {error}. Sprawdź, czy backend działa
          pod adresem <code>{API_BASE_URL}</code>.
        </p>
      )}

      {!loading && !error && equipment.length === 0 && (
        <p style={styles.info}>Brak sprzętu w katalogu.</p>
      )}

      {!loading && !error && equipment.length > 0 && (
        <div style={styles.grid}>
          {equipment.map((item) => {
            const status = STATUS_LABELS[item.status] || {
              label: item.status,
              color: "#555",
            };
            return (
              <div key={item.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <h2 style={styles.cardTitle}>{item.name}</h2>
                  <span
                    style={{
                      ...styles.badge,
                      color: status.color,
                      borderColor: status.color,
                    }}
                  >
                    {status.label}
                  </span>
                </div>
                <p style={styles.cardCategory}>
                  {CATEGORY_LABELS[item.category] || item.category}
                </p>
                {item.description && (
                  <p style={styles.cardDescription}>{item.description}</p>
                )}
                <button
                  style={styles.addButton}
                  onClick={() => addItem(item)}
                >
                  Dodaj do koszyka
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 24px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "4px",
    color: "#1a1a1a",
  },
  subtitle: {
    color: "#777",
    fontSize: "14px",
    marginBottom: "24px",
  },
  info: {
    color: "#555",
  },
  error: {
    color: "#cf222e",
    background: "#fff0f0",
    padding: "12px 16px",
    borderRadius: "8px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "16px",
  },
  card: {
    padding: "16px",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    background: "white",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "8px",
  },
  cardTitle: {
    fontSize: "16px",
    margin: 0,
    color: "#1a1a1a",
  },
  badge: {
    fontSize: "11px",
    fontWeight: 600,
    padding: "2px 8px",
    borderRadius: "999px",
    border: "1px solid",
    whiteSpace: "nowrap",
  },
  cardCategory: {
    fontSize: "13px",
    color: "#777",
    margin: "8px 0 0",
  },
  cardDescription: {
    fontSize: "13px",
    color: "#555",
    marginTop: "8px",
    lineHeight: "1.4",
  },
  addButton: {
    marginTop: "12px",
    width: "100%",
    padding: "8px 12px",
    background: "#1a1a1a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    cursor: "pointer",
  },
};