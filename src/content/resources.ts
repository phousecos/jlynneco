// Resources are an INDEX, not a copy. Each item's canonical home stays where
// it is already published (podcast host, the Transformidable CMS, the book's
// retailer, a file host); these pages link out to it.
//
// This static array is the data shape the page renders from. To auto-sync
// later, replace it with a fetch — RSS for the podcast, the Transformidable
// CMS API (WordPress REST/GraphQL or a headless CMS) for essays/articles —
// without changing the page. Set `href` to the canonical source; when it's a
// real URL the card becomes a link, otherwise it renders as an outline card.
//
// The items below are PLACEHOLDERS to show the structure. Knowledge Base is
// intentionally omitted for now.

// Download filters. The values are the J. Lynne library's codes (jlynne.io), so
// library items need no translation; the labels are what visitors see.

// Topic: the playbook tracks. A download with no topic (a cross-track piece)
// shows under every topic.
export type Topic = "T1" | "T2" | "T3" | "T4" | "T5" | "T6" | "T7" | "T8";

export const topicLabels: Record<Topic, string> = {
  T1: "ERP transformation",
  T2: "Technology controls",
  T3: "Leadership transition",
  T4: "M&A and separation",
  T5: "Distress and recovery",
  T6: "Vendor portfolio",
  T7: "Fractional CIO",
  T8: "AI governance",
};

// Industry: the library's sector editions. "all" editions show under every
// industry.
export type Industry =
  | "private-sector"
  | "credit-union"
  | "higher-ed-nonprofit"
  | "government";

export const industryLabels: Record<Industry, string> = {
  "private-sector": "Private Sector",
  "credit-union": "Credit Unions",
  "higher-ed-nonprofit": "Higher Education & Nonprofit",
  government: "Government",
};

// Type of file: the library's asset types.
export type FileType =
  | "governance-brief"
  | "board-brief"
  | "checklist"
  | "guide"
  | "workbook"
  | "webinar-recording"
  | "briefing-cut"
  | "short-video"
  | "post"
  | "research-note"
  | "cover-note-template"
  | "deck";

export const fileTypeLabels: Record<FileType, string> = {
  "governance-brief": "Governance Brief",
  "board-brief": "Board Brief",
  checklist: "Checklist",
  guide: "Guide",
  workbook: "Workbook",
  "webinar-recording": "Webinar Recording",
  "briefing-cut": "Briefing",
  "short-video": "Video",
  post: "Post",
  "research-note": "Research Note",
  "cover-note-template": "Template",
  deck: "Deck",
};

export type ResourceItem = {
  title: string;
  description: string;
  meta?: string; // e.g. "Episode", "Essay", "Book", "PDF"
  href?: string; // canonical source; when set, the card links out
  // Downloads only: the filters it appears under.
  topics?: Topic[]; // empty or absent: every topic
  industry?: Industry | "all";
  fileType?: FileType;
};

