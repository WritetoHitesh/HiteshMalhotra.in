import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import { getCaseStudies } from "@/lib/mdx";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Home() {
  // Fetch up to 4 of the most recent case studies for the premium list view
  const featuredStudies = getCaseStudies().slice(0, 4);

  return (
    <StaggerContainer className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden px-6">
      {/* Bespoke Core AI Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="w-full text-center max-w-[90vw] z-10 space-y-10 mt-20">
        <StaggerItem>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-foreground mr-3 shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></span>
            Availability: Accepting New Opportunities
          </div>
        </StaggerItem>
        
        <StaggerItem>
          <h1 className="text-fluid-hero font-bold tracking-tighter text-balance uppercase flex flex-col items-center">
            <span>Building Products</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">That Scale.</span>
          </h1>
        </StaggerItem>
        
        <StaggerItem>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mx-auto max-w-3xl leading-relaxed font-light tracking-wide">
            I'm Hitesh, an AI Product Manager specializing in zero-to-one launches, growth strategy, and scaling user experiences for modern tech companies.
          </p>
        </StaggerItem>
        
        <StaggerItem>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <MagneticButton intensity={0.2}>
              <Link 
                href="/work" 
                className="flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 rounded-full text-sm tracking-widest uppercase transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto font-semibold"
              >
                <Briefcase className="w-4 h-4" />
                View Portfolio
              </Link>
            </MagneticButton>
            <MagneticButton intensity={0.2}>
              <Link 
                href="/services" 
                className="flex items-center justify-center gap-3 bg-transparent text-foreground border border-white/20 px-10 py-5 rounded-full text-sm tracking-widest uppercase transition-colors hover:bg-white/5 active:scale-95 w-full sm:w-auto font-semibold"
              >
                <Mail className="w-4 h-4" />
                Hire for Consulting
              </Link>
            </MagneticButton>
          </div>
        </StaggerItem>
      </div>
      
      {/* Featured Section Preview - Premium List View */}
      <FadeIn delay={0.4} className="mt-40 w-full text-left max-w-5xl mx-auto z-10">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Featured Work</h2>
          <Link href="/work" className="text-sm uppercase tracking-widest flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-semibold py-2">
            View Archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="flex flex-col border-t border-white/5">
          {featuredStudies.map((study, index) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="group block w-full border-b border-white/5 py-10 transition-colors hover:bg-white/[0.02]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                <div className="flex-1 space-y-2 relative">
                  <p className="text-xs text-muted-foreground font-mono mb-2 flex items-center gap-3">
                    <span className="w-6 h-px bg-muted-foreground/30"></span>
                    {study.date}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:pl-4 transition-all duration-300">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xl group-hover:pl-4 transition-all duration-300 delay-75">
                    {study.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 md:w-1/3 md:justify-end">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs border border-white/10 rounded-full text-muted-foreground group-hover:border-white/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-4 group-hover:bg-white group-hover:text-black">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {featuredStudies.length === 0 && (
            <div className="py-20 text-center border-b border-white/5 text-muted-foreground text-sm italic tracking-widest uppercase">
              Add case studies to see them here.
            </div>
          )}
        </div>
      </FadeIn>
    </StaggerContainer>
  );
}
