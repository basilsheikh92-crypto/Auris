import { motion } from "motion/react";
import { ArrowRight, Star, Mic, BookOpen, Globe2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { AudioPlayer } from "../components/AudioPlayer";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-studio-950 via-studio-950/90 to-studio-950"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-studio-800/50 border border-studio-700 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-sm text-zinc-300 font-medium tracking-wide uppercase">Premium Audiobook Production</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              Transform Your Book Into a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 italic">Cinematic Audio Experience</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We partner with bestselling authors and top-tier narrators to produce studio-quality audiobooks distributed globally to millions of listeners.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/submit" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 text-studio-950 font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Get Your Audiobook Produced <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/catalog" className="w-full sm:w-auto px-8 py-4 rounded-full bg-studio-800 text-white font-bold text-lg hover:bg-studio-700 transition-all border border-studio-700 flex items-center justify-center gap-2">
                Listen to Samples
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <section className="py-10 border-y border-studio-800 bg-studio-900/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-zinc-500 font-medium uppercase tracking-widest mb-8">Global Distribution Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented by text for now, ideally SVGs */}
            <div className="text-2xl font-bold font-sans tracking-tighter">audible</div>
            <div className="text-2xl font-bold font-sans tracking-tighter flex items-center gap-1"><span className="w-6 h-6 rounded-full bg-current"></span> Spotify</div>
            <div className="text-2xl font-bold font-sans tracking-tighter">Apple Books</div>
            <div className="text-2xl font-bold font-sans tracking-tighter">Google Play</div>
            <div className="text-2xl font-bold font-sans tracking-tighter">Storytel</div>
          </div>
        </div>
      </section>

      {/* Interactive Player Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Hear the Difference Quality Makes.</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Our award-winning sound engineers and voice directors work meticulously to ensure every breath, pause, and inflection serves the story. Experience our studio-grade production.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-studio-900 p-6 rounded-2xl border border-studio-800">
                  <Mic className="w-8 h-8 text-gold-500 mb-4" />
                  <h4 className="text-white font-bold mb-2">SAG-AFTRA Narrators</h4>
                  <p className="text-sm text-zinc-400">Access to the industry's top voice talent.</p>
                </div>
                <div className="bg-studio-900 p-6 rounded-2xl border border-studio-800">
                  <Award className="w-8 h-8 text-gold-500 mb-4" />
                  <h4 className="text-white font-bold mb-2">Award-Winning</h4>
                  <p className="text-sm text-zinc-400">Multiple Audie Award nominations.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/20 to-purple-500/20 blur-3xl rounded-full opacity-50"></div>
              <div className="relative space-y-6">
                <AudioPlayer 
                  title="The Midnight Library" 
                  author="Matt Haig" 
                  narrator="Carey Mulligan"
                  coverUrl="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
                />
                <AudioPlayer 
                  title="Dune" 
                  author="Frank Herbert" 
                  narrator="Scott Brick"
                  coverUrl="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop"
                  className="ml-0 md:ml-8"
                />
                <AudioPlayer 
                  title="Project Hail Mary" 
                  author="Andy Weir" 
                  narrator="Ray Porter"
                  coverUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-studio-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">From Manuscript to Masterpiece</h2>
            <p className="text-zinc-400 text-lg">Our streamlined production process takes the stress out of audiobook creation, letting you focus on what you do best: writing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-gold-500" />,
                step: "01",
                title: "Submit & Cast",
                desc: "Submit your manuscript. We'll audition top-tier narrators that perfectly match your characters and tone."
              },
              {
                icon: <Mic className="w-8 h-8 text-gold-500" />,
                step: "02",
                title: "Record & Produce",
                desc: "Our directors guide the narrator while our engineers edit, mix, and master the audio to ACX/Findaway standards."
              },
              {
                icon: <Globe2 className="w-8 h-8 text-gold-500" />,
                step: "03",
                title: "Distribute & Earn",
                desc: "We distribute your audiobook to 40+ retail and library platforms globally, maximizing your reach and royalties."
              }
            ].map((item, i) => (
              <div key={i} className="bg-studio-950 p-8 rounded-3xl border border-studio-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-6xl font-display font-bold text-studio-800/50 group-hover:text-gold-500/10 transition-colors">
                  {item.step}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-studio-900 flex items-center justify-center mb-6 relative z-10 border border-studio-800">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-gold-500 fill-gold-500" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium italic leading-tight mb-10">
              "Partnering with Auris was the best decision for my publishing career. The production quality blew me away, and my audiobook revenue surpassed my ebook sales within three months."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Author" className="w-14 h-14 rounded-full object-cover border-2 border-gold-500" />
              <div className="text-left">
                <div className="font-bold text-white">Sarah Jenkins</div>
                <div className="text-sm text-zinc-400">NYT Bestselling Author of 'The Silent Echo'</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-studio-900 to-studio-950 rounded-[3rem] p-12 md:p-20 text-center border border-studio-800 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-gold-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 relative z-10">Ready to Give Your Story a Voice?</h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of successful authors who trust Auris to produce and distribute their audiobooks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/submit" className="px-8 py-4 rounded-full bg-gold-500 text-studio-950 font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105">
                Submit Your Manuscript
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-full bg-transparent text-white font-bold text-lg hover:bg-studio-800 transition-all border border-studio-700">
                Talk to a Producer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