export type ResourceGroup = {
  id: string; // anchor target, matches the nav dropdown links
  label: string; // eyebrow / nav label
  heading: string;
  intro: string;
  source?: string; // where the canonical content lives (shown as a hint)
  items: ResourceItem[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    id: "podcast",
    label: "Podcast",
    heading: "Conversations on governing transformation.",
    intro:
      "The people and ideas behind transformations that hold, and the ones that don't. New episodes on governance, leadership, and executive decision-making.",
    source: "Syndicate from the podcast RSS feed.",
    items: [
      {
        meta: "Episode",
        title: "When governance, not technology, decides the outcome",
        description:
          "How leadership discipline separates transformations that hold from the ones that don't.",
      },
      {
        meta: "Episode",
        title: "Reading a program honestly, before the post-mortem",
        description:
          "The early signals that a major initiative is drifting, and what executives can do about them.",
      },
    ],
  },
  {
    id: "speaking",
    label: "Speaking",
    heading: "Keynotes, panels, and executive briefings.",
    intro:
      "Jerri speaks to boards, executive teams, and industry audiences on governing transformation: why major initiatives fail, and the leadership discipline that changes the outcome. Available for keynotes, panels, and private executive sessions.",
    source: "Link each engagement to its event or a booking form.",
    items: [
      {
        meta: "Keynote",
        title: "Why transformation is a leadership problem",
        description:
          "A keynote on the governance discipline that separates transformations that hold from the ones that don't.",
      },
      {
        meta: "Workshop",
        title: "Governing the initiative you can't afford to lose",
        description:
          "An executive session on decision rights, risk visibility, and accountability across a major program.",
      },
      {
        meta: "Booking",
        title: "Invite Jerri to speak",
        description:
          "Share the audience, format, and date, and we'll follow up to shape the session.",
        href: "/contact",
      },
    ],
  },
  {
    id: "transformidable",
    label: "Transformidable",
    heading: "Essays and frameworks, in depth.",
    intro:
      "The firm's writing hub: long-form thinking on governance, transformation, and why leadership determines outcomes.",
    source: "Pull from the Transformidable CMS.",
    items: [
      {
        meta: "Essay",
        title: "Why transformation is a leadership problem",
        description:
          "The case for treating governance as an active executive discipline.",
      },
      {
        meta: "Framework",
        title: "The five stages of governing transformation",
        description:
          "A field guide to the Transformidable Governance Method.",
      },
    ],
  },
  {
    id: "publications",
    label: "Publications",
    heading: "The thesis, on the record.",
    intro: "Books and long-form work that put the argument in writing.",
    source: "Link to the publisher or retailer.",
    items: [
      {
        meta: "Book",
        title: "[ Book title ]",
        description:
          "The published work that puts the thesis on record: why enterprise transformations fail, and what leadership can do about it.",
      },
    ],
  },
  {
    id: "downloads",
    label: "Downloads",
    heading: "Executive-ready tools.",
    intro:
      "Briefs, checklists, and guides you can share with your leadership team. Filter by topic, industry, and type for guidance tuned to your organization.",
    source:
      "Pulled from the J. Lynne library (jlynne.io): Final assets marked for website download. The files in /public/downloads are the fallback when the library is unreachable.",
    // Each fallback file is tagged like a library item. Files written for
    // every sector are the "all" edition; vertical editions carry their industry.
    items: [
      {
        meta: "Overview",
        title: "Executive Governance Overview",
        description:
          "How governance works around a major initiative, at a glance.",
        href: "/downloads/Executive-Governance-Overview-Private-Sector.pdf",
        industry: "private-sector",
        fileType: "guide",
      },
      {
        meta: "Checklist",
        title: "Board Checklist",
        description:
          "Board-level questions for overseeing a major technology program.",
        href: "/downloads/Board-Checklist-Private-Sector.pdf",
        industry: "private-sector",
        fileType: "checklist",
      },
      {
        meta: "Checklist",
        title: "Governance Readiness Checklist",
        description: "Assess governance readiness before you commit.",
        href: "/downloads/Governance-Readiness-Checklist-Private-Sector.pdf",
        industry: "private-sector",
        fileType: "checklist",
      },
      {
        meta: "Checklist",
        title: "AI Governance Checklist",
        description:
          "A checklist for governing AI adoption with the right oversight.",
        href: "/downloads/AI-Governance-Checklist.pdf",
        topics: ["T8"],
        industry: "all",
        fileType: "checklist",
      },
      {
        meta: "Guide",
        title: "Steering Committee Guide",
        description:
          "How to run a steering committee that actually governs the work.",
        href: "/downloads/Steering-Committee-Guide.pdf",
        industry: "all",
        fileType: "guide",
      },
      {
        meta: "Checklist",
        title: "Transformation Readiness Checklist",
        description:
          "Gauge whether your organization is ready to take on a major initiative.",
        href: "/downloads/Transformation-Readiness-Checklist.pdf",
        industry: "all",
        fileType: "checklist",
      },
      {
        meta: "Guide",
        title: "Vendor Governance Guide",
        description: "Keeping implementation partners accountable to leadership.",
        href: "/downloads/Vendor-Governance-Guide.pdf",
        topics: ["T6"],
        industry: "all",
        fileType: "guide",
      },
      {
        meta: "Overview",
        title: "Executive Governance Overview",
        description: "Governing transformation in mission-driven institutions.",
        href: "/downloads/Executive-Governance-Overview-Higher-Ed-and-Nonprofit.pdf",
        industry: "higher-ed-nonprofit",
        fileType: "guide",
      },
      {
        meta: "Checklist",
        title: "Board Checklist",
        description:
          "Board and trustee oversight questions for higher-ed and nonprofit programs.",
        href: "/downloads/Board-Checklist-Higher-Ed-and-Nonprofit.pdf",
        industry: "higher-ed-nonprofit",
        fileType: "checklist",
      },
      {
        meta: "Checklist",
        title: "Governance Readiness Checklist",
        description:
          "Readiness questions tuned to higher-ed and nonprofit governance.",
        href: "/downloads/Governance-Readiness-Checklist-Higher-Ed-and-Nonprofit.pdf",
        industry: "higher-ed-nonprofit",
        fileType: "checklist",
      },
      {
        meta: "Overview",
        title: "Executive Governance Overview",
        description:
          "Governing a core or technology program at a credit union.",
        href: "/downloads/Executive-Governance-Overview-Credit-Unions.pdf",
        industry: "credit-union",
        fileType: "guide",
      },
      {
        meta: "Checklist",
        title: "Board Checklist",
        description:
          "Board and supervisory-committee oversight for credit union programs.",
        href: "/downloads/Board-Checklist-Credit-Unions.pdf",
        industry: "credit-union",
        fileType: "checklist",
      },
      {
        meta: "Checklist",
        title: "Governance Readiness Checklist",
        description: "Readiness questions tuned to credit union governance.",
        href: "/downloads/Governance-Readiness-Checklist-Credit-Unions.pdf",
        industry: "credit-union",
        fileType: "checklist",
      },
    ],
  },
];
