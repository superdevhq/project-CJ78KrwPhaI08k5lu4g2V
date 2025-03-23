
export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';

export type JobLocation = 'Remote' | 'Hybrid' | 'On-site';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  locationType: JobLocation;
  type: JobType;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  logo: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;
  logo: string;
  location: string;
  industry: string;
  size: string;
  founded: string;
  jobs: string[]; // Job IDs
}
