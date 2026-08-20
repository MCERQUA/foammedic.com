import { ClipboardCheck, ShieldAlert, ScanSearch, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: ClipboardCheck,
    title: "Diagnosis First, Not a Sales Pitch",
    text: "We tell you honestly whether what you're seeing is a real defect or a normal characteristic &mdash; before pointing you toward anyone or anything.",
  },
  {
    icon: ShieldAlert,
    title: "We Won't Oversell an Easy Fix",
    text: "Federal spray foam litigation has established that the real remedy for a bad install is usually full removal, not a quick patch &mdash; we say that plainly instead of promising a repair that isn't realistic.",
  },
  {
    icon: ScanSearch,
    title: "Grounded in Real Symptoms, Not Fear",
    text: "Off-gassing timelines, moisture signs, and delamination are covered by their actual chemistry and physics, not vague warnings meant to scare you into calling someone.",
  },
  {
    icon: Users,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not a repair company with an incentive to find a problem.",
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why This Resource Exists</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">An Honest Second Opinion, Not a Sales Funnel</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
