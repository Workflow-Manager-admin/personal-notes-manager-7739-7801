import React, { useState, useMemo } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';

// Define initial notes array if desired, or use [] for blank start

// PUBLIC_INTERFACE
export default function NotesApp() {
  /*
    A notes root component managing all note actions.
    Notes format: {id, title, content, updated}
   */
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [search, setSearch] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  /*** Derived notes for listing (filtered by search) ***/
  const filteredNotes = useMemo(() => {
    if (!search) return notes;
    return notes.filter(
      n =>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.content.toLowerCase().includes(search.toLowerCase())
    );
  }, [notes, search]);

  // PUBLIC_INTERFACE
  function handleCreateNote() {
    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
      updated: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
    setIsEditing(true);
  }

  // PUBLIC_INTERFACE
  function handleSelectNote(id) {
    setSelectedNoteId(id);
    setIsEditing(false);
  }

  // PUBLIC_INTERFACE
  function handleDeleteNote(id) {
    setNotes(notes.filter(n => n.id !== id));
    if (selectedNoteId === id) {
      setSelectedNoteId(null);
      setIsEditing(false);
    }
  }

  // PUBLIC_INTERFACE
  function handleSaveNote(editedNote) {
    setNotes(
      notes.map(n => (n.id === editedNote.id ? { ...editedNote, updated: new Date().toISOString() } : n))
    );
    setIsEditing(false);
  }

  // PUBLIC_INTERFACE
  function handleEditNote(id) {
    setSelectedNoteId(id);
    setIsEditing(true);
  }

  // PUBLIC_INTERFACE
  function handleSearch(s) {
    setSearch(s);
  }

  const selectedNote = notes.find(n => n.id === selectedNoteId);

  return (
    <div className="notes-app-root" style={{ display: 'flex', height: '100vh', background: "var(--bg-primary)" }}>
      {/* Sidebar */}
      <Sidebar
        notes={filteredNotes}
        selectedNoteId={selectedNoteId}
        onSelectNote={handleSelectNote}
        onDeleteNote={handleDeleteNote}
      />
      <div className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar */}
        <TopBar
          onCreate={handleCreateNote}
          onSearch={handleSearch}
          search={search}
        />
        {/* Content Area */}
        <div className="note-content-area" style={{ flex: 1, minHeight: 0, padding: 0 }}>
          {isEditing && selectedNote ? (
            <NoteEditor
              key={selectedNote.id}
              note={selectedNote}
              onSave={handleSaveNote}
              onCancel={() => setIsEditing(false)}
            />
          ) : selectedNote ? (
            <NoteViewer
              note={selectedNote}
              onEdit={() => handleEditNote(selectedNote.id)}
              onDelete={() => handleDeleteNote(selectedNote.id)}
            />
          ) : (
            <div className="no-selection-hero" style={{ padding: '2.5rem', color: 'var(--color-secondary)', textAlign: 'center', marginTop: '4rem', opacity: 0.75, fontSize: '1.1rem' }}>
              Select or create a note to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
