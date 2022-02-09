export interface Board {
  isAuthorized: boolean;
  token: string;
  columns: Record<string, Column>;
}

export interface Column {
  id: string;
  title: string;
  prayers: Record<string, Prayer>;
}

export interface Prayer {
  id: string;
  title: string;
  checked: boolean;
  comments: Record<string, Comment>;
}

export interface Comment {
  id: string;
  title: string;
}
