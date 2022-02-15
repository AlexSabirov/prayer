export interface LoginBody {
  email: string;
  password: string;
}

export interface CreateColumnBody {
  title: string;
  description: string;
}

export interface UpdateColumnBody {
  title: string;
  description: string;
  id: number;
}
