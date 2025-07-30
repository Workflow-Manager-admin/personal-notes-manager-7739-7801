import React from 'react';

// PUBLIC_INTERFACE
export default function NoteViewer({ note, onEdit, onDelete }) {
  return (
    <div
      className="note-viewer"
      style={{
        maxWidth: 700,
        margin: "34px auto",
        background: "#fff",
        borderRadius: 15,
        padding: "2.5rem 2rem 2rem 2rem",
        boxShadow: "0 2px 18px -2px #EDEDED,0 0px 1.5px #fbc02d77",
        position: "relative"
      }}
    >
      <h2 style={{
        fontSize: 22,
        fontWeight: 800,
        borderBottom: "2px solid #fbc02d",
        margin: "0 0 18px 0",
        paddingBottom: 6,
        color: "#1976d2"
      }}>
        {note.title}
      </h2>
      <div style={{
        color: "#424242",
        fontSize: 16,
        minHeight: 60,
        whiteSpace: "pre-wrap",
        marginBottom: 18
      }}>
        {note.content || <span style={{ opacity: 0.6, fontStyle: "italic" }}>No content</span>}
      </div>
      <div style={{ display: "flex", gap: ".7rem" }}>
        <button
          style={{
            background: "#fbc02d",
            color: "#424242",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 15,
            padding: "8px 20px",
            cursor: "pointer"
          }}
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          style={{
            background: "#fff",
            color: "#f44336",
            border: "1.1px solid #f44336",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 15,
            padding: "8px 20px",
            cursor: "pointer"
          }}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      <div style={{ fontSize: 12, color: "#bbb", marginTop: 15, fontStyle: "italic" }}>
        Last updated: {new Date(note.updated).toLocaleString()}
      </div>
    </div>
  );
}
