"use client";
import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { Note } from "@/types/note";

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

  const editNote = (id: number, newContent: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      )
    );
  };

  return (
    <div className="app-container flex flex-col items-center justify-start text-primary">
      <h1 className="text-3xl font-semibold mb-6 text-center tracking-tight">
        Maurii Notes
      </h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
}
