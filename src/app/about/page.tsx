import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { BookOpenCheck, ShieldCheck, ScanSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.businessName} is an honest diagnostic and second-opinion resource for suspected spray foam insulation problems, backed by Contractors Choice Agency.`,
};

const values = [
  {
    icon: BookOpenCheck,
    title: "Diagnosis Before Anything Else",
    text: "We start with whether something is actually wrong &mdash; not with what service we could sell you.",
  },
  {
    icon: ScanSearch,
    title: "Honest About the Real Fix",
    text: "Documented spray foam litigation shows the accepted remedy for a bad install is usually full removal, not a quick patch. We say that plainly instead of overselling an easy repair.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not a repair company with an incentive to find a problem.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              A Second Opinion, Not a Sales Call
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              If you're worried about a spray foam job, most of what you'll find online is either
              a manufacturer defending the product or a repair company with an obvious incentive
              to tell you it's worse than it is. {site.businessName} exists to give you an honest
              read instead &mdash; what's actually a problem, what's normal, and what a realistic
              fix looks like, including when that means full removal rather than a quick patch.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We're backed by Contractors Choice Agency, bringing over 20 years of
              former-contractor experience to every page. When you're ready, we connect you with a
              qualified contractor &mdash; free, with no obligation, and only after you understand
              what you're actually dealing with.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about-credibility.jpg" alt={`${site.businessName} diagnostic resource`} fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How We Write</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Stats />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Backed by a Nationwide Contractor Network</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contractors Choice Agency works with contractors across the country today &mdash;
              when your situation needs a qualified professional, we can help you find one who
              does this correctly.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
