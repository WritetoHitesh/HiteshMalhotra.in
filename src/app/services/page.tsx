import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services | Hitesh Malhotra",
  description: "Consulting services and contact form.",
};

const offerings = [
  {
    title: "Product Strategy Audit",
    price: "Custom",
    features: [
      "Deep dive into your current product roadmap",
      "User journey friction analysis",
      "Competitive positioning review",
      "Actionable 30-60-90 day execution plan",
    ],
  },
  {
    title: "Zero to One Launch",
    price: "Custom",
    features: [
      "Validating problem space and MVP definition",
      "Go-to-market strategy alignment",
      "Establishing initial metrics and KPIs",
      "Managing build phase with engineering",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">Work With Me</h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
          I partner with startups and scale-ups to align business goals with user needs, turning complex problems into high-impact products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column - Offerings */}
        <div className="space-y-12">
          {offerings.map((offering) => (
            <div key={offering.title} className="glass rounded-2xl p-8 border hover:border-foreground/20 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{offering.title}</h3>
              <p className="font-mono text-sm text-muted-foreground mb-6">Investment: {offering.price}</p>
              
              <ul className="space-y-4">
                {offering.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="p-8 rounded-2xl border border-border/40 bg-muted/30">
            <p className="italic text-foreground/80 leading-relaxed mb-4">
              "Hitesh has an incredible ability to cut through the noise and identify exactly what a product needs to succeed. His audit changed our entire Q3 trajectory."
            </p>
            <p className="font-semibold text-sm">— Founder, Series A Startup</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  required 
                  rows={5}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow resize-none"
                  placeholder="Tell me about your project or current challenges..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-foreground text-background font-medium py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Send Message
              </button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Powered by Formspree. I'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
