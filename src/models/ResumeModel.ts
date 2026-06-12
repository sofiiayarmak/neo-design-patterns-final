export interface HeaderModel {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface ProjectModel {
  name: string;
  description: string;
  technologies: string[];
  isRecent: boolean;
}

export interface ExperienceModel {
  company: string;
  position: string;
  period: string;
  projects: ProjectModel[];
}

export interface EducationModel {
  institution: string;
  degree: string;
  field: string;
  year: string;
}

export interface SkillsModel {
  technical: string[];
  soft: string[];
}

export interface ResumeModel {
  header: HeaderModel;
  summary: string;
  experience: ExperienceModel[];
  education: EducationModel[];
  skills: SkillsModel;
}
