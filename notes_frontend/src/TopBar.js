import React from 'react';

// PUBLIC_INTERFACE
export default function TopBar({ onCreate, onSearch, search }) {
  return (
    <header
      className="top-bar"
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid var(--border-color, #e0e0e0)",
        padding: "0.6rem 1rem",
        background: "#fff",
        minHeight: 48
      }}
    >
      <button
        onClick={onCreate}
        className="create-note-btn"
        style={{
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 7,
          fontWeight: 500,
          fontSize: 14,
          marginRight: 18,
          padding: "8px 18px",
          cursor: "pointer",
          outline: "none"
        }}
        aria-label="Create new note"
      >
        + New Note
      </button>
      <div style={{ flex: 1 }} />
      <input
        type="search"
        className="note-search-input"
        value={search}
        onChange={e => onSearch(e.target.value)}
        placeholder="Search notes…"
        style={{
          border: "1px solid #d5d5d5",
          borderRadius: 6,
          padding: "7px 12px",
          minWidth: 170,
          maxWidth: 300,
          fontSize: 15,
          background: "#f8f9fa",
          color: "#424242"
        }}
        aria-label="Search notes"
      />
      <span style={{ marginLeft: 8, color: "#fbc02d", fontSize: 19, verticalAlign: 'middle' }}>🔍</span>
    </header>
  );
}
