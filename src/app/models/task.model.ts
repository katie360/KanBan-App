export interface Task {
  title: string;
  description?: string;
  attachments?: string[];
  dueDate?: Date;
}

export interface Column {
  title: string;
  tasks: Task[];
}
