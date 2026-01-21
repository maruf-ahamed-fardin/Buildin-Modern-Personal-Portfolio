import React from 'react';
import Button from '../Components/Button';
import { ArrowRight, Download, Github, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import AnimatedBorderButton from '../Components/AnimatedBorderButton';
import { FaWhatsapp } from 'react-icons/fa';

const skills =[
    
    "Html",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Figma",
    "Git",
    "GitHub Actions",
    "TypeScript",
    "MongoDB",
];

const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden'>
            {/* background */}
            <div className='absolute inset-0'>
                <img src="/hero-bg.jpg" alt="Hero image " className='w-full h-full object-cover opacity-40' />
                <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background' />
            </div>

            {/* green dots */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className='absolute w-1.5 h-1.5 rounded-full opacity-60'
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}

            </div>
            {/* contents */}
            <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column */}
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                            <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
                            Software Engineer • React Specialist
                            </span>
                        </div>
                        {/* Headline */}
                        <div className='space-y-4'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                               Learning <span className=' text-primary glow-text '>Building</span> <br />and <span className='text-primary glow-text '>Crafting</span> Precise<span className='text-primary glow-text '> Digital</span> <br /> <span className=' font-normal font-serif italic text-white'>Experiences</span>
                            </h1>
                            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                                I’m Maruf Ahamed Fardin, a frontend developer specializing in JavaScript, React, and TypeScript. I build modern, responsive web applications with a strong focus on clean code, performance, and user experience, continuously refining my skills to deliver scalable, real-world solutions.
                            </p>
                        </div>
                        {/* call to actions */}
                       <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* social media links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                <span className='text-sm text-muted-foreground'>Follow: </span>
                {[
                    {icon: Github, href: "https://github.com/maruf-ahamed-fardin"},
                    {icon: Linkedin, href: "https://www.linkedin.com/in/maruf-ahamed-fardin-36a941215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
                   
                    
                ].map((social , idx)=>(
                    <a key={idx} 
                    href={social.href}
                    className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>{<social.icon className='w-6 h-8'/>}</a>
                ))}
            </div>
                    </div>
                    {/* right column profile image*/}
                    <div className='relative animate-fade-in animation-delay-300'>
                         {/* profile image */}
                    <div className='relative max-w-md mx-auto'>
                        <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'/>
                <div className='relative glass rounded-3xl p-2 glow-border'>
                        <img src="https://i.ibb.co.com/9Hbn9g7V/Profile-Me.png" alt="Maruf-Ahamed-Fardin" className='w-full aspect-[4/5 object-cover rounded-2xl'/>

                        {/* Floationg Badge */}
                    <div className='absolute  -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                            <span className='text-sm font-medium'>Available for work</span>
                        </div>
                    </div>
                        {/* Stats Badge */}
                        <div className='absolute -top-4 left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                            <div className='text-2xl font-bold text-primary'>1+</div>
                            <div className='text-xs text-muted-foreground'>Years Exp.</div>
                        </div>
                       </div>
                    </div>
                    </div>
                </div>
                {/* Skill section */}
                <div className='mt-20 animate-fade-in animataion-delay-600'>
                    <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
                    <div className='relative overflow-hidden'>
                        <div className='flex animate-marquee'>
                            {[...skills, ...skills].map((skill,idx) => (
                                <div key={idx} className='shrink-0 px-8 py-4'>
                                    <span className='text-xl font-semibold text-muted-foreground/50
                                    hover:text-muted-foreground transition-colors'>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                 <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
            </div>
            </div>
        </section>
    );
};

export default Hero;