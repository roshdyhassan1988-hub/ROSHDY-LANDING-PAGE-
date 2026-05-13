import { motion } from 'motion/react';
import { Menu, X, Languages } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, uiStrings } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, isAr } = useLanguage();
  const t = uiStrings[language];

  const navItems = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.experience, href: '#experience' },
    { label: t.certs, href: '#certifications' },
    { label: t.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto border-b border-white/5 px-6 py-6 flex items-center justify-between bg-brand-secondary/80 backdrop-blur-md"
      >
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 border border-brand-primary flex items-center justify-center font-serif font-bold text-brand-primary text-xl">
            R
          </div>
          <span className="text-[11px] tracking-[0.3em] font-bold text-gray-500 uppercase hidden sm:block">
            Engineering Studio / {isAr ? personalInfo.name.ar.split(' ')[0] : personalInfo.name.en.split(' ')[0]}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.3em] font-bold uppercase">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-gray-400 hover:text-brand-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-brand-primary hover:text-white transition-colors"
          >
            <Languages size={14} />
            <span>{isAr ? 'EN' : 'AR'}</span>
          </button>

          <a 
            href="#contact" 
            className="text-white border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors"
          >
            {t.consult}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-brand-primary font-bold text-xs"
          >
            {isAr ? 'EN' : 'AR'}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 md:hidden card-hover rounded-2xl p-8 flex flex-col gap-6 shadow-2xl z-50 bg-brand-surface/95 backdrop-blur-xl"
        >
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold tracking-widest hover:text-brand-primary py-2 border-b border-white/5 uppercase"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-brand-primary font-bold text-sm"
          >
            {t.consult}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
