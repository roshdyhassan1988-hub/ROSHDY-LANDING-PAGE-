/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import SalesAgent from './components/SalesAgent';
import { motion, useScroll, useSpring } from 'motion/react';
import { useLanguage } from './context/LanguageContext';
import { uiStrings } from './constants';

export default function App() {
  const { scrollYProgress } = useScroll();
  const { language, isAr } = useLanguage();
  const t = uiStrings[language];
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-primary selection:text-black overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] ${isAr ? 'origin-right' : 'origin-left'}`}
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Summary */}
        <section id="about" className="py-32 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-white/5 bg-white/[0.01] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16"
          >
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 border border-brand-primary/20 -m-4 group-hover:-m-6 transition-all duration-700" />
                <div className="relative w-80 h-[480px] bg-brand-muted overflow-hidden border border-white/5">
                  <img 
                    src={`https://picsum.photos/seed/${encodeURIComponent('structural-engineer')}/800/1200`}
                    alt="Engineering Precision"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-50 hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] mb-6 font-bold uppercase">{t.philosophyTitle}</h2>
              <h3 className="serif-title text-4xl md:text-6xl leading-tight mb-10">{t.philosophySub.split(' ')[0]} {t.philosophySub.split(' ')[1]} <br/> <span className="text-gray-500 italic">{t.philosophySub.split(' ').slice(2).join(' ')}</span></h3>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-12">
                "{t.philosophyText}"
              </p>
              <div className={`flex flex-wrap gap-8 items-center pt-8 border-t border-white/5 ${isAr ? 'justify-start' : 'justify-end md:justify-start'}`}>
                {t.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-[1px] h-4 bg-brand-primary" />
                    <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <Experience />
        <Showcase />
        <Contact />
      </main>

      {/* Decorative side text */}
      <div className={`fixed bottom-10 z-0 hidden xl:block pointer-events-none ${isAr ? 'right-10' : 'left-10'}`}>
        <div className={`[writing-mode:vertical-rl] ${isAr ? 'rotate-180' : ''} text-[8vw] font-black text-white/[0.02] leading-none uppercase select-none font-display`}>
          ENGINEERING EXCELLENCE • {new Date().getFullYear()}
        </div>
      </div>

      <SalesAgent />
    </div>
  );
}

