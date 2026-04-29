'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle, 
  Settings2, 
  History, 
  ShieldCheck, 
  Globe, 
  Mail, 
  Share2,
  ChevronRight
} from 'lucide-react';

// --- Sub-components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcfb] dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 transition-all duration-300">
    <div className="flex justify-between items-center px-6 lg:px-12 py-5 max-w-7xl mx-auto w-full">
      <div className="text-xl lg:text-2xl font-black tracking-widest text-stone-950 dark:text-stone-50 font-serif">
        HERITAGE MOTORS
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-stone-950 dark:text-stone-50 border-b-2 border-racing-green pb-1 font-sans text-sm font-semibold tracking-wide" href="#">The Fleet</a>
        <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-stone-900 font-sans text-sm tracking-wide transition-all duration-300" href="#">Our Story</a>
        <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-stone-900 font-sans text-sm tracking-wide transition-all duration-300" href="#">Membership</a>
        <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-stone-900 font-sans text-sm tracking-wide transition-all duration-300" href="#">Concierge</a>
      </div>
      <button className="bg-racing-green text-white px-6 py-2.5 font-sans font-bold uppercase text-[10px] tracking-[0.15em] hover:opacity-90 active:scale-95 transition-all">
        Request Booking
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center">
    <div className="absolute inset-0 z-0">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZVXiAb1LasNlkzWoVOTYSiljrcYd6fBm8K5NdeN9rlRQ5LaaSq6_WxzTOv_aPQLLAnkc9rKf0NLnns98wkMeZewBRAO71dcI4haZUNbPiKXP6xDhGde_2Pv35SHr2V1MlvNkW-r5Ao-HPH5l7CwyTEBmLq9cLXG2fqY3F_5Zb-4W7ehND0Q_iqrawAdt2FLOuPiXQs6GOKNE7BQj5W8AM73VR1tINlVAQY_M3O7P1a2XhbvX29XextDq0XJp3Doq1lgkHTVKfg"
        alt="Heritage Motors Hero Image"
        fill
        className="object-cover"
        priority
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-serif text-5xl lg:text-7xl font-bold mb-4 max-w-2xl leading-tight"
      >
        Drive History
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="font-serif text-xl lg:text-3xl font-light mb-10 opacity-90 max-w-xl"
      >
        Experience the mechanical soul of the 20th century’s most iconic automobiles.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex flex-wrap gap-4"
      >
        <button className="bg-racing-green text-white px-8 py-4 font-sans font-bold uppercase tracking-[0.15em] text-xs hover:bg-opacity-90 transition-all flex items-center gap-2">
          Request Booking
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="border border-white text-white px-8 py-4 font-sans font-bold uppercase tracking-[0.15em] text-xs hover:bg-white hover:text-stone-950 transition-all">
          Explore Fleet
        </button>
      </motion.div>
    </div>
  </header>
);

