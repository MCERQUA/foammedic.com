import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Check the Symptom Guides",
    text: "Read the specific topic that matches what you're seeing or smelling before assuming the worst.",
  },
  {
    number: "02",
    title: "Document What You're Seeing",
    text: "Photos, moisture readings, and a timeline protect you no matter what you decide to do next.",
  },
  {
    number: "03",
    title: "Get a Second Opinion",
    text: "Tell us what's going on and we'll help you understand whether it's a real problem and what a realistic fix actually looks like.",
  },
  {
    number: "04",
    title: "Get Connected to a Qualified Contractor",
    text: "If it's real, we'll help you find someone who does this correctly &mdash; not someone who oversells an easy patch.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How to Use This Resource</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From Worried to Informed</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
