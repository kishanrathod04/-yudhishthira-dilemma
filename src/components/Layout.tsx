import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="bg-background-dark p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-primary font-bold text-xl">Yudhishthira's Dilemma</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/story" className="hover:text-primary transition-colors">Interactive Story</Link>
            <Link to="/results" className="hover:text-primary transition-colors">Results</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}