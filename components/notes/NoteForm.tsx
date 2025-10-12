"use client";
import { useState, useRef, useEffect } from "react";

interface NoteFormProps {
  onAdd: (content: string) => void;
}

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
    <form onSubmit={handleSubmit} className="flex flex-col mb-4">
      <textarea
        ref={textareaRef}
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write a note..."
        className="input-base resize-none overflow-y-auto rounded-t-md h-24"
      />
      <button
        type="submit"
        className="btn-base border-t border-gray-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-b-md hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-colors"
      >
        Add Note
      </button>
    </form>
  );
}
