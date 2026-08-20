import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SecondOpinionForm } from "@/components/forms/SecondOpinionForm";
import { TrustBar } from "@/components/shared/TrustBar";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Second Opinion",
  description: "Get a free, honest second opinion on a suspected spray foam insulation problem — no pressure, no obligation.",
};

const steps = [
  "Tell us what you're seeing or smelling, and how long it's been going on.",
  "We give you an honest read on whether it sounds like a real problem or something normal.",
  "If it's real, we help you understand what an actual fix looks like and connect you with a qualified contractor.",
];

export default function GetASecondOpinionPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-10 md:pt-44 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Free, No-Obligation</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Get a Second Opinion</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what&apos;s going on and we&apos;ll give you a straight, honest read &mdash;
              no pressure, and no incentive to make it sound worse than it is.
            </p>
          </FadeIn>
        </div>
        <TrustBar />
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <h2 className="text-2xl font-heading font-bold">What Happens Next</h2>
              <ol className="mt-6 space-y-6">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer to skip the form? Call{" "}
                <a href={`tel:${site.phoneDigits}`} className="text-primary font-semibold">{site.phone}</a>{" "}
                directly.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-3">
            <FadeIn direction="right" delay={0.1}>
              <SecondOpinionForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
