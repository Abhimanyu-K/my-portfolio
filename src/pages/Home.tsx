import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';

export const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
