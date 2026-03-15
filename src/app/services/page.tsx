import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata = {
  title: "Services | Hitesh Malhotra",
  description: "Consulting services and contact form.",
};

const offerings = [
  {
    title: "Comprehensive Product Audit",
    price: "Custom Engagement",
    features: [
      "Pinpoint exactly where users drop off in your core funnels",
      "Align your current roadmap directly with revenue goals",
      "Benchmark your UX and strategic positioning against top competitors",
      "Receive a relentless, actionable 90-day execution plan",
    ],
  },
  {
    title: "Zero-to-One Architecture",
    price: "Custom Engagement",
    features: [
      "Turn ambiguous core problems into validated, testable MVPs",
      "Define strict Go-To-Market strategies to ensure launch traction",
      "Set up North Star metrics and KPI instrumentation from day zero",
      "Manage tight engineering handoffs to guarantee shipping velocity",
    ],
  },
];

export default function ServicesPage() {
  return (
    <FadeIn className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-20 max-w-3xl">
        <h1 className="text-fluid-h2 font-bold tracking-tighter mb-6 uppercase">Let's Build Something That Scales.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light tracking-wide">
          Stop guessing what your users want. I partner with founders to audit broken funnels, architect zero-to-one launches, and perfectly align engineering pipelines with business outcomes.
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Let's Talk</h2>
            <form action="https://formsubmit.co/WritetoHiteshMalhotra@gmail.com" method="POST" className="space-y-6">
              {/* Optional: disable captcha for smoother UX */}
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div className="space-y-3 mt-8">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div className="space-y-3 mt-8">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  required 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Tell me about your project or current challenges..."
                ></textarea>
              </div>
              
              <div className="pt-8">
                <MagneticButton intensity={0.1} className="w-full block">
                  <button 
                    type="submit" 
                    className="w-full bg-foreground text-background font-bold tracking-widest uppercase text-sm py-5 rounded-full hover:bg-white/90 transition-all cursor-pointer"
                  >
                    Send Message
                  </button>
                </MagneticButton>
              </div>
              
              <p className="text-xs text-muted-foreground text-center mt-6">
                Directly connected to my inbox. I'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
