export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Aspect-based Sentiment Analysis with Multi-task Learning",
    year: 2022,
    description: "Natural language processing conference paper at ICCBD 2022",
    url: "https://ieeexplore.ieee.org/document/10080017",
  },
];
