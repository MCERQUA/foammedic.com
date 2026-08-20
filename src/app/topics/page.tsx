import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site, topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Topics",
  description:
    "Six honest topics on suspected spray foam insulation problems: off-gassing, mold and moisture, why removal beats patch repair, documentation, and finding a qualified contractor.",
};

const topicImages: Record<string, string> = {
  "is-your-spray-foam-actually-a-problem-or-normal": "/images/topic-inspection-check.jpg",
  "spray-foam-off-gassing-and-persistent-odor": "/images/topic-odor-check.jpg",
  "spray-foam-mold-and-moisture-signs": "/images/topic-moisture-signs.jpg",
  "why-removal-not-patch-repair-is-usually-the-real-fix": "/images/topic-removal-reality.jpg",
  "what-to-document-before-you-call-anyone": "/images/topic-documentation.jpg",
  "how-to-find-a-qualified-remediation-contractor": "/images/about-credibility.jpg",
};

export default function TopicsIndexPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Topics</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Spray Foam Problems, Explained Honestly</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Six in-depth guides covering real symptoms, real diagnosis, and the real fix —
              including when that means full removal, not a quick patch.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {topics.map((topic) => (
              <StaggerItem key={topic.slug}>
                <Link href={`/topics/${topic.slug}`} className="group block h-full">
                  <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={topicImages[topic.slug]} alt={topic.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">{topic.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground flex-grow">{topic.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
