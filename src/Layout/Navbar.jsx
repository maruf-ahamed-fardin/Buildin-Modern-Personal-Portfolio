import { Menu, X } from "lucide-react";
import Button from "../Components/Button";
import { useEffect, useState } from "react";

  const navLinks =[
        {href: "#about", label: "About"},
        {href: "#projects", label: "Projects"},
        {href: "#experience", label: "Exprience"},
        {href: "#testimonials", label: "Testimonials"},
        
    ];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    },[]);

    return (
        
            <header className={`fixed top-0 left-0 right-0 transition-all duration-300
            ${isScrolled?"glass-strong py-3":"bg-transparent py-5"}  z-50`}>
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                         MAF <span className="text-primary">.</span> 
                    </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full flex items-center px-2 py-1 gap-1">
                        {navLinks.map((link,index) => (
                            <a href={link.href} key={index} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                        ))}
                    </div>
                </div>

                    <div className="hidden md:block">
                        <Button size="sm" 
                        onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
                        </div>

                        {/* mobile button */}
                        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() =>setIsMobileMenuOpen((prev)=> !prev)}>{isMobileMenuOpen ? <X sixe={24} /> : 
                        <Menu size={24} />}

                        </button>
                </nav>
                {/* mobile menu */}
                {isMobileMenuOpen &&(
                    <div className="md:hidden glass-strong animate-fade-in">
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                             {navLinks.map((link,index) => (
                            <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}
                            </a>))}
                            <Button>Contact Me</Button>
                        </div>
                </div>)}
            </header>
       
    );
};

export default Navbar;