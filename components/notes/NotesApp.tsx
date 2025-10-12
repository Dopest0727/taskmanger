"use client";
import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export interface Note {
  id: number;
  content: string;
  createdAt: string;
}

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (content: string) => {
    if (!content.trim()) return;
    const newNote: Note = {
      id: Date.now(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: number) =>
    setNotes(notes.filter((note) => note.id !== id));

  return (
    <div className="app-container">
      <h1 className="text-3xl font-semibold mb-6 text-center tracking-tight">
        Maurii Notes
      </h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
