
import { Link } from 'react-router-dom';
import { Job } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const postedDate = new Date(job.postedDate);
  const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true });
  
  return (
    <Link 
      to={`/jobs/${job.id}`}
      className="block p-5 rounded-xl border border-border/40 bg-card hover:shadow-md transition-all duration-200 hover:border-border"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
          <img 
            src={job.logo} 
            alt={`${job.company} logo`} 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="font-medium text-lg truncate">{job.title}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="font-normal">
                {job.type}
              </Badge>
              <Badge variant="outline" className="font-normal">
                {job.locationType}
              </Badge>
            </div>
          </div>
          
          <div className="mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="font-medium text-foreground">{job.company}</span>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-3 w-3" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium">{job.salary}</span>
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <span>Posted {timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
