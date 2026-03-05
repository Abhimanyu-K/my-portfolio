import { SkillCategory } from '../types/skill';

export const skills: SkillCategory[] = [
  {
    category: 'Backend',
    skills: ['Golang', 'Python', 'Django', 'Celery', 'Node.js', 'Express', 'Java'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Redshift'],
  },
  {
    category: 'Infrastructure & DevOps',
    skills: ['Docker', 'Kubernetes', 'Kafka', 'CI/CD', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Cloud Platforms',
    skills: ['AWS S3', 'AWS Lambda', 'AWS Redshift', 'AWS EC2', 'Firehose'],
  },
  {
    category: 'Frontend',
    skills: ['JavaScript', 'Angular', 'React', 'TypeScript'],
  },
  {
    category: 'Other',
    skills: ['Microservices', 'Distributed Systems', 'Payment Systems', 'UPI', 'Stripe'],
  },
];
