"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, RefreshCcw, Command, Zap, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { getGroqResponse } from "@/app/actions/chat";
import Image from 'next/image';
const SUGGESTIONS = [
 "Project Roadmap",
  "Refactor Components",
  "Security Audit",
 
 
];

const SkeletonLoader = () => (
  <div className="flex justify-start gap-3 w-full animate-in fade-in duration-500">
    <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 animate-pulse shrink-0" />
    <div className="space-y-2 flex-1 pt-1">
      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse w-[40%]" />
      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse w-[30%]" />
    </div>
  </div>
);

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "System initialized. How can I assist your development workflow today?" }
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
      setMessages((prev) => [...prev, { role: "ai", content: "_Error: Connection timed out. Please check your network._" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased text-slate-900 dark:text-slate-100">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[95vw] md:w-[420px] h-[650px] bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded ">
                  <img
                                src="/images/logo-zephyraa.png"
                                alt="Zephyraa Logo"
                         
                                className="object-contain"
                              />
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-tight flex items-center gap-2">
                    Zephyraa
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.1em]">AI Engine Active</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setMessages([{ role: "ai", content: "Thread cleared. Ready for new input." }])} 
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors text-slate-400"
                >
                  <RefreshCcw size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                  <X size={18} className="text-slate-400" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[90%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 mt-1 ${
                      msg.role === "user" ? "bg-slate-200 dark:bg-slate-800" : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600"
                    }`}>
                      {msg.role === "user" ? <User size={12} className="text-slate-600 dark:text-slate-400" /> : <Zap size={12} />}
                    </div>
                    <div className={`text-[14px] leading-relaxed ${
                      msg.role === "user" ? "text-slate-700 dark:text-slate-300" : "text-slate-800 dark:text-slate-200"
                    }`}>
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && <SkeletonLoader />}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30">
              <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="whitespace-nowrap px-3 py-1 rounded-md border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="relative flex items-center">
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all dark:placeholder-slate-500"
                  placeholder="Ask anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-1.5 text-indigo-600 disabled:text-slate-400 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-3">Powered by Zephyraa v2.0</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white flex items-center justify-center shadow-xl z-50 transition-colors"
      >
        {hasNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500 border-2 border-white dark:border-slate-900"></span>
          </span>
        )}
        {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
      </motion.button>
    </div>
  );
}