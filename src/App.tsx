/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronDown, 
  Droplets, 
  Zap, 
  Leaf, 
  Star,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-3xl font-display font-bold tracking-tight text-brand-orange">
          Peelo
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm font-medium hover:text-brand-orange transition-colors">Our Ethos</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-orange transition-colors">Stories</a>
          <a href="#faq" className="text-sm font-medium hover:text-brand-orange transition-colors">FAQ</a>
          <button className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-orange/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20">
            Buy Now <ShoppingBag size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-brand-ink" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl"
          >
            <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Our Ethos</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Stories</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">FAQ</a>
            <button className="bg-brand-orange text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              Buy Now <ShoppingBag size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-brand-orange/5 blur-3xl rounded-full" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            100% Organic & Raw
          </div>
          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8 font-bold">
            Nature's <span className="text-brand-orange italic">Purest</span> Refreshment.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed font-body">
            Peelo captures the vibrant energy of sun-ripened fruits. No added sugar. No additives. Just pure, crisp vitality delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-orange text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-orange/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/30">
              Shop Peelo Now
            </button>
            <button className="px-10 py-5 rounded-full text-lg font-bold border-2 border-brand-ink/10 hover:border-brand-ink/30 transition-all flex items-center justify-center gap-2">
              Our Story <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&q=80&w=800" 
              alt="Peelo Organic Juice" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-sm font-bold opacity-80 mb-2">LIMITED BATCH</p>
                <p className="text-2xl font-display">Spring Harvest 2024</p>
              </div>
            </div>
          </div>
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green">
                <Leaf />
              </div>
              <div>
                <p className="font-bold text-lg">Eco-Friendly</p>
                <p className="text-sm text-gray-500">100% Compostable Packaging</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoMarquee = () => {
  const logos = ["VOGUE", "FORBES", "WIRED", "GQ", "WELL+GOOD", "THE VERGE"];
  return (
    <div className="py-12 bg-white border-y border-gray-100 overflow-hidden select-none">
      <div className="marquee-track flex gap-20 items-center">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <span key={index} className="text-3xl font-display font-black text-gray-300 opacity-50 tracking-tighter hover:opacity-100 hover:text-brand-orange transition-all cursor-default">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Zero Added Sugar",
      desc: "Naturally sweetened with real fruit juice. We never use syrups, concentrates, or artificial flavorings."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Natural Vitality",
      desc: "The vitamins and minerals found in our cold-pressed fruits provide a clean energy boost that lasts."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Farm to Bottle",
      desc: "We source directly from certified organic family farms, ensuring the highest nutrient density possible."
    }
  ];

  return (
    <section id="benefits" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl mb-6">Designed for Body & Mind</h2>
          <p className="text-xl text-gray-500 font-body">Crafted meticulously focusing on nutritional integrity and flavor profile.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2rem] bg-brand-cream border border-gray-50 hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-8">
                {b.icon}
              </div>
              <h3 className="text-2xl mb-4 font-bold">{b.title}</h3>
              <p className="text-gray-600 leading-relaxed font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Peelo is my go-to post-workout drink. It's so refreshing and I love that there's absolutely no garbage in it. Just fruit.",
      author: "Sarah Jenkins",
      role: "Fitness Instructor",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "Finally, a healthy beverage my kids actually love. We replaced soda with Peelo and nobody's looking back. A household staple.",
      author: "Mark Thompson",
      role: "Father of Three",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-brand-ink text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-orange rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-green rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-7xl mb-20 text-center">The Peelo <span className="italic text-brand-orange">People</span></h2>
        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-[3rem]">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="#FF8C42" color="#FF8C42" />)}
              </div>
              <p className="text-2xl md:text-3xl font-display italic leading-relaxed mb-10">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.img} alt={r.author} className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all border-2 border-brand-orange/30" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-lg font-bold">{r.author}</p>
                  <p className="text-brand-orange/70 text-sm font-bold uppercase tracking-widest">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Is Peelo 100% organic?",
      a: "Yes, every single fruit used in Peelo is sourced from certified organic farms that practice regenerative agriculture."
    },
    {
      q: "How long does it stay fresh?",
      a: "Because we don't use preservatives, Peelo has a 6-month shelf life in the pantry if unopened. Once opened, keep it chilled and enjoy within 5 days."
    },
    {
      q: "Do you use plastic bottles?",
      a: "Never. All Peelo beverages are bottled in 100% infinitely recyclable aluminum or glass, and our shipping materials are fully compostable."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-16 text-center">Questions? We've Got Answers.</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group border border-gray-100 rounded-3xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-8 bg-brand-cream cursor-pointer transition-all hover:bg-gray-50">
                <h3 className="text-lg md:text-xl font-bold">{f.q}</h3>
                <ChevronDown className="transition-transform duration-300 group-open:-rotate-180 text-brand-orange" />
              </summary>
              <div className="p-8 bg-white border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed font-body">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-brand-orange">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl text-white mb-10 leading-none">Ready to Taste the <span className="italic text-brand-ink">Pure</span> Refreshment?</h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-body">Join 50,000+ people who started their journey to a healthier, more vibrant lifestyle with Peelo.</p>
        <button className="bg-white text-brand-orange px-12 py-6 rounded-full text-xl font-black hover:scale-110 active:scale-95 transition-all shadow-2xl">
          Get Your First Pack Today
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-cream py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h3 className="text-4xl font-display font-bold text-brand-orange mb-6">Peelo.</h3>
            <p className="text-gray-600 mb-8 max-w-md">Nature's purest way to stay energized. Cold-pressed, organic, and delivered with love.</p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</p>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-brand-orange">Store</a></li>
              <li><a href="#" className="hover:text-brand-orange">Wholesale</a></li>
              <li><a href="#" className="hover:text-brand-orange">Subscriptions</a></li>
              <li><a href="#" className="hover:text-brand-orange">Impact Report</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-6 uppercase tracking-widest text-xs">Stay in the Loop</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="hello@peelo.com" 
                className="bg-white border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20" 
              />
              <button className="bg-brand-orange text-white py-3 rounded-xl font-bold hover:bg-brand-orange/90 transition-all">Join Tribe</button>
            </form>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-200 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">© 2024 Peelo Beverage Co. All rights reserved.</p>
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange/30">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
