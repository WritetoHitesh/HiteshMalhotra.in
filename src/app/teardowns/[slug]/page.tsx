import { getTeardownBySlug, getTeardowns } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export async function generateStaticParams() {
  const teardowns = getTeardowns();
  return teardowns.map((teardown) => ({
    slug: teardown.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const teardown = getTeardownBySlug(params.slug);
  if (!teardown) return { title: "Not Found" };
  
  return {
    title: `${teardown.title} | Teardown`,
    description: teardown.description,
  };
}

export default async function TeardownPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const teardown = getTeardownBySlug(params.slug);
  
  if (!teardown) {
    notFound();
  }

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
    a: (props: any) => <a className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors cursor-pointer" {...props} />,
  };

  return (
    <StaggerContainer className="max-w-3xl mx-auto px-6 py-12">
      <StaggerItem>
        <Link href="/teardowns" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Back to Teardowns
        </Link>
      </StaggerItem>
      
      <StaggerItem className="mb-16 border-b border-white/10 pb-12">
        <header>
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-mono text-muted-foreground">{teardown.date}</p>
            {teardown.pdfUrl && (
              <a 
                href={teardown.pdfUrl} 
                download
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                <FileDown className="w-4 h-4" /> Download PDF
              </a>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">{teardown.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance mb-8">{teardown.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {teardown.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-foreground border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </header>
      </StaggerItem>

      <StaggerItem className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={teardown.content} components={customComponents} />
      </StaggerItem>
      
      <StaggerItem className="mt-24 pt-8 border-t border-white/10 text-center">
        <p className="text-muted-foreground mb-6">Want a deep dive for your product?</p>
        <Link href="/services" className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 cursor-pointer">
          Let's talk
        </Link>
      </StaggerItem>
    </StaggerContainer>
  );
}
