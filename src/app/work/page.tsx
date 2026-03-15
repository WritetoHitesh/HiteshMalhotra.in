import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCaseStudies } from "@/lib/mdx";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export const metadata = {
  title: "Work | Hitesh Malhotra",
  description: "Product Management case studies and portfolio.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <StaggerContainer className="max-w-5xl mx-auto px-6 py-24 min-h-screen">
      <StaggerItem className="mb-20 max-w-3xl">
        <h1 className="text-fluid-h2 font-bold tracking-tighter mb-6 uppercase">Selected Work</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide leading-relaxed">
          A deep dive into the products I've built, the problems they solved, and the impact they created at scale.
        </p>
      </StaggerItem>

      <StaggerItem className="flex flex-col border-t border-white/10">
        {caseStudies.map((study, index) => (
          <Link key={study.slug} href={`/work/${study.slug}`} className="group block w-full border-b border-white/5 py-12 transition-colors hover:bg-white/[0.02]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-4">
              <div className="flex-1 space-y-3 relative">
                <p className="text-xs text-muted-foreground font-mono mb-2 flex items-center gap-3">
                  <span className="w-8 h-px bg-muted-foreground/30"></span>
                  {study.date}
                </p>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:pl-6 transition-all duration-300">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl group-hover:pl-6 transition-all duration-300 delay-75">
                  {study.description}
                </p>
              </div>
              
              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 md:w-1/4">
                <div className="flex flex-wrap justify-end gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs border border-white/10 rounded-full text-muted-foreground group-hover:border-white/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 md:translate-x-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
        {caseStudies.length === 0 && (
          <div className="py-24 text-center text-muted-foreground text-sm italic tracking-widest uppercase">
            Add case studies to see them here.
          </div>
        )}
      </StaggerItem>
    </StaggerContainer>
  );
}
