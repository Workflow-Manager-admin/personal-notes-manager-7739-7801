import React from 'react';
import NotesList from './NotesList';

// PUBLIC_INTERFACE
export default function Sidebar({ notes, selectedNoteId, onSelectNote, onDeleteNote }) {
  return (
    <aside
      className="sidebar"
      style={{
        background: 'var(--sidebar-bg, #f8f9fa)',
        borderRight: '1px solid var(--border-color, #E0E0E0)',
        width: 260,
        minWidth: 180,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ padding: '1rem 1rem 0 1rem', fontWeight: 700, fontSize: 20, color: "#1976d2", letterSpacing: 1 }}>
        Personal Notes
      </div>
      <NotesList
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelect={onSelectNote}
        onDelete={onDeleteNote}
      />
      <div style={{ flex: 1 }} />
      <footer style={{ fontSize: 11, color: '#888', textAlign: 'center', margin: '0.5rem 0 1rem' }}>
        <a href="https://reactjs.org" style={{ color: "#1976d2", textDecoration: "none" }}>React</a> Demo
      </footer>
    </aside>
  );
}
