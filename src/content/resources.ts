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

export type ResourceItem = {
  title: string;
  description: string;
  meta?: string; // e.g. "Episode", "Essay", "Book", "PDF"
  href?: string; // canonical source; when set, the card links out
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
      "Jerri speaks to boards, executive teams, and industry audiences on governing transformation — why major initiatives fail, and the leadership discipline that changes the outcome. Available for keynotes, panels, and private executive sessions.",
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
      "Briefs, frameworks, and overviews you can share with your leadership team.",
    source: "Host the files in /public or a bucket.",
    items: [
      {
        meta: "PDF",
        title: "Executive Governance Overview",
        description: "A short brief you can share with your leadership team.",
      },
      {
        meta: "PDF",
        title: "Governance Assessment overview",
        description: "What a Governance Assessment evaluates and delivers.",
      },
    ],
  },
];