const FleetCard = ({ image, name, subtitle, year, engine, detail, detailLabel }: any) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="group border border-stone-200 bg-white hover:border-racing-green transition-all duration-500 overflow-hidden"
  >
    <div className="aspect-[3/2] relative overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6 lg:p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-serif text-2xl mb-1">{name}</h3>
          <p className="font-sans text-sm text-stone-500">{subtitle}</p>
        </div>
        <span className="bg-stone-100 text-stone-800 px-3 py-1 font-sans font-bold text-[10px] tracking-widest uppercase">
          {year}
        </span>
      </div>
      <div className="flex gap-4 border-t border-stone-100 pt-6 mt-6">
        <div className="flex flex-col">
          <span className="font-sans font-bold text-[10px] text-stone-400 uppercase tracking-widest">ENGINE</span>
          <span className="font-sans font-semibold text-sm text-stone-800">{engine}</span>
        </div>
        <div className="flex flex-col ml-auto text-right">
          <span className="font-sans font-bold text-[10px] text-stone-400 uppercase tracking-widest">{detailLabel}</span>
          <span className="font-sans font-semibold text-sm text-stone-800">{detail}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const FleetSection = () => (
  <section className="py-20 lg:py-32 bg-cream">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="font-sans font-bold text-xs text-racing-green block mb-2 tracking-[0.2em] uppercase">CURATED COLLECTION</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold">The Fleet</h2>
        </div>
        <a className="font-sans font-bold text-xs text-stone-500 hover:text-racing-green border-b border-stone-300 pb-1 tracking-[0.15em] uppercase transition-colors" href="#">
          View Entire Registry
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FleetCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDPy7dc8c9P8Stt_FZl6VN1QUFFxgeqjvZqaoa84oqcFzra8kOj3qYjrWkwVUtVmoGm8CewGiF3oF84yE3m2IsRVmaCbrxcM87vA4xDapREByf7bGS_YkmssbfJ7cKFhTwKCjTpTPqaIKJQYujB67qURyX_ZUpQfjMo25lnrHi61vKm9edQGvxhy6bBMngcPHpqOM5RA7Ne2fdfkCY882e_Zu1S7PhwitHW5T498nWdcDnTREUTkuor-TVw0toUcHCbM4aXc1WQ0w"
          name="Jaguar E-Type"
          subtitle="Series 1 Fixed Head Coupe"
          year="1963"
          engine="3.8L Straight-6"
          detail="4-Speed Manual"
          detailLabel="TRANSMISSION"
        />
        <FleetCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDO62v8QcXEi6Gb3AQVSs7expwjsfEIi7tXQwloizLhNm822NqhNubUrrSsXqBlndfiaBhtI-2w4DyFMhAeDCzubx6ZS78yhpezE-nAuKFqqp25J4dxtPh-zQLNx1t9rNA0g6XD6a2IQunXf04pZ4aEIIu3jduw8W_GrMoDh2KUKxk43dsRga1r-7JxnPct_ySHZJ5YK7pdUXQWkebyxiKodIfJU8uvnz1UjBoHeQCtp5VwlCvMYpXNWTFZVKbNg5SgofmBbNhrPw"
          name="Porsche 911 RS"
          subtitle="Carrera 2.7 Lightweight"
          year="1974"
          engine="2.7L Flat-6"
          detail="975 kg"
          detailLabel="WEIGHT"
        />
        <FleetCard 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJr86sU_SbwoScprGIzaBmdkC3CShkbR2Pspy57kF4Lp7xlRJaIEkhEHo0w4sreWiDc4UcNdowqtkYznBbzg0H7bQoJJagN9izxe4gxLpGPwx9sNKcYUYfX3VaC1nb2TVyuIhrizjlk4VWwvvpXoAJPE6cgGPiTPKwvYZh5JWihwe7LLxZT8QW3GQ_oUKYvgu-CR-pgfJh9XHs64k9H1OvaYp3QXctYdMJcPdP4Xj8-uf-twGlo-i0U-ncJVupTSoqhtZ3IgRLA"
          name="Mercedes 300SL"
          subtitle="W198 Roadster"
          year="1961"
          engine="146 MPH"
          detail="Fully Restored"
          detailLabel="PROVENANCE"
        />
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section className="py-20 lg:py-32 bg-stone-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
      <div className="w-full lg:w-1/2 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 border-[12px] border-white shadow-2xl overflow-hidden aspect-square"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt_OYcglopAOn7trqJtP4QckswEDPcO0aQhuM6LdTSubWtZDaK0U6HqyYS-5hJPUMCKISTyIy3BOtmPLTDzlq1s3997GfLDaudaNwpKa5lcM2wCmTx0wDsMeVh7STaWZiERHXNLKBFXWZXuhApblXxxPZkrSgN9Dcyo7pdBhtmIDiz1uocQ_IH8aJlDQmUx8usBhAa1U9J-C5kERAQIxxe4E_Y2GxxN7qvU5K81njjGHY20nZEgB8bJhkFY73mn-xQOr5W0CnBSA"
            alt="Heritage Motors Story"
            fill
            className="object-cover grayscale brightness-90 contrast-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-racing-green -z-0 opacity-10 hidden lg:block"></div>
      </div>
      <div className="w-full lg:w-1/2">
        <span className="font-sans font-bold text-xs text-racing-green block mb-4 tracking-[0.2em] uppercase">ESTABLISHED 1954</span>
        <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-8">A Legacy of Lubrication and Lustre</h2>
        <div className="space-y-6 text-stone-600 font-sans text-lg leading-relaxed">
          <p>Founded by Julian Thorne in a small workshop in the Cotswolds, Heritage Motors began not as a business, but as a passion project to preserve the tactile joy of the internal combustion engine.</p>
          <p>Today, we serve as the guardians of over fifty masterfully restored vehicles. We don&apos;t just rent cars; we curate journeys. Each vehicle in our fleet is chosen for its historical significance and its ability to turn a simple drive into a vivid memory.</p>
          <p className="font-serif italic text-stone-900 border-l-2 border-racing-green pl-6 py-2 text-xl">
            &quot;A vintage car is the only time machine that actually works.&quot; — Julian Thorne
          </p>
        </div>
        <button className="mt-10 font-sans font-bold text-[10px] text-racing-green flex items-center gap-3 hover:gap-5 transition-all tracking-[0.2em] uppercase group">
          READ OUR FULL HISTORY
          <ArrowRight className="w-4 h-4 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </section>
);

