import { motion } from 'motion/react';
import { certifications, skills, uiStrings } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Showcase() {
  const { language, isAr } = useLanguage();
  const t = uiStrings[language];

  return (
    <section id="certifications" className="py-24 bg-brand-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Certifications */}
          <div className="lg:col-span-7">
            <div className="mb-16">
              <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] mb-4 font-bold uppercase">{t.certTitle}</h2>
              <h3 className="serif-title text-5xl md:text-6xl leading-tight">{t.certSub.split('&')[0]} <br/> <span className="text-gray-500 italic">{isAr ? '&' : 'and'} {t.certSub.split('&')[1]}</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-hover p-8 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 p-4 opacity-5 text-4xl font-bold group-hover:opacity-10 transition-opacity ${isAr ? 'right-0' : 'left-0'}`}>0{index + 1}</div>
                  <h4 className="text-[#D4AF37] mb-4 font-bold text-lg leading-snug">{cert.title[language]}</h4>
                  <div className="flex flex-col gap-1 text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-5" id="skills">
            <div className={`mb-16 ${isAr ? 'lg:text-left' : 'lg:text-right'}`}>
              <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] mb-4 font-bold uppercase">{t.skillsTitle}</h2>
              <h3 className="serif-title text-5xl leading-tight">{t.skillsSub.split(' ')[0]} <br/> <span className="text-gray-500 italic">{t.skillsSub.split(' ').slice(1).join(' ')}</span></h3>
            </div>

            <div className={`flex flex-wrap gap-3 ${isAr ? 'justify-start lg:justify-end' : 'justify-start'}`}>
              {skills[language].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isAr ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-5 py-3 border border-white/5 text-xs font-bold tracking-widest text-gray-400 hover:border-brand-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* PMP Focus Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 p-10 border border-brand-primary/20 bg-brand-primary/[0.03] relative overflow-hidden"
            >
              <div className={`absolute top-0 w-1 h-full bg-brand-primary/50 ${isAr ? 'left-0' : 'right-0'}`} />
              <h3 className="text-2xl font-serif text-brand-primary mb-6">{t.pmpTitle}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 font-light italic">
                "{t.pmpQuote}"
              </p>
              <div className="flex flex-wrap gap-4 text-[9px] font-black tracking-widest text-brand-primary/60 uppercase">
                <span>ESTIMATION</span>
                <span>•</span>
                <span>SCHEDULING</span>
                <span>•</span>
                <span>QUALITY CONTROL</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
