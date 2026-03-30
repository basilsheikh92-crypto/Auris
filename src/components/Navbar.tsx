import { Link, useLocation } from "react-router-dom";
import { Headphones, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "For Authors", path: "/authors" },
    { name: "Narrators", path: "/narrators" },
    { name: "Catalog", path: "/catalog" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-studio-950/80 backdrop-blur-md border-studio-800 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
            <Headphones className="w-5 h-5 text-gold-500" />
          </div>
          <span className="font-display text-xl font-bold tracking-wide text-white">
            AURIS<span className="text-gold-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold-400",
                location.pathname === link.path
                  ? "text-gold-500"
                  : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/submit"
            className="px-5 py-2.5 rounded-full bg-gold-500 text-studio-950 font-semibold text-sm hover:bg-gold-400 transition-colors"
          >
            Submit Your Book
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-studio-900 border-b border-studio-800 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-zinc-300 hover:text-gold-400 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/submit"
            className="px-5 py-3 rounded-lg bg-gold-500 text-studio-950 font-semibold text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Submit Your Book
          </Link>
        </div>
      )}
    </header>
  );
}
