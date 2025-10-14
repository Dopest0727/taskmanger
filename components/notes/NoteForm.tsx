"use client";
import { useState, useRef, useEffect } from "react";
import { NoteFormProps } from "@/types/note";

export default function NoteForm({ onAdd }: NoteFormProps) {
  const [newNote, setNewNote] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [newNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    onAdd(newNote.trim());
    setNewNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md mb-4"
    >
      <textarea
        ref={textareaRef}
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add new note"
        className="input-accent-note resize-none overflow-y-auto rounded-t-md p-3"
        rows={4}
      />
      <button type="submit" className="btn-base-sm btn-accent rounded-b-md">
        Add Note
      </button>
    </form>
  );
}
