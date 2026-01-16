"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, RefreshCcw, Command, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { getGroqResponse } from "@/app/actions/chat";

const SUGGESTIONS = [
  "Build a project roadmap",
  "Refactor React components",
  "Security audit checklist",
  "System design interview"
];

const SkeletonLoader = () => (
  <div className="flex justify-start gap-3 max-w-[80%] animate-in fade-in duration-500">
    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse shrink-0" />
    <div className="space-y-2 flex-1 pt-1">
      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse w-[120px]" />
      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse w-[80px]" />
    </div>
  </div>
);

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Welcome. I am **Zephyraa**. How can I assist your workflow today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHasNotification(false);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: textToSend }]);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await getGroqResponse(textToSend);
      setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", content: "System connection interrupted. Please re-authenticate." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] font-sans antialiased">
      <div style={{ filter: "url(#goo)" }} className="relative flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.5, y: 50, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mb-4 w-[90vw] md:w-[400px] h-[600px] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden origin-bottom-right"
            >
              <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg">
                    <Command size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] tracking-tight flex items-center gap-2 dark:text-white">
                      Zephyraa
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setMessages([{ role: "ai", content: "Session reset. How may I help?" }])} 
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400"
                  >
                    <RefreshCcw size={16} />
                  </button>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none">
                {messages.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    key={i} 
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                        msg.role === "user" 
                          ? "bg-slate-900 border-slate-800 text-white" 
                          : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                      }`}>
                        {msg.role === "user" ? <User size={14} /> : <Zap size={14} />}
                      </div>
                      <div className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                        msg.role === "user" 
                          ? "bg-indigo-600 text-white rounded-tr-none" 
                          : "bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-800"
                      }`}>
                        <div className="prose prose-sm dark:prose-invert max-w-none prose-p:m-0">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && <SkeletonLoader />}
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                {!isLoading && messages.length < 4 && (
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSend(s)}
                        className="whitespace-nowrap px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white transition-all bg-white dark:bg-slate-900"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                <div className="relative flex items-center gap-2">
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:text-white"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <button 
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 p-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:scale-105 active:scale-95 disabled:opacity-30 transition-all shadow-lg"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-[2rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-colors z-50"
        >
          <AnimatePresence>
            {hasNotification && !isOpen && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-4 border-white dark:border-slate-900 rounded-full z-10"
              />
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="c" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div key="m" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                <MessageCircle size={30} fill="currentColor" className="opacity-90" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <svg className="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}