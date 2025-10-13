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
    onAdd(newNote);
    setNewNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-25 flex-col mb-3">
      <textarea
        ref={textareaRef}
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write a note..."
        className="input-base resize-none overflow-y-auto rounded-t-md h-24"
      />
      <button
        type="submit"
        className="btn-base border-t border-gray-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-b-md bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 transition-colors"
      >
        Add Note
      </button>
    </form>
  );
}
