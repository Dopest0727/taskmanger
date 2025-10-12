"use client";
import { useState } from "react";
import { Note } from "@/types/note";
import { Edit2, Trash2 } from "lucide-react";
import { NoteListProps } from "@/types/note";

export default function NoteList({ notes, onDelete, onEdit }: NoteListProps) {
  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}

      {notes.length === 0 && (
        <p className="text-center text-gray-500 dark:text-stone-400 mt-6">
          Add a note!
        </p>
      )}
    </div>
  );
}

interface NoteItemProps {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
}

function NoteItem({ note, onDelete, onEdit }: NoteItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(note.content);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onEdit(note.id, editText.trim());
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setEditText(note.content);
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item flex flex-col p-3 rounded-md border-base bg-white dark:bg-stone-800 transition-colors duration-200">
      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={() => {
            onEdit(note.id, editText.trim());
            setIsEditing(false);
          }}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-gray-300 rounded dark:bg-stone-700 dark:border-stone-600 dark:text-stone-100 focus:outline-none"
          autoFocus
          rows={3}
        />
      ) : (
        <div className="flex justify-between items-start">
          <p className="whitespace-pre-wrap flex-1">{note.content}</p>
          <div className="flex gap-2 ml-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 hover:bg-stone-200 dark:hover:bg-stone-700 rounded transition-colors duration-200"
            >
              <Edit2 className="w-5 h-5 text-stone-700 dark:text-stone-200" />
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="p-1 hover:bg-red-200 dark:hover:bg-red-700 rounded transition-colors duration-200"
            >
              <Trash2 className="w-5 h-5 text-stone-700 dark:text-red-400" />
            </button>
          </div>
        </div>
      )}

      <div className="text-xs text-stone-500 dark:text-stone-400 mt-2">
        {new Date(note.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
