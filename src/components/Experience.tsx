import { motion } from 'motion/react';
import { stats, experience, uiStrings } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { language, isAr } = useLanguage();
  const t = uiStrings[language];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className={`flex flex-wrap gap-12 md:gap-24 mb-32 ${isAr ? 'justify-start' : 'justify-end md:justify-start'}`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`stat-box ${isAr ? 'pr-6' : 'pl-6 border-l border-r-0'}`}
            >
              <div className="text-4xl md:text-5xl font-light mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold">
                {stat.label[language]}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl">
          <div className="mb-24">
            <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] mb-4 font-bold uppercase">{t.expTitle}</h2>
            <h3 className="serif-title text-5xl md:text-7xl leading-tight">
              {t.expSub.split(' ')[0]} {t.expSub.split(' ')[1]} <br/> 
              <span className="text-gray-500 italic">{t.expSub.split(' ').slice(2).join(' ')}</span>
            </h3>
          </div>

          <div className="space-y-24">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
              >
                <div className="md:col-span-4">
                  <div className={`text-brand-primary font-bold tracking-[0.2em] mb-4 flex items-center gap-4 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span>{item.period[language]}</span>
                    <div className="flex-1 h-[1px] bg-brand-primary/20" />
                  </div>
                  <h4 className="text-2xl font-serif mb-2">{item.company[language]}</h4>
                  <p className="text-gray-500 text-sm font-bold tracking-wider">{item.location[language]}</p>
                </div>
                
                <div className="md:col-span-8 flex flex-col gap-6">
                  <h5 className="text-xl font-bold flex items-center gap-4">
                    {item.role[language]}
                    <div className="w-12 h-[1px] bg-brand-primary" />
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {item.highlights[language].map((highlight, hIdx) => (
                      <div key={hIdx} className="flex gap-4 items-start group">
                        <div className="w-1 h-1 bg-brand-primary/40 rounded-full mt-2.5 group-hover:bg-brand-primary transition-colors shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed font-light">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
