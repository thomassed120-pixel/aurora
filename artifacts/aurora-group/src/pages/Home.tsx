import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, ChevronDown, Compass, Globe2, HeartPulse, MapPin, Send, Star, Users } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: "This feature is coming soon in the next update.",
      className: "bg-card border-primary/20 text-white",
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out to Aurora Group. Our concierge team will contact you shortly.",
      className: "bg-primary text-primary-foreground border-none",
    });
  };

  return (
    <div className="bg-background min-h-screen overflow-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          {/* luxury hotel lobby */}
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80"
            alt="Luxury Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <FadeIn delay={0.2}>
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6 block">
              Welcome to the Extraordinary
            </span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 leading-tight text-glow">
              Where Luxury <br />
              <span className="italic font-light text-white/90">Meets Life</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Aurora Group — A global leader in hospitality, lifestyle, and human experience. Curating unforgettable moments across the world's most iconic destinations.
            </p>
          </FadeIn>
          <FadeIn delay={0.8} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => handleAction("Explore Destinations")}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide uppercase text-sm rounded-none hover:bg-white hover:text-background transition-all duration-300 w-full sm:w-auto"
            >
              Explore Our World
            </button>
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold tracking-wide uppercase text-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
          </FadeIn>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4" />
                {/* people in meeting/business */}
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                  alt="Aurora Group Team"
                  className="relative z-10 w-full h-[500px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-5xl font-display text-white mb-8">
                Defining the Standard of <span className="text-primary italic">Excellence</span>
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed font-light">
                Aurora Group is a globally recognized lifestyle and hospitality brand. With over three decades of excellence, we have redefined the standards of luxury dining, world-class accommodations, premium real estate, and compassionate healthcare.
              </p>
              <p className="text-white/60 text-lg mb-12 leading-relaxed font-light">
                Our commitment is to enrich every life we touch — from the guests who stay in our properties to the communities we serve.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Star, label: "Excellence" },
                  { icon: Compass, label: "Innovation" },
                  { icon: Globe2, label: "Community" },
                  { icon: HeartPulse, label: "Sustainability" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <span className="text-white/80 font-medium tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. OUR DIVISIONS */}
      <section id="divisions" className="py-24 md:py-32 bg-secondary/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 md:mb-24">
            <span className="text-primary tracking-[0.2em] uppercase text-sm mb-4 block">Ecosystem of Luxury</span>
            <h2 className="text-4xl md:text-5xl font-display text-white">Our Divisions</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Aurora Dining",
                desc: "50+ fine dining establishments across 12 countries, each curated for unforgettable culinary journeys.",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
                comment: "fine dining restaurant"
              },
              {
                title: "Aurora Hotels & Resorts",
                desc: "30+ luxury properties in the world's most iconic destinations, offering exceptional comfort and service.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
                comment: "luxury hotel pool"
              },
              {
                title: "Aurora Properties",
                desc: "100+ premium residential and commercial developments redefining urban living around the globe.",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
                comment: "modern luxury apartment building"
              },
              {
                title: "Aurora Healthcare",
                desc: "10 state-of-the-art hospitals and clinics delivering world-class medical care with compassion.",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
                comment: "modern clean hospital interior"
              }
            ].map((div, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer">
                  {/* eslint-disable-next-line react/no-comment-textrules */}
                  {/* {div.comment} */}
                  <img
                    src={div.image}
                    alt={div.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl md:text-3xl font-display text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{div.title}</h3>
                    <p className="text-white/70 font-light mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-3">
                      {div.desc}
                    </p>
                    <button 
                      onClick={() => handleAction(`Learn about ${div.title}`)}
                      className="flex items-center gap-2 text-primary font-medium uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 w-fit hover:text-white"
                    >
                      Learn More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED LOCATIONS */}
      <section id="properties" className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display text-white">Signature Destinations</h2>
          </FadeIn>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-12 gap-6 md:gap-8">
          {[
            {
              name: "The Aurora Palace",
              loc: "Dubai",
              type: "Hotel & Resort",
              img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
              comment: "dubai luxury hotel"
            },
            {
              name: "Aurora Grand",
              loc: "Paris",
              type: "Hotel & Resort",
              img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&q=80",
              comment: "paris luxury room"
            },
            {
              name: "Maison Aurora",
              loc: "New York",
              type: "Fine Dining",
              img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=80",
              comment: "new york restaurant"
            },
            {
              name: "Aurora Residences",
              loc: "Singapore",
              type: "Real Estate",
              img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80",
              comment: "singapore luxury building"
            },
            {
              name: "Aurora Medical Centre",
              loc: "London",
              type: "Healthcare",
              img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
              comment: "london modern building"
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="snap-center shrink-0 w-[85vw] md:w-[400px]">
              <div className="group relative h-[500px] overflow-hidden">
                {/* eslint-disable-next-line react/no-comment-textrules */}
                {/* {item.comment} */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                <div className="absolute top-6 left-6 px-3 py-1 bg-background/80 backdrop-blur-md text-xs uppercase tracking-widest text-primary border border-primary/20">
                  {item.type}
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-2 font-medium tracking-wider uppercase">
                    <MapPin size={14} /> {item.loc}
                  </div>
                  <h3 className="text-2xl font-display text-white mb-4">{item.name}</h3>
                  <button 
                    onClick={() => handleAction(`Visit ${item.name}`)}
                    className="w-full py-3 border border-white/20 text-white hover:bg-white hover:text-background transition-colors duration-300 font-medium uppercase tracking-widest text-xs"
                  >
                    Discover
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. OUR IMPACT */}
      <section className="py-24 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9A96E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">Global Imprint</h2>
            <p className="text-xl text-primary font-light italic">Touching lives across 40+ countries</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: 50, suffix: "+", label: "Restaurants" },
              { num: 30, suffix: "+", label: "Hotels & Resorts" },
              { num: 100, suffix: "+", label: "Properties" },
              { num: 10, suffix: "", label: "Hospitals" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="p-6 border border-white/5 bg-background/50 hover:border-primary/30 transition-colors duration-500">
                  <div className="text-4xl md:text-6xl font-display text-white mb-2 text-glow">
                    <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAREERS */}
      <section id="careers" className="relative py-32 md:py-48 flex items-center justify-center">
        <div className="absolute inset-0">
          {/* team working together */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt="Careers at Aurora"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">Build Your Future With Us</h2>
            <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
              Join a team of 50,000+ professionals dedicated to excellence in hospitality, real estate, and healthcare.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Growth', 'Purpose', 'Community'].map((val) => (
                <span key={val} className="px-6 py-2 rounded-full border border-primary/50 text-primary bg-primary/10 text-sm uppercase tracking-wider font-medium">
                  {val}
                </span>
              ))}
            </div>

            <button 
              onClick={() => handleAction("View Job Openings")}
              className="px-10 py-5 bg-white text-background font-bold tracking-widest uppercase hover:bg-primary transition-colors duration-300"
            >
              Explore Careers
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 7. CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-secondary/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="right">
              <h2 className="text-4xl font-display text-white mb-8">Get in Touch</h2>
              <p className="text-white/60 font-light text-lg mb-12">
                For general inquiries, partnership opportunities, or media requests, please connect with our dedicated concierge team.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-primary uppercase tracking-widest text-sm font-medium mb-2">Corporate Headquarters</h4>
                  <p className="text-white/80 font-light">Aurora Tower, Level 88<br/>Downtown Dubai, UAE</p>
                </div>
                <div>
                  <h4 className="text-primary uppercase tracking-widest text-sm font-medium mb-2">Contact</h4>
                  <p className="text-white/80 font-light hover:text-primary transition-colors cursor-pointer block mb-1">concierge@auroragroup.com</p>
                  <p className="text-white/80 font-light hover:text-primary transition-colors cursor-pointer">+1 (800) AURORA-1</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <form onSubmit={handleFormSubmit} className="glass-panel p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden">
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                
                <div>
                  <label htmlFor="name" className="block text-white/70 text-sm font-medium uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-background/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-background/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm font-medium uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-background/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we assist you?"
                  />
                </div>
                <button 
                  type="submit"
                  className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-background transition-colors duration-300"
                >
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-wider text-white">
              AURORA <span className="text-primary font-normal italic">Group</span>
            </span>
            <p className="text-white/40 text-sm mt-2">Redefining Luxury. Enriching Lives.</p>
          </div>
          
          <div className="text-white/40 text-sm font-light">
            &copy; {new Date().getFullYear()} Aurora Group. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
