
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, CalendarDays, Globe, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import JobCard from '@/components/JobCard';
import { Company, Job } from '@/lib/types';
import { getCompanyById, getJobsByCompanyId } from '@/lib/mockData';

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const companyData = getCompanyById(id);
      setCompany(companyData || null);
      
      if (companyData) {
        const companyJobs = getJobsByCompanyId(companyData.id);
        setJobs(companyJobs);
      }
      
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container py-8">
          <div className="max-w-4xl mx-auto">
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
  
  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
            <p className="mb-6">The company you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/">Back to Jobs</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
          
          <div className="bg-white rounded-xl border p-6 mb-8">
            <div className="flex items-start gap-6">
              <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0 bg-white p-2 border">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="h-full w-full object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{company.name}</h1>
                <p className="mt-2 text-muted-foreground">{company.description}</p>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Industry</div>
                      <div className="text-sm text-muted-foreground">{company.industry}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Company Size</div>
                      <div className="text-sm text-muted-foreground">{company.size}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">{company.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Founded</div>
                      <div className="text-sm text-muted-foreground">{company.founded}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{company.website}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Open Positions at {company.name}
            </h2>
            
            {jobs.length > 0 ? (
              <div className="space-y-4">
                {jobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border">
                <h3 className="text-lg font-medium mb-2">No open positions</h3>
                <p className="text-muted-foreground">
                  This company doesn't have any open positions at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyProfile;
