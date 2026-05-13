import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { personalInfo, uiStrings } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, isAr } = useLanguage();
  const t = uiStrings[language];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[48px] p-8 md:p-20 relative overflow-hidden">
          {/* Animated Background Blob */}
          <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-brand-primary/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-[#D4AF37] text-sm tracking-[0.4em] mb-4 font-bold uppercase">{t.contactTitle}</h2>
              <h3 className="serif-title text-5xl md:text-7xl leading-tight mb-12">{t.contactSub.split(' ')[0]} {t.contactSub.split(' ')[1]} <br /> <span className="text-gray-500 italic">{t.contactSub.split(' ').slice(2).join(' ')}</span></h3>
              
              <div className="space-y-12">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-8 group">
                  <div className="w-12 h-12 border border-gray-800 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                    <Mail size={20} className="group-hover:text-brand-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">{t.email}</div>
                    <div className="text-lg font-light tracking-wide">{personalInfo.email}</div>
                  </div>
                </a>

                <div className="flex flex-col gap-8">
                  {personalInfo.phoneNumbers.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="flex items-center gap-8 group">
                      <div className="w-12 h-12 border border-gray-800 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                        <Phone size={20} className="group-hover:text-brand-primary transition-colors" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">{t.call}</div>
                        <div className="text-lg font-light tracking-wide">{phone}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-12 h-12 border border-gray-800 flex items-center justify-center">
                    <MapPin size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1">{t.location}</div>
                    <div className="text-lg font-light tracking-wide">{personalInfo.location[language]}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="p-10 border border-white/5 bg-white/[0.01]">
                <h3 className="text-xl font-serif mb-8 text-[#D4AF37]">{t.digital}</h3>
                <div className="grid grid-cols-1 gap-6">
                  {['LinkedIn', 'WhatsApp Business', 'Professional Portfolio'].map((social, i) => (
                    <a key={i} href="#" className="flex items-center justify-between py-4 border-b border-white/5 hover:border-brand-primary/30 transition-colors group">
                      <span className="text-sm font-light tracking-widest text-gray-400 group-hover:text-white">{social}</span>
                      {isAr ? (
                        <ArrowUpLeft className="text-brand-primary scale-0 group-hover:scale-100 transition-transform" size={18} />
                      ) : (
                        <ArrowUpRight className="text-brand-primary scale-0 group-hover:scale-100 transition-transform" size={18} />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-20">
                <div className="geometric-line h-px w-full mb-8 opacity-20" />
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold text-gray-600 tracking-[0.4em] uppercase mb-1">© {new Date().getFullYear()} ENGINEER STUDIO</div>
                    <div className="text-[9px] text-gray-700 tracking-widest uppercase">{isAr ? 'جميع الحقوق محفوظة' : 'ALL RIGHTS RESERVED'} • CONSULTING EXCELLENCE</div>
                  </div>
                  <div className="text-4xl font-serif text-brand-primary/10 select-none">ROSHDY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
