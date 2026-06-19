"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const testimonials = [
  { name: "Zainu", role: "Co-Founder, Polski Kebab", text: "The website and Intelligent Nutrient Assistant developed for us have significantly enhanced our digital presence and customer experience. Their ability to combine technology with business needs is truly impressive.", img: "/assets/portfolio-1.png" },
  { name: "Shaheer", role: "Founder, Rose Corner KSA", text: "They delivered a complete end-to-end e-commerce platform tailored to our business requirements. The professionalism, attention to detail, and commitment to quality exceeded our expectations.", img: "/assets/portfolio-2.png" },
  { name: "Basil", role: "Founder, Identitys India", text: "WorkNest has streamlined our day-to-day operations and improved team productivity. The platform is intuitive, reliable, and backed by a team that genuinely understands business challenges.", img: "/assets/portfolio-1.png" },
  { name: "Salim", role: "Manager, Supply Chain Services Co. Ltd, KSA", text: "The Intelligent Cargo Tracking System transformed how we monitor shipments and manage logistics operations. The solution provided better visibility, efficiency, and decision-making across our supply chain.", img: "/assets/portfolio-2.png" },
  { name: "Hadhi", role: "Founder, Leweekend", text: "Their team has been a reliable technology partner for our e-commerce business. From technical support to solving operational challenges, they consistently deliver practical solutions that help us focus on growth and customer satisfaction.", img: "/assets/portfolio-1.png" }
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.firstElementChild?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: -(scrollAmount + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.firstElementChild?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: scrollAmount + 24, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#020817]">
      {/* 1. Navbar & Hero Section */}
      <section className="relative w-full h-[90vh] bg-boehmtech-blue text-white flex flex-col pb-16">
        {/* Background Image/Gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-boehmtech-blue/50 to-boehmtech-blue/90" />
        </div>

        {/* Navbar */}
        <nav className="relative z-10 w-full px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <Image src="/boehm logo white copy.png" alt="Boehmtech Logo" width={180} height={48} className="object-contain h-8 w-auto" priority />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link href="#products" className="hover:text-white transition-colors">Products</Link>
            <Link href="#growth" className="hover:text-white transition-colors">Growth</Link>
            <Link href="#design" className="hover:text-white transition-colors">Design</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#book" className="text-sm px-4 py-2 rounded-full border border-gray-500 hover:border-white transition-all text-white">
              Book a meeting
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 max-w-7xl mx-auto w-full">
          <div className="mb-4 text-xs tracking-widest uppercase text-gray-400">Innovating for a Sustainable Future</div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight text-white">
            <span className="text-gray-400">We</span> create intelligent AI <br className="hidden md:block"/>
            ecosystems that <br className="hidden md:block"/>
            automate, optimize, and evolve.
          </h1>
          
          <div className="mt-12 flex items-center gap-4">
            <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm hover:bg-white/20 transition-all">
              Sustainable future
            </button>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0V13M7 13L1 7M7 13L13 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        

      </section>

      {/* Wrapper for the white sections */}
      <div className="bg-white rounded-t-[40px] md:rounded-t-[60px] rounded-b-[40px] md:rounded-b-[60px] overflow-hidden pb-12 -mt-12 md:-mt-20 relative z-20 w-full">
      {/* 2. Portfolio / Bold Digital Realities Section */}
      <section className="w-full py-24 px-8 md:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 relative">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full min-h-[300px]">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              For crafting bold <br/> digital realities
            </h2>
            <div className="mt-auto pt-32 text-xs text-gray-400">innovation philosophy</div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <div className="text-xs text-gray-900 font-medium mb-4">Innovating for a Sustainable Future</div>
            <p className="text-xl font-light text-gray-400 leading-relaxed mb-8 max-w-md">
              We create experiences that <br/> ignite passion by reimagining <br/> what&apos;s possible
            </p>
            <div className="mb-16">
               <button className="px-8 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm">
                 More
               </button>
            </div>

            {/* Images side by side under the right column */}
            <div className="grid grid-cols-2 gap-6 w-[120%] -ml-[10%] md:w-full md:ml-0">
              <div className="relative h-48 md:h-56 rounded-[24px] md:rounded-[30px] overflow-hidden">
                <Image src="/assets/portfolio-1.png" alt="Portfolio 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative h-48 md:h-56 rounded-[24px] md:rounded-[30px] overflow-hidden">
                <Image src="/assets/portfolio-2.png" alt="Portfolio 2" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Manifesto Text Section */}
      <section className="w-full py-24 px-8 md:px-16 mx-auto border-t border-gray-100 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <h3 className="text-2xl md:text-[32px] font-light leading-snug text-gray-900 max-w-4xl">
            We are an AI and deep technology company <br className="hidden md:block"/>
            building intelligent, autonomous systems <span className="text-gray-400">that solve <br className="hidden md:block"/>
            real-world problems, optimize operations, <br className="hidden md:block"/>
            and enable smarter decision-making.</span>
          </h3>
          <div className="text-[10px] text-gray-400 whitespace-nowrap pt-2 uppercase tracking-wider">
            Making a difference
          </div>
        </div>
      </section>
      {/* 4. Strategy Section with Space Background */}
      <section className="relative w-[95%] mx-auto rounded-[40px] overflow-hidden my-12 bg-[#020817] text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/earth-space.png" alt="Earth from space" fill className="object-cover opacity-60" />
        </div>
        
        <div className="relative z-10 px-8 md:px-12 py-16 md:py-24 flex flex-col justify-between min-h-[600px]">
          <h2 className="text-4xl md:text-[56px] font-light max-w-xl leading-tight">
            Every project is a <br/> fusion of strategy, <br/> creativity and passion
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-end mt-20 w-full">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-8 md:mb-0">
              innovation philosophy
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap items-stretch gap-0">
              {/* Stat 1 */}
              <div className="flex flex-col justify-between border-l border-white/20 pl-8 pr-16 py-2">
                <div>
                  <div className="text-5xl font-light mb-8">200+</div>
                  <div className="text-[10px] text-gray-400 mb-1 leading-relaxed">universes created</div>
                  <div className="text-[10px] text-gray-600 italic mb-8">*or maybe more</div>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 transition-colors cursor-pointer mt-8">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col justify-between border-l border-white/20 pl-8 pr-16 py-2">
                <div>
                  <div className="text-5xl font-light mb-8">97%</div>
                  <div className="text-[10px] text-gray-400 mb-1 leading-relaxed max-w-[120px]">clients trust us for their <br/> next project</div>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 transition-colors cursor-pointer mt-8">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
              
              {/* Stat 3 */}
              <div className="flex flex-col justify-between border-l border-white/20 pl-8 pr-8 py-2">
                <div>
                  <div className="text-5xl font-light mb-8">10X</div>
                  <div className="text-[10px] text-gray-400 mb-1 leading-relaxed">team turnover</div>
                  <div className="text-[10px] text-gray-600 italic mb-8">*or maybe more</div>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 transition-colors cursor-pointer mt-8">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>

      {/* 6. Bento Grid (Debt / Management Status UI) */}
      <section id="products" className="w-full bg-[#030B24] py-24 pb-32 mt-12 rounded-[40px] md:rounded-[60px] px-8 text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Products</h2>
            <p className="text-gray-400 text-sm max-w-xl">A comprehensive approach to resolving complex situations with complete transparency.</p>
          </div>

          {/* Top Row Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#E6EAF5] text-[#030B24] rounded-[24px] p-8 hover:bg-white transition-colors cursor-pointer group flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">WorkNest</h3>
                <p className="text-sm text-gray-600 mb-8">AI Workforce & Operations Platform</p>
              </div>
              <div className="text-blue-600 group-hover:translate-x-2 transition-transform text-xl">→</div>
            </div>
            <div className="bg-[#E6EAF5] text-[#030B24] rounded-[24px] p-8 hover:bg-white transition-colors cursor-pointer group flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Zyntra BT</h3>
                <p className="text-sm text-gray-600 mb-8">Smart AI Sales Assistant</p>
              </div>
              <div className="text-blue-600 group-hover:translate-x-2 transition-transform text-xl">→</div>
            </div>
            <div className="bg-[#E6EAF5] text-[#030B24] rounded-[24px] p-8 hover:bg-white transition-colors cursor-pointer group flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Stockify.io</h3>
                <p className="text-sm text-gray-600 mb-8">AI Inventory Intelligence Platform</p>
              </div>
              <div className="text-blue-600 group-hover:translate-x-2 transition-transform text-xl">→</div>
            </div>
          </div>

          {/* Middle Row Banner CTA */}
          <a href="mailto:operations@boehmtech.co" className="bg-[#1b64f2] text-white rounded-[24px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-6 hover:shadow-xl transition-all group">
            <h3 className="font-medium text-2xl flex-1">Ready to transform your operations with AI?</h3>
            <p className="text-blue-100 text-sm flex-1">Connect with our product experts to explore custom solutions.</p>
            <div className="px-8 py-3 bg-white text-[#1b64f2] rounded-[12px] group-hover:bg-gray-100 transition-colors font-medium">
              Talk to us
            </div>
          </a>

          {/* Blue Separator Line matching image 3 design */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-12 opacity-50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

          <div className="mb-10 text-center md:text-left mt-4" id="services">
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-white">Services</h2>
          </div>

          {/* Bottom Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#E6EAF5] text-[#030B24] rounded-[24px] p-8 flex-1">
                <h3 className="text-xl font-medium mb-4">AI & Autonomous Systems</h3>
                <p className="text-sm text-gray-600 mb-12">Deploy cutting-edge artificial intelligence and autonomous architectures to fundamentally transform how your business operates and scales.</p>
                <div className="w-16 h-16 bg-blue-600 rounded-[16px] flex items-center justify-center shadow-lg">
                  {/* AI / Tech Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
              </div>
              <div className="glass-panel rounded-[24px] p-8">
                <h3 className="text-xl font-medium mb-4">Healthcare Technology Solutions</h3>
                <p className="text-sm text-gray-400">Secure, compliant, and highly innovative digital health platforms designed to improve patient outcomes and streamline medical workflows.</p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-6">
              <div className="bg-blue-600 text-white rounded-[24px] p-8">
                <h3 className="text-xl font-medium mb-4">Enterprise Software Development</h3>
                <p className="text-sm text-blue-100">Robust, scalable, and custom-built software solutions engineered specifically for the complex demands of modern enterprise environments.</p>
              </div>
              <div className="bg-[#7A8BB6] text-[#030B24] rounded-[24px] p-8 flex-1">
                <h3 className="text-xl font-medium mb-4">Business Process Automation</h3>
                <p className="text-sm text-gray-800">Eliminate repetitive tasks and optimize operational efficiency through intelligent, data-driven automation systems.</p>
              </div>
              <div className="glass-panel rounded-[24px] p-8">
                <h3 className="text-xl font-medium mb-4 text-gray-200">E-Commerce & Digital Commerce</h3>
                <p className="text-sm text-gray-400">End-to-end commerce platforms tailored to deliver seamless purchasing experiences and drive unprecedented revenue growth.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-[#E6EAF5] text-[#030B24] rounded-[24px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium mb-4">Premium Digital Experiences</h3>
                <p className="text-sm text-gray-600">Crafting immersive, high-performance digital interfaces that captivate users, elevate brand perception, and inspire profound engagement.</p>
              </div>
              <div className="w-full h-32 bg-[#0B205D] rounded-[16px] mt-12 flex items-center justify-center">
                 {/* Premium Experience Abstract Icon */}
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA & New Gradient Footer */}
      <section className="relative w-full pt-48 pb-8 overflow-hidden -mt-20 z-0">
        {/* The background gradient that fades from white (top) to bright blue (bottom) */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 65%, #1b64f2 100%)' }} />
        
        {/* Testimonials / Team Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 mb-40 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-[10px] font-semibold mb-6 uppercase tracking-widest">
                Testimonials
              </div>
              <h2 className="text-4xl md:text-[40px] font-light text-gray-900 leading-tight">
                Explore our comprehensive <br/> client success stories
              </h2>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <div ref={carouselRef} className="flex overflow-x-auto snap-x gap-6 pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="group relative w-[85vw] md:w-[45vw] lg:w-[calc(25%-18px)] shrink-0 aspect-[3/4] rounded-[32px] overflow-hidden cursor-pointer shadow-sm bg-gray-200 snap-start">
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <Image src={testimonial.img} alt={testimonial.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <h4 className="font-medium text-lg leading-tight">{testimonial.name}</h4>
                    <p className="text-xs text-gray-300 mt-2">{testimonial.role}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#0d6efd] p-6 md:p-8 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 flex flex-col">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col h-full">
                    <h4 className="font-medium text-lg leading-tight">{testimonial.name}</h4>
                    <p className="text-blue-200 text-xs mt-2 mb-4">{testimonial.role}</p>
                    <p className="text-[11px] leading-relaxed flex-1 opacity-90">{testimonial.text}</p>
                    <div className="flex gap-4 mt-auto">
                      <span className="font-bold text-xs">in</span> <span className="font-bold text-xs">tw</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-8 mb-32">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-xs font-medium mb-8">
            Let&apos;s Create Together
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-6 leading-tight tracking-tight">
            Built for brands <br/> that mean business.
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            From startups to scaling products, boehmtech has helped founders build designs worth talking about. You could be next.
          </p>
          <button className="px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-all flex items-center gap-2 mx-auto font-medium">
            Get Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 text-white/90 mb-24">
            
            {/* Column 1: Brand & Socials */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image src="/boehm logo white copy.png" alt="Boehmtech Logo" width={180} height={48} className="object-contain h-10 w-auto" />
              </div>
              <div className="flex flex-col gap-2 text-sm text-white/80 mb-8 max-w-xs">
                <p className="mb-2">Your Digital Growth Partners.</p>
                <a href="mailto:operations@boehmtech.co" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  operations@boehmtech.co
                </a>
                <a href="tel:+919745322113" className="hover:text-white transition-colors flex items-center gap-2 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +91 9745322113
                </a>
              </div>
              <div className="flex items-center gap-3">
                {/* Social Icons - Circle buttons */}
                {[ 
                  { id: "x", icon: <path d="M4 4l16 16m0-16L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>, href: "https://x.com/boehmtechai" },
                  { id: "fb", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, href: "https://www.facebook.com/profile.php?id=61583800076173" },
                  { id: "ig", icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>, href: "https://www.instagram.com/boehmtech.ai/" },
                  { id: "in", icon: <g><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>, href: "https://www.linkedin.com/company/107167827" }
                ].map((item) => (
                  <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      {item.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-medium text-white mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="/services" className="hover:text-white transition-colors">What We Offer</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Insights</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Service</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-medium text-white mb-6">Legal Links</h4>
              <ul className="space-y-4 text-sm text-white/70 mb-10">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
                <li><Link href="/copyright" className="hover:text-white transition-colors">Copyright</Link></li>
              </ul>
            </div>
          </div>

          {/* Giant Logo Text at bottom */}
          <div className="flex items-center justify-between mt-32 w-full px-4 md:px-8">
             <Image src="/boehm logo white copy.png" alt="Boehmtech Logo Icon" width={200} height={200} className="w-[12vw] h-[12vw] md:w-[11.5vw] md:h-[11.5vw] object-contain shrink-0" />
             <h1 className="text-[12vw] md:text-[11.5vw] font-[family-name:var(--font-poppins)] font-bold text-white leading-none tracking-tighter mix-blend-overlay opacity-90 select-none whitespace-nowrap text-right">
                BOEHMTECH
             </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
