import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, DollarSign, Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Authors() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Maximize Your Royalties with <span className="text-gold-500 italic">Premium Audio</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Audiobooks are the fastest-growing segment in publishing. Don't leave money on the table. We handle the entire production process so you can focus on writing your next bestseller.
            </p>
            <Link to="/submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-studio-950 font-bold text-lg hover:bg-gold-400 transition-all hover:scale-105">
              Start Your Audiobook Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Audiobooks Matter */}
      <section className="py-20 bg-studio-900 border-y border-studio-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-studio-800 rounded-2xl flex items-center justify-center mb-6 border border-studio-700">
                <TrendingUp className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Explosive Growth</h3>
              <p className="text-zinc-400">Audiobook revenue has grown by double digits for 10 consecutive years. It's where the readers are moving.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-studio-800 rounded-2xl flex items-center justify-center mb-6 border border-studio-700">
                <DollarSign className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Higher Margins</h3>
              <p className="text-zinc-400">Audiobooks command higher retail prices than eBooks, leading to significantly higher royalty payouts per sale.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-studio-800 rounded-2xl flex items-center justify-center mb-6 border border-studio-700">
                <Headphones className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">New Audiences</h3>
              <p className="text-zinc-400">Reach commuters, multitaskers, and visually impaired readers who exclusively consume audio content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Royalty Model */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Transparent Pricing. <br/>You Keep Your Rights.</h2>
              <p className="text-lg text-zinc-400 mb-8">
                Unlike traditional publishers that take your audio rights for life and pay 10% royalties, our model puts the author first.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Keep 100% of your intellectual property rights",
                  "Keep up to 80% of net royalties (depending on distribution)",
                  "No hidden fees or surprise costs",
                  "Detailed monthly sales reporting across all channels"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-studio-900 p-8 md:p-12 rounded-3xl border border-studio-800 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold mb-8 text-center">Production Packages</h3>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-studio-950 border border-studio-800 hover:border-gold-500/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">Pay-Per-Finished-Hour</h4>
                    <span className="text-gold-500 font-bold">From $300/PFH</span>
                  </div>
                  <p className="text-sm text-zinc-400">You pay upfront for production. You keep 100% of your royalties.</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-studio-950 border border-studio-800 hover:border-gold-500/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">Royalty Share Plus</h4>
                    <span className="text-gold-500 font-bold">From $150/PFH</span>
                  </div>
                  <p className="text-sm text-zinc-400">Lower upfront cost. Share royalties with the narrator for 7 years.</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/submit" className="text-gold-500 hover:text-gold-400 font-semibold flex items-center justify-center gap-2">
                  Get a custom quote for your book <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
