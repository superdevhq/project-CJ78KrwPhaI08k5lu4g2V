
import { Company, Job } from './types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    companyId: '1',
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications.',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern CSS frameworks',
      'Understanding of web accessibility standards'
    ],
    postedDate: '2023-05-15',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignStudio',
    companyId: '2',
    location: 'New York, NY',
    locationType: 'On-site',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Join our design team to create beautiful and functional user experiences for our clients.',
    requirements: [
      '3+ years of product design experience',
      'Proficiency in Figma and design systems',
      'Understanding of user research and testing',
      'Portfolio showcasing previous work'
    ],
    postedDate: '2023-05-20',
    logo: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '3',
    title: 'Backend Engineer',
    company: 'CloudSystems',
    companyId: '3',
    location: 'Remote',
    locationType: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'We need a skilled Backend Engineer to help scale our cloud infrastructure and services.',
    requirements: [
      'Experience with Node.js and TypeScript',
      'Knowledge of cloud services (AWS, GCP, or Azure)',
      'Understanding of database design and optimization',
      'Experience with microservices architecture'
    ],
    postedDate: '2023-05-18',
    logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBsb2dvfGVufDB8fDB8fHww'
  },
  {
    id: '4',
    title: 'Marketing Specialist',
    company: 'GrowthHackers',
    companyId: '4',
    location: 'Chicago, IL',
    locationType: 'Hybrid',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Join our marketing team to help grow our brand and reach new customers.',
    requirements: [
      '2+ years of marketing experience',
      'Experience with digital marketing channels',
      'Data-driven approach to marketing',
      'Excellent communication skills'
    ],
    postedDate: '2023-05-22',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'TechCorp',
    companyId: '1',
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'We are looking for a DevOps Engineer to help us build and maintain our infrastructure.',
    requirements: [
      'Experience with CI/CD pipelines',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Experience with infrastructure as code (Terraform, CloudFormation)',
      'Understanding of cloud services (AWS, GCP, or Azure)'
    ],
    postedDate: '2023-05-25',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '6',
    title: 'UX Researcher',
    company: 'DesignStudio',
    companyId: '2',
    location: 'Remote',
    locationType: 'Remote',
    type: 'Contract',
    salary: '$50 - $70 per hour',
    description: 'We are looking for a UX Researcher to help us understand our users and improve our products.',
    requirements: [
      'Experience conducting user research',
      'Knowledge of research methodologies',
      'Ability to analyze and synthesize research findings',
      'Excellent communication skills'
    ],
    postedDate: '2023-05-28',
    logo: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  }
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    description: 'TechCorp is a leading technology company specializing in cloud solutions and enterprise software. We help businesses transform their operations through innovative technology.',
    website: 'https://techcorp.example.com',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D',
    location: 'San Francisco, CA',
    industry: 'Technology',
    size: '1000-5000 employees',
    founded: '2005',
    jobs: ['1', '5']
  },
  {
    id: '2',
    name: 'DesignStudio',
    description: 'DesignStudio is a creative agency that helps brands tell their stories through beautiful design and thoughtful user experiences.',
    website: 'https://designstudio.example.com',
    logo: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    location: 'New York, NY',
    industry: 'Design',
    size: '50-200 employees',
    founded: '2010',
    jobs: ['2', '6']
  },
  {
    id: '3',
    name: 'CloudSystems',
    description: 'CloudSystems provides cloud infrastructure and services to help businesses scale their operations and reduce costs.',
    website: 'https://cloudsystems.example.com',
    logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBsb2dvfGVufDB8fDB8fHww',
    location: 'Seattle, WA',
    industry: 'Technology',
    size: '200-500 employees',
    founded: '2012',
    jobs: ['3']
  },
  {
    id: '4',
    name: 'GrowthHackers',
    description: 'GrowthHackers is a marketing agency that helps businesses grow through data-driven marketing strategies.',
    website: 'https://growthhackers.example.com',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    location: 'Chicago, IL',
    industry: 'Marketing',
    size: '10-50 employees',
    founded: '2015',
    jobs: ['4']
  }
];

// Helper function to get a job by ID
export const getJobById = (id: string): Job | undefined => {
  return mockJobs.find(job => job.id === id);
};

// Helper function to get a company by ID
export const getCompanyById = (id: string): Company | undefined => {
  return mockCompanies.find(company => company.id === id);
};

// Helper function to get jobs by company ID
export const getJobsByCompanyId = (companyId: string): Job[] => {
  return mockJobs.filter(job => job.companyId === companyId);
};
