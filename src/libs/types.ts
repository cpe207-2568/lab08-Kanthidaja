// "/libs/types.ts"

interface SidebarProps {
  userName: string;
  type?: "admin" |"student"
}

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

interface FooterProps  {
  year: string;
  fullName: string;
  studentId: string | number;
};
export type { FooterProps };
export type { SidebarProps };
export type { TaskCardProps };