import { Play, Info } from "lucide-react";

const CATEGORIES = [
  {
    title: "Trending Now",
    books: [
      { id: 1, title: "The Silent Echo", author: "Sarah Jenkins", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" },
      { id: 2, title: "Neon Gods", author: "Katee Robert", cover: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=400&auto=format&fit=crop" },
      { id: 3, title: "Atomic Habits", author: "James Clear", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop" },
      { id: 4, title: "Dune", author: "Frank Herbert", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop" },
      { id: 5, title: "Project Hail Mary", author: "Andy Weir", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" },
    ]
  },
  {
    title: "Award-Winning Productions",
    books: [
      { id: 6, title: "The Midnight Library", author: "Matt Haig", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" },
      { id: 7, title: "Sapiens", author: "Yuval Noah Harari", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop" },
      { id: 8, title: "Educated", author: "Tara Westover", cover: "https://images.unsplash.com/photo-1589998059171-989d887df466?q=80&w=400&auto=format&fit=crop" },
      { id: 9, title: "Becoming", author: "Michelle Obama", cover: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=400&auto=format&fit=crop" },
      { id: 10, title: "Born a Crime", author: "Trevor Noah", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" },
    ]
  },
  {
    title: "Epic Fantasy",
    books: [
      { id: 11, title: "The Way of Kings", author: "Brandon Sanderson", cover: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=400&auto=format&fit=crop" },
      { id: 12, title: "Name of the Wind", author: "Patrick Rothfuss", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop" },
      { id: 13, title: "Eye of the World", author: "Robert Jordan", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop" },
      { id: 14, title: "Game of Thrones", author: "George R.R. Martin", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" },
      { id: 15, title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" },
    ]
  }
];

export function Catalog() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Discover Great Audio</h1>
        <p className="text-zinc-400 text-lg">Explore our catalog of premium productions.</p>
      </div>

      <div className="space-y-16">
        {CATEGORIES.map((category, idx) => (
          <div key={idx} className="pl-6 md:pl-12">
            <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
            
            <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar pr-6">
              {category.books.map((book) => (
                <div key={book.id} className="w-48 md:w-56 shrink-0 group relative">
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                      <button className="w-12 h-12 rounded-full bg-gold-500 text-studio-950 flex items-center justify-center hover:bg-gold-400 hover:scale-110 transition-all">
                        <Play className="w-5 h-5 ml-1" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-studio-800 text-white flex items-center justify-center hover:bg-studio-700 hover:scale-110 transition-all border border-studio-700">
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold text-white truncate">{book.title}</h3>
                  <p className="text-sm text-zinc-400 truncate">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
