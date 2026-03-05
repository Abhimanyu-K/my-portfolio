import { SocialLink } from '../types/skill';

export const personalInfo = {
  name: 'Abhimanyu Kumbhar',
  title: 'Software Development Engineer',
  tagline: 'Backend-focused engineer specializing in scalable payment and data systems',
  bio: `Backend-focused Software Engineer with ~3 years of experience designing and scaling payment and data systems at Razorpay and Inkle. Strong in Golang, Python, Kafka, and AWS, with hands-on experience in microservices, distributed processing, and high-throughput system reliability. Passionate about building robust, efficient systems that handle real-world scale.`,
  email: 'abhimanyukumbharc@gmail.com',
  location: 'Bangalore, India',
  yearsOfExperience: 3,
  profileImage: '/assets/images/profile.jpg',
  resume: '/resume.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Abhimanyu-K',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/abhimanyukumbhar',
    icon: 'linkedin',
  },
  {
    platform: 'Email',
    url: 'mailto:abhimanyukumbharc@gmail.com',
    icon: 'email',
  },
];
