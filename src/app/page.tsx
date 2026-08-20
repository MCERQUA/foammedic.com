import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TopicsGrid } from "@/components/sections/TopicsGrid";
import { WhyThisMatters } from "@/components/sections/WhyThisMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "Is a strong smell after spray foam installation always a sign something's wrong?",
    answer:
      "No — a mild odor for roughly 24-72 hours during final cure is normal. A strong or persistent smell well beyond that window is a legitimate sign something went wrong, usually off-ratio mixing, and worth getting checked.",
  },
  {
    question: "Can spray foam actually be repaired, or does it need to be fully removed?",
    answer:
      "It depends on the specific problem, but documented spray foam litigation shows the accepted remedy for a genuinely bad installation is usually full removal and reinstallation, not a patch repair. We'll tell you honestly which situation you're in rather than overselling an easy fix.",
  },
  {
    question: "How do I know if what I'm seeing is a real problem or just normal spray foam texture?",
    answer:
      "Real spray foam has some natural texture and color variation that isn't a defect. Genuine problems — shrinkage and pulling away from framing, persistent tackiness, mold, or an odor that won't quit — have specific, identifiable signs covered in our topic guides.",
  },
  {
    question: "Do you perform spray foam removal or repair yourselves?",
    answer:
      "No — we're a diagnostic and second-opinion resource. When your situation needs a qualified professional, we help connect you with one from CCA's contractor network.",
  },
  {
    question: "What should I document before I call anyone about a spray foam problem?",
    answer:
      "Photos of the affected area, the installation date if you have it, a description of when the problem started, and any odor or moisture observations — covered in detail on our documentation checklist topic page.",
  },
  {
    question: "Is this related to spray foam insurance claims or coverage?",
    answer:
      "No — this site doesn't sell or discuss insurance products. It's purely a diagnostic resource for understanding what's actually happening with your spray foam and what a realistic next step looks like.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="Think Your Spray Foam Job Went Wrong?"
        subtitle="An honest diagnostic resource — what's actually a problem, what's normal, and what a realistic fix looks like, including when that means full removal, not a quick patch."
        image="/images/hero-inspection.jpg"
        imageAlt="Inspector examining spray foam insulation in an attic for signs of a problem"
      />

      <TopicsGrid />
      <WhyThisMatters />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="Spray Foam Problems, Answered Honestly"
        subtitle="Real questions people ask when something seems off."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
