interface ProjectItem {
  id: number;
  name: string;
  image: string;
  projectSummary: string;
  client: string;
  projectDetails: string;
  completedDate: string;
  services: string[];
}

export default ProjectItem