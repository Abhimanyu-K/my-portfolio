import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Razorpay',
    position: 'Software Development Engineer',
    location: 'Bangalore, India',
    startDate: '2025-03-01',
    endDate: 'Present',
    achievements: [
      'Owned and resolved a major AWS incident that caused loss of 59K UPI transactions; identified and fixed Kafka-Firehose–Lambda–Redshift pipeline, ensuring data recovery and system stability',
      'Optimized CI/CD for 27+ microservices, cutting deployment time from 50 mins to 15 mins by automating multi-arch builds, manifest generation, and quality gates',
      'Developed end-to-end tests for UPI acquiring flows, ensuring reliability across critical payment paths and reducing regression failures during releases',
      'Helped decompose a large monolith into microservices, supporting service design, configuration, and deployment workflows',
      'Improved canary rollout monitoring by integrating metrics with Prometheus and Grafana to track latency and error trends across UPI services',
    ],
    techStack: ['Golang', 'Microservices', 'Kafka', 'AWS Lambda', 'Redshift', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
  },
  {
    id: 'exp-2',
    company: 'Inkle',
    position: 'Software Engineer',
    location: 'Bangalore, India',
    startDate: '2023-05-01',
    endDate: '2025-03-01',
    achievements: [
      'Implemented a Stripe-powered bank transfer system that generated unique virtual accounts for customers, efficiently handling partial and overpayments and achieving rapid user adoption',
      'Built features for autopay using credits and scheduled payments via Stripe, improving payment compliance and boosting customer retention',
      'Developed an app consolidating US state-specific entity registrations, automating compliance workflows and reducing manual regulatory effort by 70%',
      'Engineered a scalable invoicing tool with public sharing and dynamic views, reducing invoice-related queries by 40% and improving processing time',
      'Enhanced backend performance by optimizing PostgreSQL queries and caching with Redis, improving system responsiveness',
    ],
    techStack: ['Python', 'Django', 'JavaScript', 'Stripe', 'PostgreSQL', 'Redis', 'Celery'],
  },
  {
    id: 'exp-3',
    company: 'Newgen Software',
    position: 'Software Engineer Intern',
    location: 'New Delhi, India',
    startDate: '2022-05-01',
    endDate: '2022-07-31',
    achievements: [
      'Built a Video Extraction tool in Java using the FFmpeg library, enhancing video processing by 70%',
      'Developed data parsing tools for JSON to XML conversion, increasing client processing efficiency',
    ],
    techStack: ['Java', 'FFmpeg'],
  },
  {
    id: 'exp-4',
    company: 'UExcelerate',
    position: 'Software Developer Intern',
    location: 'Hyderabad, India',
    startDate: '2022-01-01',
    endDate: '2022-04-30',
    achievements: [
      'Implemented authorization and scheduling features for Google Meet, Zoom, MS Teams into the web app',
      'Developed server-side components using Node.js and PostgreSQL, streamlining data flow and improving performance',
    ],
    techStack: ['Node.js', 'Angular', 'PostgreSQL'],
  },
];
