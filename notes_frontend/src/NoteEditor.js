import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note.title || '');
  const [content, setContent] = useState(note.content || '');

  // Ensure no accidental overwrite
  function handleSave(e) {
    e.preventDefault();
    onSave({ ...note, title: title.trim() || 'Untitled Note', content });
  }

  return (
    <form
      className="note-editor"
      style={{
        maxWidth: 700,
        margin: "36px auto",
        background: "#fff",
        borderRadius: 15,
        padding: "2.5rem 2rem 2rem 2rem",
        boxShadow: "0 2px 18px -2px #EDEDED,0 0px 1.5px #fbc02d77",
      }}
      onSubmit={handleSave}
    >
      <input
        type="text"
        value={title}
        maxLength={80}
        onChange={e => setTitle(e.target.value)}
        required
        placeholder="Note Title"
        style={{
          width: "100%",
          fontSize: 22,
          fontWeight: 800,
          border: "none",
          marginBottom: 18,
          outline: "none",
          borderBottom: "2px solid #fbc02d",
          background: "#fff",
          padding: "6px"
        }}
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Start typing your note…"
        style={{
          width: "100%",
          minHeight: 140,
          fontSize: 16,
          fontFamily: "inherit",
          padding: 10,
          border: "1.5px solid #e0e0e0",
          borderRadius: 9,
          marginBottom: 20,
          background: "#f8f9fa",
          resize: "vertical"
        }}
      />
      <div style={{ display: "flex", gap: '.6rem' }}>
        <button
          type="submit"
          style={{
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 7,
            fontWeight: 600,
            fontSize: 15,
            padding: "9px 23px",
            cursor: "pointer"
          }}
        >
          Save
        </button>
        <button
          type="button"
          style={{
            background: "#fbc02d",
            color: "#424242",
            border: "none",
            borderRadius: 7,
            fontWeight: 600,
            fontSize: 15,
            padding: "9px 23px",
            cursor: "pointer"
          }}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
