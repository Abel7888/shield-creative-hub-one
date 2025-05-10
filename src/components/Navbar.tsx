
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl">DataShield Partners</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
          <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
          <a href="#products" className="text-sm font-medium hover:text-primary">Products</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
          <Button variant="outline" className="ml-4">Media Kit</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="container md:hidden py-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-sm font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#products" className="text-sm font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <Button variant="outline" className="w-full">Media Kit</Button>
          </nav>
        </div>
      )}
    </header>
  );
};
