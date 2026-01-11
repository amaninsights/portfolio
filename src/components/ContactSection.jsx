import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_wlu6ogg", "template_xvmhc7n", e.target, "vAtJPSDdI3Zv3R4K9")
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you. I'll get back to you soon.",
        });
        e.target.reset();
      })
      .catch(() => {
        toast({
          title: "Failed to send",
          description: "Please try again or email me directly.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono text-muted-foreground">05</span>
          <span className="w-12 h-px bg-border" />
          <span className="text-sm tracking-widest uppercase text-muted-foreground">Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Message */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Have a project in mind or looking for a data analyst? 
              I'd love to hear from you.
            </p>

            {/* Links */}
            <div className="space-y-4">
              <a 
                href="mailto:amansarohadev@gmail.com"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-lg">amansarohadev@gmail.com</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a 
                href="https://linkedin.com/in/aman2805"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-lg">LinkedIn</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a 
                href="https://github.com/amaninsights"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-lg">GitHub</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a 
                href="https://x.com/AmanAnalytics"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-lg">Twitter / X</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
