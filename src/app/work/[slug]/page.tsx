import { getCaseStudyBySlug, getCaseStudies } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Not Found" };
  
  return {
    title: `${study.title} | Hitesh Malhotra`,
    description: study.description,
  };
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);
  
  if (!study) {
    notFound();
  }

  // Define custom MDX components for premium styling
  const customComponents = {
    h1: (props: any) => <h1 className="text-3xl font-bold mt-12 mb-6" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-semibold mt-10 mb-4 inline-block border-b-2 border-primary/20 pb-1" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-medium mt-8 mb-4 border-l-2 border-primary pl-4" {...props} />,
    p: (props: any) => <p className="leading-relaxed text-muted-foreground mb-6" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground" {...props} />,
    li: (props: any) => <li className="pl-2" {...props} />,
    strong: (props: any) => <strong className="font-semibold text-foreground" {...props} />,
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-primary/50 pl-6 italic my-8 text-xl text-foreground bg-muted/30 py-4 pr-4 rounded-r-lg" {...props} />
    ),
    a: (props: any) => <a className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors" {...props} />,
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to Work
      </Link>
      
      <header className="mb-16 border-b border-border/40 pb-12">
        <p className="text-sm font-mono text-muted-foreground mb-4">{study.date}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">{study.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed text-balance mb-8">{study.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-foreground border border-border/40">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={study.content} components={customComponents} />
      </div>
      
      <div className="mt-24 pt-8 border-t border-border/40 text-center">
        <p className="text-muted-foreground mb-6">Interested in discussing this project?</p>
        <Link href="/services" className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
          Get in touch
        </Link>
      </div>
    </article>
  );
}
