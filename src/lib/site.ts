export const site = {
  businessName: "FoamMedic",
  tagline: "Think Your Spray Foam Job Went Wrong? Get a Real Diagnosis Before You Panic",
  domain: "foammedic.com",
  url: "https://www.foammedic.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Topic {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

// Angle: an honest diagnostic/second-opinion resource for homeowners who ALREADY have
// spray foam and suspect something is wrong — distinct from sibling sprayfoamscience.com's
// pre-purchase "should I be worried before I buy" education. Grounded in real DataForSEO
// demand around symptom/removal terms (spray foam insulation problems ~320/mo, issues
// ~320/mo, removal ~320-880/mo, off-gassing ~210/mo) — NOT "repair/medic/second-opinion"
// language, which returned near-zero volume. Deliberately does NOT pitch an active
// "we repair it" service: federal class-action litigation (Demilec, Masco, et al.)
// establishes the accepted remedy for bad SPF is full removal/rebuild, not patch-repair,
// so this site sets that expectation honestly rather than overpromising a fix. The
// "medic" framing is kept in the domain/brand name (legally clear — no direct
// spray-foam-insulation collision) but is NOT played as an active-repair promise in copy;
// a real regional competitor ("Home Energy Medics") uses similar health-metaphor branding,
// so the site is deliberately positioned as diagnosis + honest referral, not "the fix-it
// company," to avoid reading as a derivative copy of that existing business.
export const topics: Topic[] = [
  {
    slug: "is-your-spray-foam-actually-a-problem-or-normal",
    name: "Is Your Spray Foam Actually a Problem, or Normal?",
    shortName: "Problem or Normal?",
    summary: "How to tell a genuine spray foam defect apart from normal cure smell, texture variation, and other things that look alarming but aren't.",
  },
  {
    slug: "spray-foam-off-gassing-and-persistent-odor",
    name: "Spray Foam Off-Gassing & Persistent Odor",
    shortName: "Off-Gassing & Odor",
    summary: "The real timeline for normal cure odor, and the specific signs that a smell lasting well past that window means something actually went wrong.",
  },
  {
    slug: "spray-foam-mold-and-moisture-signs",
    name: "Spray Foam Mold & Moisture Signs",
    shortName: "Mold & Moisture",
    summary: "What actually indicates moisture trapped behind spray foam versus a surface-level, non-structural issue — and why the difference matters.",
  },
  {
    slug: "why-removal-not-patch-repair-is-usually-the-real-fix",
    name: "Why Removal — Not Patch Repair — Is Usually the Real Fix",
    shortName: "Removal vs. Patch Repair",
    summary: "What federal spray foam litigation has established about how bad installations actually get remedied, stated honestly instead of oversold as an easy patch job.",
  },
  {
    slug: "what-to-document-before-you-call-anyone",
    name: "What to Document Before You Call Anyone",
    shortName: "Documentation Checklist",
    summary: "The photos, moisture readings, and timeline notes that protect you — whether you end up filing a warranty claim, a complaint, or just getting a second opinion.",
  },
  {
    slug: "how-to-find-a-qualified-remediation-contractor",
    name: "How to Find a Qualified Spray Foam Remediation Contractor",
    shortName: "Finding a Qualified Contractor",
    summary: "What to actually vet for, and the specific red flags of a contractor who overpromises an easy fix for a problem that really needs full removal.",
  },
] as const;
