
import { useState } from 'react';
import Header from '@/components/Header';
import SearchFilters from '@/components/SearchFilters';
import JobCard from '@/components/JobCard';
import { mockJobs } from '@/lib/mockData';
import { Job, JobLocation, JobType } from '@/lib/types';

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  
  const handleSearch = (filters: {
    query: string;
    location: string;
    type: JobType | '';
    locationType: JobLocation | '';
  }) => {
    const filtered = mockJobs.filter(job => {
      // Filter by search query (job title or company)
      const matchesQuery = !filters.query || 
        job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.query.toLowerCase());
      
      // Filter by location
      const matchesLocation = !filters.location || 
        job.location.toLowerCase().includes(filters.location.toLowerCase());
      
      // Filter by job type
      const matchesType = !filters.type || job.type === filters.type;
      
      // Filter by location type
      const matchesLocationType = !filters.locationType || 
        job.locationType === filters.locationType;
      
      return matchesQuery && matchesLocation && matchesType && matchesLocationType;
    });
    
    setFilteredJobs(filtered);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Find your next opportunity</h1>
            <p className="text-lg text-muted-foreground">
              Discover thousands of jobs from top companies around the world
            </p>
          </div>
          
          <SearchFilters onSearch={handleSearch} />
          
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-medium">
                    {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search filters to find more results
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
