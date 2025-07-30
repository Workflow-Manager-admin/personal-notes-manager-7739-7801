import React from 'react';

// PUBLIC_INTERFACE
export default function NotesList({ notes, selectedNoteId, onSelect, onDelete }) {
  return (
    <ul className="notes-list" style={{ margin: 0, padding: 0, listStyle: 'none', flex: 1, overflowY: 'auto' }}>
      {notes.length === 0 && (
        <li style={{ padding: '1rem 1rem 0', color: 'var(--color-secondary, #888)' }}>
          No notes yet.
        </li>
      )}
      {notes.map(n => (
        <li key={n.id}
          className={`notes-list-item${n.id === selectedNoteId ? ' selected' : ''}`}
          style={{
            padding: "0.6rem 1rem",
            cursor: "pointer",
            background: n.id === selectedNoteId ? "#e3f0fb" : "transparent",
            borderBottom: "1px solid var(--border-color, #e0e0e0)",
            position: "relative",
            transition: "background 0.2s"
          }}
          onClick={() => onSelect(n.id)}
        >
          <span style={{ fontWeight: 600, color: "#1976d2" }}>
            {n.title.length > 32 ? n.title.slice(0, 32) + "…" : n.title}
          </span>
          <span style={{ color: "#424242", display: "block", fontSize: 12, marginTop: 2, opacity: 0.7 }}>
            {n.content.replace(/\n/g, " ").slice(0, 40)}
          </span>
          <button
            className="note-delete-btn"
            tabIndex={-1}
            aria-label="Delete note"
            onClick={e => { e.stopPropagation(); onDelete(n.id); }}
            style={{
              position: "absolute",
              right: 8,
              top: 14,
              background: "none",
              border: "none",
              color: "#f44336",
              fontSize: 16,
              cursor: "pointer",
              visibility: "hidden",
            }}
          >
            &#10006;
          </button>
          <style>
            {`
              .notes-list-item:hover .note-delete-btn {
                visibility: visible;
              }
            `}
          </style>
        </li>
      ))}
    </ul>
  );
}
