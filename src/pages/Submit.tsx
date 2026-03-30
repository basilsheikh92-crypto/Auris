import { UploadCloud, CheckCircle2, ArrowRight } from "lucide-react";
import React, { useState } from "react";

export function Submit() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto bg-studio-900 p-12 rounded-3xl border border-studio-800">
          <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-gold-500" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Manuscript Received</h2>
          <p className="text-zinc-400 mb-8">
            Thank you for trusting Auris with your story. Our casting directors will review your submission and reach out within 48 hours with narrator auditions.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 rounded-full bg-gold-500 text-studio-950 font-bold hover:bg-gold-400 transition-all w-full"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Submit Your Book</h1>
            <p className="text-xl text-zinc-400">
              Take the first step toward a premium audiobook production.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-studio-900 p-8 md:p-12 rounded-3xl border border-studio-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">First Name</label>
                <input required type="text" className="w-full bg-studio-950 border border-studio-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Last Name</label>
                <input required type="text" className="w-full bg-studio-950 border border-studio-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
              <input required type="email" className="w-full bg-studio-950 border border-studio-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="jane@example.com" />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-zinc-300 mb-2">Book Title</label>
              <input required type="text" className="w-full bg-studio-950 border border-studio-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="The Great Novel" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Genre</label>
                <select required className="w-full bg-studio-950 border border-studio-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option value="">Select a genre...</option>
                  <option value="fiction">Fiction</option>
                  <option value="non-fiction">Non-Fiction</option>
                  <option value="sci-fi">Sci-Fi / Fantasy</option>
                  <option value="romance">Romance</option>
                  <option value="thriller">Thriller / Mystery</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Word Count</label>
                <input required type="number" className="w-full bg-studio-950 border border-studio-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="80000" />
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-medium text-zinc-300 mb-2">Upload Manuscript (Optional)</label>
              <div className="border-2 border-dashed border-studio-700 rounded-xl p-8 text-center hover:border-gold-500 transition-colors cursor-pointer bg-studio-950">
                <UploadCloud className="w-10 h-10 text-zinc-500 mx-auto mb-4" />
                <p className="text-zinc-300 font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-zinc-500 text-sm">PDF, DOCX, or EPUB (Max 10MB)</p>
              </div>
            </div>

            <button type="submit" className="w-full px-8 py-4 rounded-xl bg-gold-500 text-studio-950 font-bold text-lg hover:bg-gold-400 transition-all flex items-center justify-center gap-2">
              Submit for Review <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-zinc-500 text-sm mt-4">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
