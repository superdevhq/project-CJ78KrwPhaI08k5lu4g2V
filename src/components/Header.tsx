
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M12 16h3.5a3.5 3.5 0 1 1 0 7H12v-7z" />
          </svg>
          <span className="font-semibold text-xl">JobBoard</span>
        </Link>
        
        <nav className="ml-auto flex items-center gap-4">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Jobs
          </Link>
          <Link to="/companies" className="text-sm font-medium transition-colors hover:text-primary">
            Companies
          </Link>
          <Button variant="ghost" size="sm">
            Post a Job
          </Button>
          <Button size="sm">Sign In</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
