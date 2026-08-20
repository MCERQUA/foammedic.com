import { FileCheck, ShieldCheck, Users, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const signals = [
  {
    icon: FileCheck,
    title: "Grounded in Real Chemistry and Physics",
    text: "Off-gassing timelines, moisture behavior, and cure chemistry are explained accurately &mdash; not exaggerated to make every job sound like a disaster.",
  },
  {
    icon: ShieldCheck,
    title: "Honest About What Gets Fixed",
    text: "We say plainly when the real remedy is full removal rather than overselling a patch repair that documented litigation shows usually doesn't hold.",
  },
  {
    icon: Users,
    title: "Free Second Opinion, No Pressure",
    text: "Get a straight read on your situation at no cost, with no obligation to do anything after.",
  },
  {
    icon: MapPin,
    title: "Backed by Contractors Choice Agency",
    text: "20+ years of former-contractor experience behind the diagnosis, not a repair company with a financial reason to find a problem.",
  },
];

/** Real, verifiable trust markers — deliberately no fabricated star ratings or named testimonials. */
export function TrustSignals() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Trust This Resource</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Accuracy First, Never Alarmist</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal) => (
            <StaggerItem key={signal.title}>
              <div className="p-6 rounded-xl bg-card border border-border h-full text-center">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{signal.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: signal.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