const MembershipSection = () => (
  <section className="py-20 lg:py-32 bg-stone-950 text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-stone-900/50 p-8 lg:p-20 border border-stone-800 flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">The Connoisseur’s Club</h2>
          <p className="font-sans text-lg text-stone-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Join an exclusive circle of enthusiasts. Members enjoy priority registry access, private concierge services, and invitations to our annual Highland Rally.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans font-bold text-stone-300 tracking-[0.1em] uppercase">
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <CheckCircle className="w-4 h-4 text-racing-green" /> 
              UNLIMITED KM USAGE
            </li>
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <CheckCircle className="w-4 h-4 text-racing-green" /> 
              24/7 ROADSIDE CONCIERGE
            </li>
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <CheckCircle className="w-4 h-4 text-racing-green" /> 
              ENCLOSED TRANSPORT
            </li>
            <li className="flex items-center gap-2 lg:justify-start justify-center">
              <CheckCircle className="w-4 h-4 text-racing-green" /> 
              PRIVATE COLLECTION TOURS
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 min-w-[280px] w-full lg:w-auto">
          <button className="bg-white text-stone-950 px-10 py-5 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-stone-200 transition-all">
            Apply for Membership
          </button>
          <button className="border border-stone-700 text-stone-400 px-10 py-5 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:text-white hover:border-white transition-all">
            View Tier Details
          </button>
        </div>
      </div>
    </div>
  </section>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const StatsSection = () => (
  <section className="py-20 lg:py-32 bg-cream">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2 bg-stone-100 p-12 flex flex-col justify-between">
          <div>
            <Settings2 className="w-12 h-12 text-racing-green mb-8" />
            <h4 className="font-serif text-2xl font-semibold mb-4">Manual Soul</h4>
            <p className="font-sans text-stone-600 leading-relaxed">
              80% of our registry features traditional manual gearboxes. We believe in the physical connection between man and machine.
            </p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-white border border-stone-200 p-12 flex flex-col justify-center items-center text-center">
          <span className="text-6xl font-serif text-racing-green mb-2">52</span>
          <p className="font-sans font-bold text-xs text-stone-500 tracking-[0.2em] uppercase">ICONS IN REGISTRY</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-white border border-stone-200 p-12 flex flex-col justify-center items-center text-center">
          <span className="text-6xl font-serif text-racing-green mb-2">100%</span>
          <p className="font-sans font-bold text-xs text-stone-500 tracking-[0.2em] uppercase">MATCHING NUMBERS</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-stone-900 text-white p-12 md:col-span-2 flex flex-col justify-between group">
          <div>
            <ShieldCheck className="w-12 h-12 text-racing-green mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h4 className="font-serif text-3xl font-semibold mb-4">Provenance Guaranteed</h4>
            <p className="font-sans text-stone-400 leading-relaxed mb-8">
              Every vehicle comes with a full history file. We only curate cars with documented life stories and concours-level maintenance.
            </p>
          </div>
          <button className="font-sans font-bold text-[10px] text-white border-b border-white pb-1 tracking-[0.2em] uppercase self-start hover:opacity-80 transition-opacity flex items-center gap-2">
            Learn About Provenance
            <ChevronRight className="w-3 h-3" />
          </button>
        </motion.div>
        
        <motion.div variants={itemVariants} className="lg:col-span-2 relative min-h-[350px] overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATZGiYMs0LrnlEclU7WN9wvPSbCt8B3xGz4GBy4ptxMqkOXH4WWXCKp2c3uo0LMvo3ibimNiO9c5WiPdor-3gqrbPCxr72DXLbJIdcVVDRy8Aig5Dcu9hMyQtia44QOYDFNHO9wvSSifbg_pddjPsIZy90V83enoGF06Nsz7Nir8w8Y9PKde4MFIwh8s2XFJ8kyCYXK42l-fJWKpaY3d8K60KW4QtW4cxxmIeXsKZYtpuIfYdMhb-ZI4HL3Wzqo_IujXWownM6Qg"
            alt="Interior Detail"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-stone-600">
      <div className="flex flex-col gap-6">
        <div className="text-xl font-bold text-stone-900 dark:text-stone-50 font-serif tracking-widest uppercase">
          Heritage Motors
        </div>
        <p className="font-serif text-sm italic leading-relaxed">
          Preserving the golden era of motoring for the modern gentleman and gentlewoman.
        </p>
        <div className="flex gap-6 text-stone-400">
          <Share2 className="w-5 h-5 hover:text-racing-green cursor-pointer" />
          <Globe className="w-5 h-5 hover:text-racing-green cursor-pointer" />
          <Mail className="w-5 h-5 hover:text-racing-green cursor-pointer" />
        </div>
      </div>
      <div>
        <h5 className="font-sans font-bold text-xs text-stone-900 mb-6 tracking-[0.2em] uppercase">SERVICES</h5>
        <ul className="space-y-4 text-sm font-serif italic">
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">Provenance</a></li>
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">Event Hire</a></li>
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">Film & Media</a></li>
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">Global Locations</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-sans font-bold text-xs text-stone-900 mb-6 tracking-[0.2em] uppercase">CLUBHOUSE</h5>
        <ul className="space-y-4 text-sm font-serif italic">
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">Membership</a></li>
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">The Journal</a></li>
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">Press Inquiries</a></li>
          <li><a href="#" className="hover:text-racing-green hover:underline decoration-racing-green underline-offset-4">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-sans font-bold text-xs text-stone-900 mb-6 tracking-[0.2em] uppercase">NEWSLETTER</h5>
        <p className="text-xs mb-4 font-sans tracking-tight">Subscribe for registry updates and rally invites.</p>
        <div className="flex border-b border-stone-400 pb-2 group focus-within:border-racing-green transition-colors">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="bg-transparent border-none outline-none focus:ring-0 text-sm font-serif w-full p-0 italic"
          />
          <button className="text-stone-400 hover:text-racing-green transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-serif uppercase tracking-[0.2em] text-stone-400">
      <p>© 2024 Heritage Motors Club. Est. 1954.</p>
      <div className="flex gap-8 italic">
        <span>Designed in London</span>
        <span>Maintained in Oxford</span>
      </div>
    </div>
  </footer>
);

// --- Main Page ---

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FleetSection />
      <StorySection />
      <MembershipSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
