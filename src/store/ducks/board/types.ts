export interface Board {
  columns: Record<string, Column>;
}

export interface Column {
  id: number;
  title: string;
  discriptions: string | null;
  userId: number;
}

export interface Prayer {
  id: number;
  title: string;
  checked: boolean;
  comments: Record<string, Comment>;
}

export interface Comment {
  id: number;
  title: string;
}
