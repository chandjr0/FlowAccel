import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export type Post = {
  slug: string;
  title: string;
  categories: string[];
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "turning-chaos-into-coordinated-collaboration",
    title: "Turning Chaos into Coordinated Collaboration",
    categories: ["Case Studies"],
    readTime: "2 Min Read",
    date: "May 20, 2026",
    author: "Joel Jorgensen",
    excerpt:
      "How one silicon engineering organization replaced firefighting with a work system that turned everyday chaos into coordinated collaboration.",
    image: blog1,
    body: [
      "Every silicon engineering leader knows the pattern: cross-functional dependencies pile up, meetings multiply, and the roadmap keeps growing while the organization's ability to deliver it stays flat.",
      "In one recent engagement, we worked with a leadership team drowning in coordination overhead. Requirements were changing weekly, architecture decisions were relitigated in every review, and manufacturing was reacting to design surprises late in the cycle.",
      "The fix wasn't more meetings. It was designing the work system around where the work actually happened — surfacing complexity early, giving each function a shared view of the roadmap, and making change visible the moment it emerged.",
      "Within one quarter, escalations dropped by more than half, milestone confidence improved, and the same team that had been in perpetual firefighting mode was shipping ahead of plan.",
    ],
  },
  {
    slug: "visualize-work-for-velocity",
    title: "Visualize Work for Velocity",
    categories: ["Leadership", "Case Studies"],
    readTime: "4 Min Read",
    date: "May 11, 2026",
    author: "Joel Jorgensen",
    excerpt:
      "Velocity doesn't come from working harder. It comes from making the work visible — so leaders can see complexity as it emerges, not after it's already cost the schedule.",
    image: blog2,
    body: [
      "Most engineering organizations treat their work as invisible. Tasks live in a hundred trackers, dependencies live in people's heads, and the true state of the program only surfaces when something breaks.",
      "Visualizing work — end-to-end, cross-functional, at the resolution leadership actually needs — is one of the highest-leverage interventions available to a silicon engineering leader.",
      "It doesn't require a new tool. It requires deciding what leadership needs to see, agreeing on how work will be represented, and building the discipline to keep the picture current.",
      "The outcome is velocity: faster decisions, earlier visibility into risk, and a team that spends its energy on the work rather than on reconstructing the state of the work.",
    ],
  },
  {
    slug: "why-is-it-so-hard-to-scale-a-business",
    title: "Why Is It So Hard to Scale a Business?",
    categories: ["Leadership", "Business"],
    readTime: "6 Min Read",
    date: "May 6, 2026",
    author: "Joel Jorgensen",
    excerpt:
      "Scaling isn't a growth problem. It's a design problem. And most organizations run out of capacity long before they run out of ambition.",
    image: blog3,
    body: [
      "Every scaling story eventually hits the same wall: the roadmap grows faster than the organization's ability to deliver it. Complexity compounds. Coordination overhead balloons. What used to fit in a leader's head no longer does.",
      "This is not a talent problem. It's a design problem. Engineering organizations design products, but very few intentionally design how product development works.",
      "The organizations that break through the wall are the ones that treat their work system as a first-class product — architected, measured, and continuously improved.",
      "When you design the work like you design the circuit, capacity grows faster than complexity. That is what makes scale sustainable.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
