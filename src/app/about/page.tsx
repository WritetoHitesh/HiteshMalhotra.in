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
            I'm Hitesh, a Product Manager with a passion for building elegant, scalable solutions to complex human problems. 
          </p>
          <p>
            Over the past few years, I've specialized in taking ambitious zero-to-one ideas and turning them into reality, while also leading growth efforts for established platforms. I believe the best products aren't just useful—they feel inevitable once you use them.
          </p>
          <p>
            My approach to PMing is deeply cross-functional. I spend as much time understanding the technical constraints with engineers as I do dissecting user psychology with researchers. I thrive in environments where the requirements are ambiguous, the stakes are high, and the team is hungry.
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

        <h2 className="text-2xl font-bold tracking-tight mb-8">My Product Philosophy</h2>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">1. Ruthless Prioritization</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Saying "no" 99 times so the one "yes" has the oxygen it needs to survive. Focus is the ultimate competitive advantage.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">2. Speed to Learning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shipping isn't the goal; learning is the goal. Shipping is just the most expensive and accurate way to learn.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">3. Design Details Matter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Users don't read manuals. The interface is the product, and micro-interactions dictate how a user feels about the underlying technology.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">4. Strong Opinions, Weakly Held</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have conviction in your vision, but be the first to admit when the data proves your hypothesis wrong. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
