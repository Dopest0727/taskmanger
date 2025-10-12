"use client";
import { Note } from "./NotesApp";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

export default function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-3 rounded-md border-base bg-white dark:bg-stone-800"
        >
          <p className="whitespace-pre-wrap">{note.content}</p>
          <div className="text-xs text-stone-500 dark:text-stone-400 mt-2">
            {new Date(note.createdAt).toLocaleString()}
          </div>
          <button
            onClick={() => onDelete(note.id)}
            className="text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 mt-2"
          >
            Delete
          </button>
        </div>
      ))}

      {notes.length === 0 && (
        <p className="text-center text-gray-500 dark:text-stone-400 mt-6">
          No notes yet! Start writing 📝
        </p>
      )}
    </div>
  );
}
