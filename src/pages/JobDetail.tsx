
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, CalendarDays, Clock, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import { Job } from '@/lib/types';
import { getJobById, getCompanyById } from '@/lib/mockData';
import { formatDistanceToNow } from 'date-fns';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const jobData = getJobById(id);
      setJob(jobData || null);
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="h-64 bg-gray-200 rounded mb-4"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <p className="mb-6">The job you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/">Back to Jobs</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  const company = getCompanyById(job.companyId);
  const postedDate = new Date(job.postedDate);
  const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Jobs
              </Link>
            </Button>
            
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0 bg-white p-2 border">
                <img 
                  src={job.logo} 
                  alt={`${job.company} logo`} 
                  className="h-full w-full object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <div className="mt-1 flex items-center gap-2">
                  <Link 
                    to={`/companies/${job.companyId}`}
                    className="font-medium hover:underline"
                  >
                    {job.company}
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    Posted {timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Location</div>
                <div className="text-sm text-muted-foreground">{job.location}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Job Type</div>
                <div className="text-sm text-muted-foreground">{job.type}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Work Type</div>
                <div className="text-sm text-muted-foreground">{job.locationType}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Job Details</h2>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                {job.salary}
              </Badge>
            </div>
            
            <div className="prose max-w-none">
              <p>{job.description}</p>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {company && (
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="font-medium">{company.name}</h3>
                  <Link 
                    to={`/companies/${company.id}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View company profile
                  </Link>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {company.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>{company.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span>Founded {company.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Apply for this position
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetail;
