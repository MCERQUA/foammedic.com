import type { FAQItem } from "@/components/sections/FAQ";

export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface TopicContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  sections: TopicSection[];
  keyTakeaways: string[];
  faqs: FAQItem[];
}

export const topicContent: Record<string, TopicContent> = {
  "is-your-spray-foam-actually-a-problem-or-normal": {
    slug: "is-your-spray-foam-actually-a-problem-or-normal",
    heroImage: "/images/topic-inspection-check.jpg",
    heroImageAlt: "Close inspection of spray foam insulation texture in an attic",
    intro: [
      "Spray foam has a genuinely wide range of normal appearance and behavior — color variation, surface texture, and minor irregularity are expected, not evidence something went wrong. But real defects do happen, and telling the two apart before you panic (or before you ignore something that actually matters) is the whole point of this page.",
    ],
    sections: [
      {
        heading: "Normal Variation You Don't Need to Worry About",
        paragraphs: [
          "Spray foam's surface texture is naturally uneven — a slightly \"orange peel\" or rippled finish is normal, not a sign of poor application, since foam expands and skins over as it cures rather than self-leveling like paint. Color can vary slightly batch to batch and even within a single job as ambient temperature shifts during application; this is cosmetic, not structural.",
          "A mild chemical odor for roughly the first 24-72 hours after application is also normal — that's the tail end of the curing reaction finishing off-gassing, and manufacturers specify this window explicitly as part of correct application.",
        ],
      },
      {
        heading: "The Real Warning Signs",
        paragraphs: [
          "Foam that has visibly shrunk and pulled away from the studs, rafters, or roof deck it was sprayed against is a genuine defect — correctly cured foam adheres and stays adhered; gaps forming after the fact point to an off-ratio mix or a substrate that wasn't properly prepped. Foam that stays soft, tacky, or spongy well past the cure window (rather than firm and stable) is another concrete sign, not a subjective impression.",
          "A strong or acrid odor that persists for weeks rather than days, especially one that gets stronger in heat or humidity, is a real signal — it usually means the chemical reaction didn't fully complete, leaving unreacted or partially reacted material still off-gassing.",
        ],
      },
      {
        heading: "Why This Distinction Actually Matters",
        paragraphs: [
          "Treating normal characteristics as a crisis leads people to spend money on unnecessary inspections or removal for foam that's actually performing fine. Dismissing real warning signs as \"probably nothing\" lets an actual problem — trapped moisture, ongoing off-gassing, structural adhesion failure — get worse and more expensive to fix the longer it goes unaddressed. Getting the diagnosis right first is what determines whether you need to do anything at all.",
        ],
      },
      {
        heading: "When to Actually Get Someone to Look at It",
        paragraphs: [
          "If you're seeing visible shrinkage or gapping, persistent tackiness past the cure window, an odor that hasn't faded after a week or more, or any sign of moisture or discoloration near the foam, that's worth a real second opinion — not because it's automatically a disaster, but because those specific signs don't self-resolve and are worth understanding before they're your problem to explain to a future buyer or insurer.",
        ],
      },
    ],
    keyTakeaways: [
      "Uneven texture and minor color variation are normal — spray foam doesn't self-level and naturally varies batch to batch.",
      "A mild odor for the first 24-72 hours is expected cure off-gassing, not a defect.",
      "Real warning signs are concrete and specific: visible shrinkage/gapping, persistent tackiness, or an odor lasting weeks rather than days.",
      "Getting the diagnosis right first prevents both unnecessary spending on fine foam and letting a real problem get worse unaddressed.",
    ],
    faqs: [
      {
        question: "Is uneven or bumpy spray foam texture a sign of a bad job?",
        answer: "No — spray foam naturally cures with an uneven, sometimes rippled surface texture since it expands and skins over rather than self-leveling. This is cosmetic and normal, not a defect.",
      },
      {
        question: "How long should spray foam smell last after installation?",
        answer: "A mild odor for roughly 24-72 hours during final cure is normal and expected. A strong smell persisting for weeks is a real warning sign, not a normal variation.",
      },
      {
        question: "What's the clearest sign spray foam actually has a problem?",
        answer: "Visible shrinkage or gapping where the foam has pulled away from framing, and foam that stays soft or tacky well past the normal cure window — both are concrete, identifiable signs rather than subjective impressions.",
      },
    ],
  },

  "spray-foam-off-gassing-and-persistent-odor": {
    slug: "spray-foam-off-gassing-and-persistent-odor",
    heroImage: "/images/topic-odor-check.jpg",
    heroImageAlt: "Homeowner checking for lingering odor near spray foam insulation",
    intro: [
      "Odor is the single most common reason people search for spray foam problems, and it's also one of the most genuinely ambiguous — because a real odor problem and a normal cure smell can feel identical in the moment. Understanding the actual chemistry behind why spray foam smells at all is what makes the difference identifiable rather than a guessing game.",
    ],
    sections: [
      {
        heading: "Why Spray Foam Smells at All",
        paragraphs: [
          "Spray polyurethane foam cures through a chemical reaction between an isocyanate component (almost always MDI) and a resin blend containing polyols, catalysts, and blowing agent. That reaction isn't instantaneous — it continues finishing over the hours after application, releasing some off-gassing as it does. Manufacturers specify a re-entry time (commonly around 24 hours, sometimes longer for sensitive individuals) precisely because this normal off-gassing needs time to drop to a safe, low level.",
        ],
      },
      {
        heading: "What Makes an Odor Abnormal, Specifically",
        paragraphs: [
          "When foam is mixed off-ratio — the two components delivered in an uneven ratio due to proportioner miscalibration, temperature issues, or equipment problems — the reaction doesn't complete correctly. Resin-rich (\"B-rich\") off-ratio foam in particular tends to cure soft and tacky and can retain a persistent chemical odor, because excess amine catalysts and unreacted resin components never fully react into stable polymer. This isn't the same smell as normal cure off-gassing — it's a sign the underlying chemistry didn't finish correctly, and it doesn't resolve on its own the way normal off-gassing does.",
        ],
      },
      {
        heading: "The Practical Timeline That Separates the Two",
        paragraphs: [
          "Normal cure odor should be noticeably fading by day 3-4 and essentially gone within a week to ten days for most residential applications. An odor that's still strong after two weeks, or one that seems to intensify rather than fade — especially in warm or humid conditions, which can reactivate off-gassing from incompletely cured material — is the practical signal that this isn't normal cure smell anymore.",
        ],
      },
      {
        heading: "What Actually Gets Checked",
        paragraphs: [
          "A real assessment of a persistent odor problem looks at more than just \"does it smell bad\" — it involves checking whether the foam feels firm and fully cured versus soft or tacky to the touch, looking for visible signs of off-ratio mixing (color inconsistency, unusual density), and understanding the installation date and conditions (cold-weather installs are more prone to off-ratio issues since both components become more viscous as temperature drops). That combination of signs, not smell alone, is what actually distinguishes a real off-ratio problem from a slow-fading normal cure smell in an unusually enclosed space.",
        ],
      },
    ],
    keyTakeaways: [
      "Spray foam's cure reaction is genuinely still finishing for roughly 24-72 hours after application — some odor in that window is expected, not a defect.",
      "Off-ratio mixing (especially resin-rich/\"B-rich\" foam) produces a persistent odor that doesn't fade the way normal cure smell does, because the chemistry never fully completed.",
      "Normal odor should be clearly fading by day 3-4 and mostly gone within 1-2 weeks; an odor that's still strong or intensifying past that point is the real signal.",
      "A real assessment checks firmness/tackiness and installation conditions together, not smell alone.",
    ],
    faqs: [
      {
        question: "Why does spray foam smell right after it's sprayed?",
        answer: "The two-component chemical reaction that cures spray foam continues finishing for roughly 24-72 hours after application, releasing normal off-gassing during that window — this is expected and why manufacturers specify a re-entry time.",
      },
      {
        question: "What causes a spray foam smell that won't go away?",
        answer: "Usually off-ratio mixing — the two chemical components delivered in an uneven ratio, most often resin-rich (\"B-rich\") foam, which cures soft and tacky and retains a persistent odor because the reaction never fully completed.",
      },
      {
        question: "How long is too long for a spray foam smell to last?",
        answer: "Normal cure odor should be clearly fading by day 3-4 and mostly gone within 1-2 weeks. An odor still strong after two weeks, or one that intensifies in heat or humidity, is a genuine warning sign worth checking.",
      },
    ],
  },

  "spray-foam-mold-and-moisture-signs": {
    slug: "spray-foam-mold-and-moisture-signs",
    heroImage: "/images/topic-moisture-signs.jpg",
    heroImageAlt: "Checking for moisture and discoloration near spray foam insulation in a wall cavity",
    intro: [
      "Mold is the scariest word in any spray foam problem search, and it's also one of the most frequently misunderstood — because mold behind spray foam is not a routine outcome, and when it does happen, the mechanism is specific and identifiable rather than a mysterious property of the material itself.",
    ],
    sections: [
      {
        heading: "How Mold Actually Gets Behind Spray Foam",
        paragraphs: [
          "Closed-cell spray foam becomes a Class II vapor retarder at roughly 1.5 inches of thickness or more — meaning it substantially blocks water vapor from passing through it at that thickness. If foam is applied over a substrate (roof sheathing, wall framing) that already has elevated moisture content — from a pre-existing leak, condensation, or the wood simply not being dry enough at the time of application — that moisture gets sealed in behind the foam with nowhere to go and no way to dry out. That trapped moisture, not the foam itself, is what creates conditions for mold.",
        ],
      },
      {
        heading: "What This Means for Diagnosis",
        paragraphs: [
          "Mold behind spray foam is essentially always a substrate-moisture problem at the time of installation, or a design mismatch (the wrong vapor-permeability product for that climate and assembly), not a property of the foam reacting badly on its own. This matters for diagnosis because it means the relevant question isn't \"can spray foam cause mold\" in the abstract — it's whether there's evidence the substrate was wet before or during installation, or whether moisture has been getting in since (a roof leak, plumbing issue, or condensation source).",
        ],
      },
      {
        heading: "Visible and Indirect Signs to Look For",
        paragraphs: [
          "Direct signs include visible dark staining or discoloration at foam edges or seams, a musty smell distinct from the chemical cure odor, or visible moisture beading on any exposed surface near the foam. Indirect signs are just as important: any known history of roof leaks, plumbing issues, or condensation problems in that area before or since the foam was installed raises the likelihood that moisture is the underlying issue, even without visible mold yet.",
        ],
      },
      {
        heading: "Why This Usually Can't Be Confirmed by Looking Alone",
        paragraphs: [
          "Because closed-cell foam blocks visual inspection of the substrate behind it — that's part of why spray foam raises real estate and insurance concerns generally — confirming an actual moisture or mold problem behind the foam typically requires either a moisture meter reading through the foam (a real, standard diagnostic technique) or, in some cases, a small inspection cut to directly examine a suspect area. A visual inspection alone can rule some things in (visible surface staining) but can't reliably rule a hidden problem out.",
        ],
      },
    ],
    keyTakeaways: [
      "Mold behind spray foam is a substrate-moisture problem — foam applied over wood that was already wet, or the wrong vapor-permeability product for the climate — not a routine outcome of the material itself.",
      "The real diagnostic question is whether there's evidence of pre-existing or ongoing moisture, not whether spray foam \"can\" cause mold in the abstract.",
      "Visible staining, musty smell distinct from cure odor, and any history of leaks or condensation in that area are the practical signs to look for.",
      "Because closed-cell foam blocks visual access to the substrate, a moisture meter reading or inspection cut is often the only way to confirm what a visual look alone can't rule out.",
    ],
    faqs: [
      {
        question: "Can mold grow behind spray foam insulation?",
        answer: "Yes, if the foam was applied over a substrate with elevated moisture content, or if the wrong vapor-permeability product was used for the climate — the foam then traps that moisture against the wood. It is not a routine outcome of correctly installed foam on dry substrate.",
      },
      {
        question: "How do you check for mold behind spray foam without removing it?",
        answer: "A moisture meter reading through the foam is a standard diagnostic technique. Because closed-cell foam blocks direct visual inspection, a small inspection cut is sometimes the only way to confirm a suspected problem.",
      },
      {
        question: "What are the warning signs of moisture behind spray foam?",
        answer: "Visible dark staining or discoloration at foam edges or seams, a musty smell distinct from normal chemical cure odor, and any known history of roof leaks, plumbing issues, or condensation in that specific area.",
      },
    ],
  },

  "why-removal-not-patch-repair-is-usually-the-real-fix": {
    slug: "why-removal-not-patch-repair-is-usually-the-real-fix",
    heroImage: "/images/topic-removal-reality.jpg",
    heroImageAlt: "Contractor assessing the scope of a spray foam removal job",
    intro: [
      "This is the page most repair-focused spray foam sites won't tell you plainly: for a genuinely bad installation, the real, accepted remedy is almost always full removal and reinstallation — not a patch, a re-coat, or a partial fix. This isn't a scare tactic; it's what documented litigation and industry practice around bad spray foam jobs have actually established.",
    ],
    sections: [
      {
        heading: "What Federal Litigation Has Established",
        paragraphs: [
          "Multiple federal class-action cases involving major spray foam manufacturers (including cases against Demilec and Masco Corporation, among others) have centered on defective or improperly-curing spray foam installations, and the remedies these cases have addressed consistently point to full removal and replacement as the real-world fix for genuinely defective installations — not incremental patching. That's not a marketing claim; it reflects how the industry and legal system have actually treated confirmed bad installations at scale.",
        ],
      },
      {
        heading: "Why a Patch Repair Usually Doesn't Actually Work",
        paragraphs: [
          "Off-ratio foam, once cured, has a fundamentally different chemical structure than correctly-mixed foam — it isn't simply \"under-strength\" foam that a topcoat or partial re-spray can correct. New foam sprayed over or around defective foam doesn't fix the underlying adhesion failure, trapped moisture, or off-gassing source in the original material; it just adds a layer on top of an unresolved problem. This is the specific reason a \"quick patch\" pitch for a genuinely off-ratio or moisture-compromised installation is usually not a real fix, even when it's sold confidently.",
        ],
      },
      {
        heading: "What Full Removal Actually Involves",
        paragraphs: [
          "Proper removal means mechanically stripping the defective foam back to the substrate, inspecting that substrate for any moisture damage or mold that needs its own remediation, and then reinstalling correctly — with proper substrate moisture verification and calibrated equipment — rather than simply spraying new foam over the same conditions that caused the original failure. This is a bigger, more expensive job than a patch, which is exactly why some contractors pitch the cheaper patch option even when it isn't the real fix.",
        ],
      },
      {
        heading: "When a Smaller Fix Genuinely Is Appropriate",
        paragraphs: [
          "To be fair to the other side of this: not every spray foam issue requires full removal. A small localized gap or a minor cosmetic issue in an otherwise correctly-cured installation can sometimes be addressed with a targeted, limited repair. The distinction is whether the underlying chemistry and adhesion are sound elsewhere — a genuinely isolated defect is different from foam that's off-ratio, moisture-compromised, or failing broadly across the installation. This is precisely the judgment call a real inspection is for, not something to guess at from a description over the phone.",
        ],
      },
    ],
    keyTakeaways: [
      "Documented federal litigation against major spray foam manufacturers has centered on full removal and replacement as the real remedy for defective installations, not patch repair.",
      "Off-ratio or moisture-compromised foam has a fundamentally different chemical structure — new foam sprayed over it doesn't fix the underlying problem, it just adds a layer on top of it.",
      "Proper removal means stripping to substrate, checking for moisture/mold damage, and reinstalling correctly — a bigger job than a patch, which is exactly why some contractors pitch the cheaper option anyway.",
      "A small, genuinely isolated defect in an otherwise sound installation is the exception where a targeted repair can be appropriate — but that's a judgment call for a real inspection, not a guess.",
    ],
    faqs: [
      {
        question: "Can a bad spray foam job just be patched or re-coated instead of removed?",
        answer: "Usually not, if the underlying problem is off-ratio mixing or trapped moisture — new foam sprayed over defective foam doesn't fix the underlying adhesion failure or off-gassing source. Full removal to substrate and reinstallation is the accepted remedy documented litigation points to for genuinely defective installations.",
      },
      {
        question: "What does spray foam removal actually involve?",
        answer: "Mechanically stripping the defective foam back to the substrate, inspecting that substrate for moisture damage or mold, and then reinstalling correctly with verified substrate moisture and calibrated equipment — not simply spraying new foam over the original conditions that caused the failure.",
      },
      {
        question: "Is there ever a case where a small spray foam repair is actually appropriate?",
        answer: "Yes — a small, genuinely isolated gap or cosmetic issue in an otherwise correctly-cured installation can sometimes be addressed with a targeted repair. The key is whether the problem is isolated or reflects a broader off-ratio/moisture issue, which requires a real inspection to determine.",
      },
    ],
  },

  "what-to-document-before-you-call-anyone": {
    slug: "what-to-document-before-you-call-anyone",
    heroImage: "/images/topic-documentation.jpg",
    heroImageAlt: "Homeowner photographing spray foam insulation for documentation purposes",
    intro: [
      "Whatever you decide to do next — file a warranty claim, get a second opinion, or hire someone to fix it — good documentation now protects you later. This is the single most useful thing you can do before making any calls, and it takes less time than most people expect.",
    ],
    sections: [
      {
        heading: "Photos That Actually Matter",
        paragraphs: [
          "Wide shots showing the affected area in context (which wall, which section of attic), close-up shots of any visible defect (shrinkage gaps, discoloration, texture problems), and — if you can safely access it — shots showing the thickness and coverage of the foam itself. Take photos in good lighting, and include something for scale (a tape measure, a common object) in at least one shot of any specific defect. Date-stamped photos (most phones do this automatically in metadata even if not visibly overlaid) are more useful than photos alone.",
        ],
      },
      {
        heading: "The Timeline You Should Write Down Now",
        paragraphs: [
          "When was the foam installed, if you know? When did you first notice the issue, and has it gotten better, worse, or stayed the same? If there was a specific event before the problem started (a storm, a plumbing issue, a change in HVAC use), write that down too — installers and inspectors will ask, and your memory of exact dates fades faster than you'd expect once you're a few weeks into dealing with this.",
        ],
      },
      {
        heading: "Any Paperwork From the Original Installation",
        paragraphs: [
          "The original invoice or contract (which often lists the product and manufacturer used), any warranty documentation you received, and the installing contractor's name and contact information are all worth locating now rather than searching for later under time pressure. If you have photos from during or immediately after the original installation, those are valuable too — they can show what the foam looked like before whatever changed.",
        ],
      },
      {
        heading: "Moisture Readings, If You Can Get Them",
        paragraphs: [
          "A basic moisture meter (inexpensive and widely available) can give you a baseline reading near the suspected problem area, which is useful context for anyone assessing the situation later — though a full diagnosis, especially behind closed-cell foam, usually requires a professional-grade meter and know-how to interpret it correctly. Getting a basic reading yourself isn't a substitute for that, but it's useful information to have in hand.",
        ],
      },
      {
        heading: "Why This Effort Is Worth It Regardless of What You Decide",
        paragraphs: [
          "Good documentation makes any conversation you have next — with an installer, an inspector, a manufacturer's warranty department, or an attorney if it comes to that — faster and more credible. It also genuinely helps you get an accurate diagnosis, since a vague verbal description (\"it smells bad and looks weird\") gives a professional much less to work with than dated photos and a clear timeline.",
        ],
      },
    ],
    keyTakeaways: [
      "Wide-context photos plus close-up defect shots with something for scale, taken in good lighting, are the most useful documentation you can gather.",
      "Write down the installation date if known, when you first noticed the problem, and any relevant event beforehand — memory of exact dates fades fast.",
      "Locate the original invoice/contract, warranty paperwork, and installer contact information now rather than searching under time pressure later.",
      "A basic moisture meter reading is useful baseline context, though it's not a substitute for a professional-grade assessment behind closed-cell foam.",
    ],
    faqs: [
      {
        question: "What photos should I take of a suspected spray foam problem?",
        answer: "Wide shots for context, close-up shots of any visible defect with something for scale, taken in good lighting — and if safely accessible, shots showing the foam's overall thickness and coverage.",
      },
      {
        question: "Do I need the original installation paperwork if something's wrong with my spray foam?",
        answer: "It's very useful to have — the original invoice or contract often lists the product and manufacturer, and any warranty documentation and the installer's contact information will likely be needed regardless of what you decide to do next.",
      },
      {
        question: "Can I check for moisture behind spray foam myself?",
        answer: "A basic consumer moisture meter can give you a useful baseline reading, but a full diagnosis behind closed-cell foam typically requires a professional-grade meter and the experience to interpret it correctly.",
      },
    ],
  },

  "how-to-find-a-qualified-remediation-contractor": {
    slug: "how-to-find-a-qualified-remediation-contractor",
    heroImage: "/images/about-credibility.jpg",
    heroImageAlt: "Vetting a spray foam remediation contractor before hiring",
    intro: [
      "Once you know you're dealing with a real problem, finding the right contractor matters as much as the diagnosis itself — because spray foam remediation is a specialized job, and the wrong contractor can turn a real problem into a bigger one.",
    ],
    sections: [
      {
        heading: "Why This Isn't the Same as Hiring a Standard Installer",
        paragraphs: [
          "Removing and correctly reinstalling spray foam requires understanding not just how to spray foam, but how to safely strip existing off-ratio or moisture-compromised material, assess and remediate any substrate damage underneath, and correctly diagnose why the original installation failed so the same mistake doesn't happen again. A contractor who only does new installations may not have real experience with removal and remediation specifically — those are related but genuinely different skill sets.",
        ],
      },
      {
        heading: "The Red Flag: An Overconfident, Instant Diagnosis",
        paragraphs: [
          "Be cautious of any contractor who diagnoses your problem and proposes a fix over the phone, without an in-person inspection, especially if that fix is a quick, cheap patch for symptoms that sound like off-ratio mixing or trapped moisture. As covered on the removal-vs-repair page, a genuine fix for those problems is usually more involved than a patch — a contractor pitching an easy, cheap solution for what sounds like a real underlying problem is either not diagnosing it correctly or not being straight with you about what the job actually requires.",
        ],
      },
      {
        heading: "What to Actually Ask Before Hiring Anyone",
        paragraphs: [
          "Ask specifically about their experience with removal and remediation, not just new installation — how many similar jobs have they done, and can they describe a comparable situation. Ask how they'll verify substrate moisture before reinstalling, since applying new foam over wood that's still wet just recreates the original problem. Ask for their process for confirming the new installation is correctly ratio-mixed, not just their general safety practices. A contractor who answers these specifically and confidently is a different signal than one who gives vague reassurances.",
        ],
      },
      {
        heading: "Licensing, Insurance, and Documentation",
        paragraphs: [
          "Beyond spray-foam-specific experience, standard contractor vetting still applies: verify their license is current and appropriate for the work, confirm they carry general liability insurance, and get a written scope of work and quote before anything starts — not a verbal agreement. A contractor doing legitimate remediation work should be comfortable providing all of this without hesitation.",
        ],
      },
      {
        heading: "Getting Connected to a Vetted Professional",
        paragraphs: [
          "If you're not sure where to start, Contractors Choice Agency's network includes contractors experienced with this specific kind of work — request a second opinion and we'll help point you toward someone qualified for your specific situation, rather than leaving you to vet a stranger from a search results page with no context.",
        ],
      },
    ],
    keyTakeaways: [
      "Spray foam removal and remediation is a genuinely different skill set from new installation — ask specifically about removal/remediation experience, not just general spray foam experience.",
      "Be cautious of any contractor proposing a fix over the phone without an in-person inspection, especially a cheap quick patch for symptoms that sound like off-ratio mixing or moisture.",
      "Ask specifically how they'll verify substrate moisture before reinstalling and how they'll confirm correct ratio mixing — vague reassurances are a worse sign than specific answers.",
      "Standard vetting (current license, liability insurance, written scope and quote) still applies on top of spray-foam-specific questions.",
    ],
    faqs: [
      {
        question: "Is spray foam removal the same skill as new spray foam installation?",
        answer: "Related but genuinely different — removal and remediation requires safely stripping defective material, assessing substrate damage, and correctly diagnosing why the original job failed, which a new-installation-only contractor may not have real experience with.",
      },
      {
        question: "What's a red flag when hiring someone for a spray foam problem?",
        answer: "A contractor who diagnoses the problem and proposes a fix over the phone without an in-person inspection, especially a cheap quick patch for symptoms that sound like off-ratio mixing or trapped moisture — those problems usually require more than a patch to actually fix.",
      },
      {
        question: "What should I ask a contractor before hiring them for spray foam remediation?",
        answer: "Their specific removal/remediation experience, how they'll verify substrate moisture before reinstalling, and how they'll confirm the new installation is correctly ratio-mixed — plus standard vetting like current license, liability insurance, and a written scope and quote.",
      },
    ],
  },
};
