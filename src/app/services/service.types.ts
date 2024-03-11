export enum Status {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  IN_REVIEW = 'IN_REVIEW',
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export interface TaskValues {
  id: number;
  name: string;
  description?: string;
  executor: string;
  deadline: string;
  status: Status;
  priority: Priority;
}
