import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  ShieldCheck, 
  CheckCheck
} from 'lucide-react';
import { SIMULATED_SMS_LOGS, COMPANY_INFO } from '../data/websiteData';

export default function TextLogPreview() {
  const [messages, setMessages] = useState(SIMULATED_SMS_LOGS);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMsg = {
      sender: "You (Homeowner)",
      time: "Just now",
      date: "Today",
      text: userInput,
      photo: null,
      isUser: true
    };

    setMessages((prev) => [...prev, newMsg]);
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "Joseph Fabela",
          time: "Just now",
          date: "Today",
          text: "Message received! Working on site now. Everything is running smoothly and I'll send another milestone photo soon.",
          photo: null,
          isUser: false
        }
      ]);
    }, 1200);
  };

  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Blueprint Focus */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Clear Text Updates
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-950 tracking-tight leading-tight">
              Stay Informed With Direct Text &amp; Photo Logs
            </h2>

            <p className="text-neutral-600 text-base leading-relaxed">
              At {COMPANY_INFO.name}, home improvement is more than a job—it’s a commitment to our community. Joseph Fabela personally logs daily milestone progress directly to your mobile phone.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <div className="text-xs font-bold text-neutral-950">Daily Arrival &amp; Scope Updates</div>
                <div className="text-xs text-neutral-500 mt-1">Know when work begins and what milestones will be completed each day.</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <div className="text-xs font-bold text-neutral-950">In-Progress Photo Logs</div>
                <div className="text-xs text-neutral-500 mt-1">Inspect subfloors, weld penetrations, and waterproofing before surfaces close up.</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200">
                <div className="text-xs font-bold text-neutral-950">Direct Owner Access</div>
                <div className="text-xs text-neutral-500 mt-1">No dispatchers or middle managers. Talk directly to Joseph at all times.</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`sms:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E85D04] hover:bg-[#D24E00] text-white font-bold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Text Joseph Directly: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[360px] bg-white rounded-3xl border border-neutral-200 shadow-elevate p-4">
              
              {/* Chat Header */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-3 flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-xs">
                    JF
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-950 flex items-center gap-1">
                      <span>Joseph Fabela</span>
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono">
                      Active On Site • Mobile Rig
                    </div>
                  </div>
                </div>

                <a 
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="p-2 rounded-xl text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Chat Messages */}
              <div className="space-y-2.5 h-[280px] overflow-y-auto pr-1 text-xs">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 ${
                        msg.isUser
                          ? 'bg-neutral-950 text-white font-medium rounded-tr-none'
                          : 'bg-neutral-100 text-neutral-800 rounded-tl-none'
                      }`}
                    >
                      <p className="leading-relaxed">{msg.text}</p>
                      
                      {msg.photo && (
                        <div className="mt-2 rounded-xl overflow-hidden border border-neutral-200">
                          <img 
                            src={msg.photo} 
                            alt="Project photo" 
                            className="w-full h-24 object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className={`text-[9px] mt-1 flex items-center gap-1 justify-end ${
                        msg.isUser ? 'text-neutral-400' : 'text-neutral-400'
                      }`}>
                        <span>{msg.time}</span>
                        <CheckCheck className="w-3 h-3 text-emerald-500" />
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1 bg-neutral-100 px-3 py-2 rounded-2xl w-16">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="mt-3 flex items-center gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Test a reply to Joseph..."
                  className="flex-1 bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-neutral-400"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-neutral-950 text-white font-bold"
                  aria-label="Send test text"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
