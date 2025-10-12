export interface Note {
  id: number;
  content: string;
  createdAt: string;
}

export interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
}

export interface NoteFormProps {
  onAdd: (content: string) => void;
}
