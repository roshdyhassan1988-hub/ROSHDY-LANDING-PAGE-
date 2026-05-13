import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { personalInfo, experience, certifications, skills, uiStrings } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const AI_MODEL = "gemini-3-flash-preview";

export default function SalesAgent() {
  const { language, isAr } = useLanguage();
  const t = uiStrings[language];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: t.chatWelcome }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const systemInstruction = `
        You are an elite Sales Representative for Eng. Roshdy Ahmed Abdel Rahman Hassan.
        Your goal is to convince potential clients to hire Eng. Roshdy for their engineering projects.
        Be professional, helpful, and persuasive. 
        You speak in the same language as the user (Arabic or English).
        
        Information about Eng. Roshdy:
        - Name: ${personalInfo.name.en} / ${personalInfo.name.ar}
        - Title: ${personalInfo.title.en} / ${personalInfo.title.ar}
        - Experience: ${personalInfo.experience} years
        - Location: ${personalInfo.location.en} / ${personalInfo.location.ar}
        - Contact: Email: ${personalInfo.email}, Phone: ${personalInfo.phoneNumbers.join(', ')}
        
        Summary: ${personalInfo.summary.en}
        
        Work Experience Highlights:
        ${experience.map(exp => `- ${exp.role.en} at ${exp.company.en} (${exp.period.en}): ${exp.highlights.en.join(', ')}`).join('\n')}
        
        Certifications:
        ${certifications.map(c => `- ${c.title.en} from ${c.issuer}`).join('\n')}
        
        Skills:
        ${skills.en.join(', ')}
        
        Guidelines:
        1. Always answer based on the provided facts.
        2. If asked about something not in the list, politely say that you can coordinate a call with Eng. Roshdy directly.
        3. Encourage users to reach out via WhatsApp or Email.
        4. Use a tone that is "High-end Engineering Consultant".
        5. Use Markdown formatting to make your responses structured and professional.
        6. Use tables (Markdown) when comparing project details or providing schedules/estimation ranges.
        7. Use bold text for emphasis on key engineering concepts or certifications.
      `;

      const response = await ai.models.generateContent({
        model: AI_MODEL,
        contents: messages.map(m => ({ 
          role: m.role === 'bot' ? 'model' : 'user', 
          parts: [{ text: m.text }] 
        })).concat([{ role: 'user', parts: [{ text: userMessage }] }]),
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const botText = response.text || (isAr ? "عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً." : "Sorry, something went wrong. Please try again later.");
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Sales Agent Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: isAr ? "عذراً، اواجه مشكلة في الاتصال حالياً." : "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 ${isAr ? 'left-6' : 'right-6'} z-[100] flex flex-col items-end gap-4`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className={`w-[320px] sm:w-[380px] h-[550px] max-h-[80vh] bg-brand-secondary/95 border border-white/10 rounded-[32px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden backdrop-blur-2xl ring-1 ring-brand-primary/20 mb-4`}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-brand-primary/[0.03]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-brand-primary/30 flex items-center justify-center text-brand-primary bg-brand-primary/5">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">{t.chatTitle}</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-[9px] text-brand-primary uppercase font-black tracking-widest">Active Consultant</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-black font-bold border-l-4 border-black/20' 
                      : 'bg-white/[0.03] text-gray-400 border border-white/5 italic'
                  }`}>
                    <div className="markdown-body">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.03] p-4 border border-white/5 flex gap-1">
                    <span className="w-1 h-1 bg-brand-primary/50 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-brand-primary/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 bg-brand-primary/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/5 bg-white/[0.01]">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t.chatPlaceholder}
                  className="w-full bg-black/40 border border-white/10 py-4 px-6 pr-14 text-xs font-bold tracking-wider focus:outline-none focus:border-brand-primary transition-all rounded-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`absolute ${isAr ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 w-10 h-10 border border-brand-primary text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all disabled:opacity-30`}
                >
                  <Send size={14} className={isAr ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 border-2 border-brand-primary bg-brand-secondary text-brand-primary flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
