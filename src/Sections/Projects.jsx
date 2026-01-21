import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../Components/AnimatedBorderButton"


const projects = [
    {
        title: "Boi Poka",
        description: "Boi Poka is a modern, dark-themed book management app built with React and JavaScript. It allows book lovers to easily discover new titles, view details like genre and year, and organize their personal reading lists through a clean, intuitive interface.",
        image: "https://i.ibb.co.com/RpP1Chp2/boi-poka.png",
        tags: ["JavaScript","Tailwind", "React"],
        link: "https://maruf-ahamed-fardin.github.io/boi-poka/",
        github: "https://github.com/maruf-ahamed-fardin/boi-poka"
    },
    {
        title: "Dragon News",
        description: "The Dragon News is a modern, responsive news application designed with a professional Newspaper aesthetic. Built with a focus on clean content hierarchy and user experience, it allows readers to browse real-time updates across 11 diverse categories, from Politics to Technology.",
        image: "https://i.ibb.co.com/WvPRLp2S/dragon-news.png",
        tags: ["Tailwind", "React", "firebase"],
        link: "https://dragon-news-54137.web.app/category/1",
        github:"https://github.com/maruf-ahamed-fardin/dragon-news"
    },
    {
        title: "Hunting Phone",
        description: "Developed a responsive, search-driven web application for browsing mobile devices. This project features a dynamic search engine that filters real-time data and renders it into a clean, component-based grid.",
        image: "https://i.ibb.co.com/2fJL96V/hunting-phone.png",
        tags: ["JavaScript","Tailwind"],
        link: "https://maruf-ahamed-fardin.github.io/hunting-Phone/",
        github:"https://github.com/maruf-ahamed-fardin/hunting-Phone"
    },
    {
        title: "Alphabet Clash",
        description: "An engaging, browser-based typing game designed to test and improve keyboard speed and accuracy. This project features a vibrant, high-energy UI and focuses on real-time event handling and game logic.",
        image: "https://i.ibb.co.com/scVTyKY/alpha.png",
        tags: ["JavaScript","Tailwind"],
        link: "https://maruf-ahamed-fardin.github.io/alphabet-clash/",
        github:"https://github.com/maruf-ahamed-fardin/alphabet-clash"
    },
]

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}

        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
            <h2 className="text-4xl  md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Projects that 
                <span className="font-serif italic font-normal text-white"> make an impact.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                A selection of my recent work, from complex web applications to ainnovative tools that solve real-world problems.
            </p>
        </div>
        {/* project grid */}
        <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-xl overflow-hidden animate-fade-in md:row-span-1"
            style={{animationDelay: `${(idx + 1) * 100}ms`}}
            >
                {/* image */}
                <div className="relative overflow-hidden aspect-video">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                    />
                    {/* overlay links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={project.link} className="p-3 rounded-full glass hover:bg-primary
                         transition-all">
                            <ArrowUpRight className="w-5 h-5"/>
                        </a>
                        <a  href={project.github} className="p-3 rounded-full glass hover:bg-primary transition-all">
                            <Github className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
                {/* content */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1
                        group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 ">{project.tags.map((tag, tagIdx) =>(
                        <span key={tagIdx}
                         className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/ text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                    ))}</div>
                </div>
            </div>
        ))} 
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            {/* view all */}
            <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
        </div>
        </div>
      </section>
      
    );
};

export default Projects;