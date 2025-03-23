
import { Link } from 'react-router-dom';
import { Company } from '@/lib/types';
import { Building2, Globe, Users } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Link 
      to={`/companies/${company.id}`}
      className="block p-5 rounded-xl border border-border/40 bg-card hover:shadow-md transition-all duration-200 hover:border-border"
    >
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-lg">{company.name}</h3>
          
          <div className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {company.description}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building2 className="h-3 w-3" />
              <span>{company.industry}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{company.size}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              <span>{company.location}</span>
            </div>
          </div>
          
          <div className="mt-3 text-xs font-medium">
            {company.jobs.length} open position{company.jobs.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
