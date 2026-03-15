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
    <StaggerContainer className="max-w-5xl mx-auto px-6 py-12">
      <StaggerItem className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Case Studies</h1>
        <p className="text-lg text-muted-foreground">
          A deep dive into the products I've built, the problems they solved, and the impact they created.
        </p>
      </StaggerItem>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <StaggerItem key={study.slug}>
            <Link href={`/work/${study.slug}`} className="group block h-full">
              <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 group-hover:-translate-y-1">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-3">{study.date}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                  {study.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}
