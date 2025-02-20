// import garage from "../../assets/garage.png";
// import savingreport from "../../assets/savingreport.png";

export interface Project {
    title: string;
    description: string;
    image: string;
    liveLink: string;
    codeLink: string;
  }

export const projects: Project[] = [
  {
    title: "PiggyVest Savings Report",
    description:
      "I led the design for PiggyVest's Savings Report '23, a data-driven deep dive into Nigeria's financial habits. Working closely with the Content Team, I transformed the report into an engaging, interactive experience, using creative data visualizations and standout highlights to make the information accessible and fun. The report quickly gained traction, reaching over 105K views in the first 24 hours and trending on X. It also contributed to 10K+ new signups for PiggyVest's newsletter, sparking important conversations about financial habits.",
    image: "/savingreport.png",
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/project1",
  },
  {
    title: "The Garage",
    description: "I was the sole designer for The Garage NG's website, working closely with our developers and growth team to create a user-friendly platform that speaks to the next generation of remote work talent on Nigerian campuses. I introduced a 3D model of the co-working space, allowing users to take virtual tours and book spots seamlessly. The project was recognized on Lapa.ninja for its innovative approach, and the feedback from users has been overwhelmingly positive.",
    image: "/garage.png",
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/project2",
  },
];