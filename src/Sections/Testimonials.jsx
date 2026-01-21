import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        quote:
            "Pedro is one of the most talented engineers I’ve worked with. His attention to detail and problem-solving skills are outstanding.",
        author: "Sarah Chen",
        role: "CTO, Tech Innovators Inc.",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
        quote:
            "Working with Pedro was a game-changer for our project. He delivered high-quality code ahead of schedule.",
        author: "Michael Rodriguez",
        role: "Product Manager, Digital Solutions",
        avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
        quote:
            "Pedro’s expertise in React and TypeScript helped us rebuild our entire frontend with confidence.",
        author: "Emily Watson",
        role: "Engineering Lead, StartUp Labs",
        avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
        quote:
            "An exceptional developer who truly understands both business needs and technical excellence.",
        author: "David Kim",
        role: "Founder, NextGen Apps",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
        quote:
            "Pedro consistently brings innovative ideas to the table and executes them flawlessly.",
        author: "Laura Martinez",
        role: "Head of Engineering, CloudWorks",
        avatar:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop"
    }
];


const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }
    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header  */}
                <div
                    className="text-center max-w-3xl 
        mx-auto mb-16"
                >
                    <span
                        className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
                    >
                        What People Say
                    </span>
                    <h2
                        className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
                    >
                        Kind words from{" "}
                        <span
                            className="font-serif italic 
            font-normal text-white"
                        >
                            amazing people.
                        </span>
                    </h2>
                </div>
                {/* Testimonial carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* main testimonials */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-6">"{testimonials[activeIdx].quote}"</blockquote>
                            <div className="flex items-center gap-4">
                                <img src={testimonials[activeIdx].avatar} alt={testimonials[activeIdx].author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" />
                                <div className="flex items-center gap-4 ">
                                    <div className="font-semibold">
                                        {testimonials[activeIdx].author}
                                        <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* testimonials nevgigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((__, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`w-2 h-2 transition-all duration-300 rounded-full ${idx === activeIdx
                                                ? "w-8 bg-primary"
                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                    />
                                ))}

                            </div>
                            <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;