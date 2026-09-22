export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  shortBio: string;
  fullBio: string;
}

export interface SkillItem {
  name: string;
  category: 'wordpress' | 'react' | 'core' | 'marketing';
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  yearsLabel: string;
  period: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  technology: 'React.js' | 'WordPress' | 'WordPress + Elementor';
  category: 'all' | 'react' | 'wordpress';
  description: string;
  keyFeatures: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}
