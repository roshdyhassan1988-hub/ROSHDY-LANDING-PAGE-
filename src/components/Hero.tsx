import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo, uiStrings } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, isAr } = useLanguage();
  const t = uiStrings[language];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary opacity-[0.03] rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary opacity-[0.02] rounded-full blur-[150px] -ml-60 -mb-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-1.5 border-b border-brand-primary text-brand-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
            {t.vision}
          </span>
          
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            <span className="block mb-2">
              {isAr ? `مهندس ${personalInfo.name.ar.split(' ').slice(0, 2).join(' ')}` : `Eng. ${personalInfo.name.en.split(' ').slice(0, 2).join(' ')}`}
            </span>
            <span className="text-gradient block">
              {isAr ? personalInfo.name.ar.split(' ').slice(2).join(' ') : personalInfo.name.en.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-16 font-light">
            {t.philosophyText.split('.')[0]}. {isAr ? 'خبرة تمتد لأكثر من 17 عاماً في إدارة المشاريع الكبرى.' : 'Over 17 years of experience in major project management.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <a 
              href="#experience" 
              className="group flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase hover:text-brand-primary transition-colors"
            >
              {t.viewProjects}
              <div className="w-12 h-[1px] bg-brand-primary group-hover:w-20 transition-all duration-500" />
            </a>
            
            <a 
              href="#contact" 
              className="bg-brand-primary text-black px-10 py-4 text-sm font-bold tracking-tighter hover:bg-[#f3e3ad] transition-all duration-300 flex items-center gap-3"
            >
              {t.startProject}
              {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
