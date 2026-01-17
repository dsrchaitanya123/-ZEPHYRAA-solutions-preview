"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, RefreshCcw, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { getGroqResponse } from "@/app/actions/chat";

const SUGGESTIONS = [
  "Project Roadmap",
  "Refactor Components",
  "Security Audit",
];

const SkeletonLoader = () => (
  <div className="flex justify-start gap-3 w-full animate-in fade-in duration-500">
    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 shrink-0 flex items-center justify-center">
        <Zap size={12} className="text-slate-300" />
    </div>
    <div className="space-y-2 flex-1 pt-2">
      <div className="h-2 bg-slate-100 rounded-full animate-pulse w-[60%]" />
      <div className="h-2 bg-slate-100 rounded-full animate-pulse w-[40%]" />
    </div>
  </div>
);

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hello! I'm Zephyraa. How can I help you build something great today?" }
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
      setMessages((prev) => [...prev, { role: "ai", content: "_Error: Connection timed out._" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased text-slate-800">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            className="mb-4 w-[90vw] md:w-[400px] h-[600px] bg-white border border-slate-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
                  <img src="/images/logo-zephyraa.png" alt="Logo" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-[14px] text-slate-900 flex items-center gap-1.5">
                    Zephyraa
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setMessages([{ role: "ai", content: "Workspace cleared." }])} 
                  className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400"
                >
                  <RefreshCcw size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [background-position:center]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${
                      msg.role === "user" ? "bg-white border-slate-200" : "bg-indigo-600 border-indigo-700 text-white"
                    }`}>
                      {msg.role === "user" ? <User size={14} className="text-slate-500" /> : <Zap size={14} />}
                    </div>
                    <div className={`px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                      msg.role === "user" 
                      ? "bg-indigo-600 text-white rounded-tr-none" 
                      : "bg-white border border-slate-100 text-slate-700 rounded-tl-none"
                    }`}>
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && <SkeletonLoader />}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="whitespace-nowrap px-4 py-1.5 rounded-full border border-slate-200 text-[11px] font-semibold text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-all bg-white shadow-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="relative flex items-center">
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-slate-400 shadow-inner"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-lg disabled:bg-slate-200 disabled:text-slate-400 transition-all hover:bg-indigo-700 shadow-md"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-[2px] mt-4">Zephyraa Intelligence</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(79,70,229,0.4)] z-50 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        {hasNotification && !isOpen && (
          <span className="absolute top-4 right-4 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        )}
        {isOpen ? <X size={28} className="relative z-10" /> : <MessageCircle size={30} className="relative z-10" />}
      </motion.button>
    </div>
  );
}