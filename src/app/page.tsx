import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="space-y-8 text-center max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-border/40 bg-muted/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
          Building Products That <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400">Scale.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground text-balance mx-auto max-w-2xl leading-relaxed">
          I'm Hitesh, a Product Manager specializing in zero-to-one launches, growth strategy, and scaling user experiences for modern tech companies.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="/work" 
            className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Briefcase className="w-4 h-4" />
            View Portfolio
          </Link>
          <Link 
            href="/services" 
            className="flex items-center justify-center gap-2 bg-muted/50 text-foreground border border-border/40 px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Hire for Consulting
          </Link>
        </div>
      </div>
      
      {/* Featured Section Preview */}
      <div className="mt-32 w-full text-left">
        <div className="flex items-center justify-between mb-8 border-b border-border/40 pb-4">
          <h2 className="text-2xl font-bold">Featured Work</h2>
          <Link href="/work" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/work/uber-rearchitecture" className="group block h-full">
            <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 group-hover:-translate-y-1">
                <ArrowRight className="w-5 h-5" />
              </div>
              <p className="text-xs text-muted-foreground font-mono mb-3">2025-10-12</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-colors">Uber Rearchitecture: Scaling the Rider App</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">How we revamped the rider experience, focusing on micro-interactions and reducing perceived latency by 40%.</p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">Product Strategy</span>
                <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">Growth</span>
                <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">Mobile</span>
              </div>
            </div>
          </Link>
          {/* We will map real case studies here later */}
          <div className="border border-dashed border-border/60 rounded-xl p-6 h-full flex items-center justify-center text-muted-foreground text-sm italic">
            More studies coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}
