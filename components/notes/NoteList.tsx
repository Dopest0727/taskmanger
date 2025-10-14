"use client";
import { useState } from "react";
import { Note } from "@/types/note";
import { Edit2, Trash2 } from "lucide-react";
import { NoteListProps } from "@/types/note";

export default function NoteList({ notes, onDelete, onEdit }: NoteListProps) {
  return (
    <div className="w-full max-w-md flex flex-col gap-3">
      {notes.length === 0 && (
        <p className="text-center text-muted mt-6">Add a note!</p>
      )}
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
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
    <div className="card-base card-light p-3 flex flex-col transition-colors duration-200">
      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={() => {
            onEdit(note.id, editText.trim());
            setIsEditing(false);
          }}
          onKeyDown={handleKeyDown}
          className="input-accent w-full p-2 rounded focus:outline-none"
          autoFocus
          rows={3}
        />
      ) : (
        <div className="flex justify-between items-start gap-2">
          <p className="flex-1 text-primary whitespace-pre-wrap">
            {note.content}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 hover:bg-stone-200 light:hover:bg-gray-200 rounded transition-colors duration-200"
            >
              <Edit2 className="w-5 h-5 text-stone-400 light:text-stone-900" />
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="p-1 hover:bg-red-200 dark:hover:bg-red-700 rounded transition-colors duration-200"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      )}
      <div className="text-xs text-muted mt-2">
        {new Date(note.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
