export interface IProject {
  title: string;
  descriptionKey: string;
  tasksKey: string;
  frontTech: Tech[];
  backTech: Tech[];
  link?: string;
  image?: string;
}