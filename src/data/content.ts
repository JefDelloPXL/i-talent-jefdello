// Edit this file to update site content. No code knowledge needed —
// just replace the text strings and image imports.

import heroImg from "@/assets/hero-1.jpg";
import hlHackathon from "@/assets/hl-hackathon.jpg";
import hlSeminar from "@/assets/hl-seminar.jpg";
import hlProject from "@/assets/hl-project.jpg";
import portrait from "@/assets/portrait.jpg";
import inline1 from "@/assets/inline-1.jpg";
import inline2 from "@/assets/inline-2.jpg";

export const site = {
  name: "Your Name",
  tagline: "CS student documenting the path.",
  intro:
    "A quiet record of the seminars, hackathons and side-projects that shaped my time in college — what I tried, what I learned, and what I'd do differently.",
  hero: heroImg,
};

export const about = {
  portrait,
  bio: [
    "I'm a Computer Science student fascinated by the small moments where ideas turn into working things — a script that finally compiles, a demo that survives the first real user, a teammate who explains an algorithm in a way that finally clicks.",
    "This site is part assignment, part scrapbook: a place to slow down and look at what the last few years actually added up to.",
  ],
  interests: ["Systems & low-level code", "Human-centered design", "Open source", "Coffee at 2am"],
};

export type EssayBlock =
  | { type: "p"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string; width?: "full" | "wide" | "inline" };

export type Highlight = {
  slug: string;
  title: string;
  teaser: string;
  context: string;
  hero: string;
  body: EssayBlock[];
};

export const highlights: Highlight[] = [
  {
    slug: "first-hackathon",
    title: "My First Hackathon",
    teaser: "48 hours, three strangers, one stubborn bug.",
    context: "Year 1 · Spring · 48-hour campus hackathon",
    hero: hlHackathon,
    body: [
      { type: "p", text: "I almost didn't sign up. The form sat open in a tab for three days before a friend leaned over and submitted it for me. By Friday evening I was standing in a lecture hall full of laptops, trying to remember how to introduce myself." },
      { type: "p", text: "Our team formed in the awkward ten minutes after the keynote — two strangers and me, united mostly by a shared inability to leave. We picked an idea that sounded clever at midnight and looked impossible by 3am." },
      { type: "img", src: inline1, alt: "Glowing circuit traces", caption: "Somewhere around hour 14, the wiring started to make sense.", width: "wide" },
      { type: "p", text: "What I actually learned that weekend had nothing to do with the framework we used. It was about how to disagree quickly, how to throw away code without flinching, and how to ask for help from someone who looked just as lost as I did." },
      { type: "p", text: "We didn't win. We placed somewhere quietly mid-table. But I left with a working demo, two new friends, and the first real proof that I could build something under pressure." },
    ],
  },
  {
    slug: "research-seminar",
    title: "The Research Seminar That Changed My Major",
    teaser: "I walked in for the free pizza and walked out with a thesis idea.",
    context: "Year 2 · Autumn · Department research series",
    hero: hlSeminar,
    body: [
      { type: "p", text: "The talk was on something I won't pretend I fully understood — distributed consensus, formal proofs, a whiteboard that filled up faster than I could photograph it. I sat in the back, half-expecting to leave at the break." },
      { type: "p", text: "I didn't leave. The speaker had a way of treating the audience like collaborators rather than students, and for the first time the field stopped feeling like a syllabus and started feeling like a conversation I was allowed to join." },
      { type: "img", src: inline2, alt: "Hands on a keyboard at night", caption: "I went home and started reading.", width: "inline" },
      { type: "p", text: "I emailed the professor that night. The reply came two days later: a reading list, an open invitation to the lab meeting, and a single sentence that I still think about — \"the best questions are the ones you can't quite phrase yet.\"" },
      { type: "p", text: "I changed my elective track the following semester. The seminar didn't teach me an algorithm; it taught me that curiosity is a skill you practice in public." },
    ],
  },
  {
    slug: "capstone-project",
    title: "Building the Capstone",
    teaser: "Six months, one team, and the slow art of finishing.",
    context: "Year 3 · Year-long capstone project",
    hero: hlProject,
    body: [
      { type: "p", text: "The capstone was supposed to be the hard part. In the end the hard part wasn't the code — it was deciding, every week, what not to build." },
      { type: "p", text: "We started with a feature list long enough to embarrass us. By month two we had cut it in half. By month four we were defending the cuts to a panel of advisors who, gently and correctly, asked us to cut more." },
      { type: "img", src: inline1, alt: "Detail shot of the project", caption: "The architecture diagram went through nine versions.", width: "wide" },
      { type: "p", text: "I learned to write specs I actually re-read. I learned that a fifteen-minute standup is worth more than a two-hour Slack thread. I learned that the person who keeps the project's emotional temperature steady is doing real engineering work, even if it never shows up in the commit log." },
      { type: "p", text: "We shipped. It wasn't perfect — it was finished, which turned out to be a different and harder thing." },
    ],
  },
];

export type Activity = {
  date: string; // YYYY-MM
  year: number; // college year (1, 2, 3, ...)
  title: string;
  type: "Seminar" | "Hackathon" | "Workshop" | "Project" | "Volunteer" | "Course";
  description: string;
};

export const activities: Activity[] = [
  { date: "2022-10", year: 1, title: "Intro to CS Welcome Talk", type: "Seminar", description: "Department orientation and faculty research overview." },
  { date: "2022-11", year: 1, title: "Git & GitHub Workshop", type: "Workshop", description: "Hands-on intro to version control and collaborative workflows." },
  { date: "2023-03", year: 1, title: "Campus Hackathon", type: "Hackathon", description: "First hackathon — placed mid-table with a 48-hour group project." },
  { date: "2023-05", year: 1, title: "Open Source Contribution Day", type: "Volunteer", description: "Submitted my first accepted PR to a small documentation library." },

  { date: "2023-10", year: 2, title: "Distributed Systems Research Seminar", type: "Seminar", description: "The talk that nudged me into systems work." },
  { date: "2023-11", year: 2, title: "Algorithms II", type: "Course", description: "Highlight elective: graph algorithms and amortized analysis." },
  { date: "2024-02", year: 2, title: "Regional Hackathon", type: "Hackathon", description: "Built a real-time collab tool with a four-person team." },
  { date: "2024-04", year: 2, title: "UX for Engineers Workshop", type: "Workshop", description: "Two-day workshop on user research and prototyping." },

  { date: "2024-09", year: 3, title: "Capstone Kickoff", type: "Project", description: "Started the year-long capstone with a team of four." },
  { date: "2024-11", year: 3, title: "AI Ethics Seminar", type: "Seminar", description: "Guest lecture series on responsibility in ML systems." },
  { date: "2025-02", year: 3, title: "Internal Demo Day", type: "Project", description: "Mid-capstone demo to faculty review panel." },
  { date: "2025-04", year: 3, title: "Mentoring First-Years", type: "Volunteer", description: "Weekly office hours for incoming CS students." },
];
