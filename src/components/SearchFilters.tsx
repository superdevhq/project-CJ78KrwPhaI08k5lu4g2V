
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { JobLocation, JobType } from '@/lib/types';

interface SearchFiltersProps {
  onSearch: (filters: {
    query: string;
    location: string;
    type: JobType | '';
    locationType: JobLocation | '';
  }) => void;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [filters, setFilters] = useState({
    query: '',
    location: '',
    type: '' as JobType | '',
    locationType: '' as JobLocation | '',
  });

  const handleChange = (field: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm border p-4 mb-8 animate-in fade-in-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Job title or keyword"
            className="pl-9"
            value={filters.query}
            onChange={(e) => handleChange('query', e.target.value)}
          />
        </div>
        
        <Input
          placeholder="Location"
          value={filters.location}
          onChange={(e) => handleChange('location', e.target.value)}
        />
        
        <Select
          value={filters.type}
          onValueChange={(value) => handleChange('type', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Types</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="Freelance">Freelance</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
          </SelectContent>
        </Select>
        
        <Select
          value={filters.locationType}
          onValueChange={(value) => handleChange('locationType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Work Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Work Types</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
            <SelectItem value="On-site">On-site</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Search Jobs
        </Button>
      </div>
    </form>
  );
};

export default SearchFilters;
