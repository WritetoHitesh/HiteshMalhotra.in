import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";

export const metadata = {
  title: "About | Hitesh Malhotra",
  description: "About Hitesh Malhotra, Product Manager.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
          <p>
            I'm Hitesh, an AI Product Manager with strong experience in SaaS, EdTech, and AI-driven product development. 
            I am passionate about building data-driven learning products that improve user experience at scale.
          </p>
          <p>
            Currently, I am building and scaling AI ventures at Aavtaar.ai, leading the core conversational voice platform. My expertise lies in user research, roadmap planning, and cross-functional delivery to take products from ideation to scalable success.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 border-t border-border/40 border-b py-8">
            <Link 
              href="/resume.pdf" 
              className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </Link>
            
            <div className="flex items-center justify-center gap-4">
              <a href="https://linkedin.com/in/hiteshmalhotra" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/WritetoHitesh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
        </div>

        <h2 className="text-2xl font-bold tracking-tight mb-8">Core Skills & Competencies</h2>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">AI & Technology</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Generative AI, Agentic AI, LLMs, Voice AI, Conversational AI, NLP, AIOps
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">Product Management</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Product Strategy, Roadmap, GTM Strategy, SaaS, Agile, UX
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">Business & Strategy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stakeholder Management, B2B, Revenue Growth, Analysis, Leadership
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">Product & Data Tools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Figma, Draw.io, Balsamiq, Jira, Trello, Google Analytics, SQL, Python, MongoDB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
