import { Code2, Layout, Lightbulb, Rocket } from 'lucide-react';
import React from 'react';

const highlights = [
   {
  icon: Code2,
  title: "Clean Code",
  description: "Writing readable, maintainable, and scalable code for long-term success.",
},
{
  icon: Layout,
  title: "Responsive Design",
  description: "Crafting interfaces that adapt seamlessly across all screen sizes.",
},
{
  icon: Rocket,
  title: "Performance Optimization",
  description: "Improving speed and efficiency for smooth, high-performing applications.",
},
{
  icon: Lightbulb,
  title: "Continuous Learning",
  description: "Staying updated with modern tools and technologies to build better solutions.",
}

];

const About = () => {
    return (
       <section id='about' className=' py-32 relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
                {/* left column */}
                <div className='space-y-8'>
                    <div className='animate-fade-in'>
                    <span className='text-secondary-foreground text-sm font-medium tracking-wide uppercase'>About Me</span>
                </div>

                <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                    Building the future,
                    <span className='font-serif italic font-normal text-white'> one component at a time.</span>
                </h2>
                
              <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                  <p>
                    I’m a passionate Software Engineer and Computer Science student who loves creating meaningful experiences on the web and turning ideas into real, usable products.
                </p>
                <p>
                    I focus on building clean, reusable components, scalable architectures, and intuitive interfaces. I enjoy breaking down complex problems and crafting solutions that balance performance, maintainability, and great user experience.
                </p>
                <p>
                    For me, development is more than writing code—it’s a craft. I care about details, continuous growth, and building digital products that are reliable, purposeful, and ready for the future.
                </p>
                </div>
                <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                    <p className='text-lg font-medium italic text-foreground'>
                        My mission is to keep learning and building things that actually matter. I focus on writing clean code, understanding problems deeply, and improving a little with every project I work on.
                    </p>
                </div>
              </div>
              {/* right column Highlight */}
              <div className='grid sm:grid-cols-2 gap-6  '>
            {highlights.map((item, idx) => (
            <div key={idx} className='glass  p-6 rounded-2xl animate-fade-in' style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                    <item.icon className='w-6 h-6 text-primary'/>
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>{item.description}</p>
            </div>
            ))}
              </div>
            </div>
        </div>
       </section>
    );
};

export default About;