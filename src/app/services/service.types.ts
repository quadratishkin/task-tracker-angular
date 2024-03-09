export enum TableType {
  BOARD = 'BOARD',
  LIST = 'LIST',
}

export interface TaskValues {
  id: number;
  name: string;
  excutor: string;
  deadline: string;
  dependencies: TaskValues[] | null;
  description?: string;
  isLiked: boolean;
}

export interface AddTask {
  name: string;
  excutor: string;
  deadline: string;
  dependencies: TaskValues[] | null;
  description?: string;
}
