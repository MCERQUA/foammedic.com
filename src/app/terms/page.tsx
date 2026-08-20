import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.businessName}.`,
};

export default function TermsPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />
      <section className="pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
          <div className="post-prose">
            <p>Last updated: 2026-08-20</p>
            <h2>Use of This Website</h2>
            <p>
              This website provides educational content on diagnosing suspected spray foam
              insulation problems. It is offered for general informational purposes and does not
              replace an in-person inspection by a qualified professional for your specific
              situation. {site.businessName} does not perform spray foam removal or repair
              services directly — we help connect you with a qualified contractor.
            </p>
            <h2>Second Opinion Requests</h2>
            <p>
              Submitting a form constitutes a request to be contacted and does not create a
              binding agreement for any product or service, and does not constitute a formal
              inspection or professional assessment.
            </p>
            <h2>Contact</h2>
            <p>Questions about these terms can be directed to {site.email} or {site.phone}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
