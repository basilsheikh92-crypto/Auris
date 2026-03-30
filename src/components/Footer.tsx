import { Link } from "react-router-dom";
import { Headphones, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-studio-900 pt-20 pb-10 border-t border-studio-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center">
                <Headphones className="w-4 h-4 text-gold-500" />
              </div>
              <span className="font-display text-lg font-bold tracking-wide text-white">
                AURIS<span className="text-gold-500">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Premium audiobook production studio bringing stories to life with world-class narrators and cinematic sound design.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-studio-800 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-studio-700 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-studio-800 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-studio-700 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-studio-800 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:bg-studio-700 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/authors" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">Audiobook Production</Link></li>
              <li><Link to="/publishers" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">For Publishers</Link></li>
              <li><Link to="/narrators" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">Voice Casting</Link></li>
              <li><Link to="/distribution" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">Global Distribution</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/catalog" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">Our Catalog</Link></li>
              <li><Link to="/case-studies" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-gold-400 text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Subscribe</h4>
            <p className="text-zinc-400 text-sm mb-4">Get the latest news on audiobook production and industry trends.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-studio-800 border border-studio-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500 w-full"
              />
              <button className="bg-gold-500 text-studio-950 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gold-400 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-studio-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Auris Audio Production. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-zinc-500 hover:text-zinc-300 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-zinc-500 hover:text-zinc-300 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
