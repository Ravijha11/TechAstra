"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

// Replace with your WhatsApp Business number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

const LOGO_PATH = "/logo.png";

const QUESTIONS = [
  { key: "name", label: "Aapka naam kya hai? 😊", placeholder: "Apna naam likhiye" },
  { key: "phone", label: "Aapka phone number bataiye?", placeholder: "+91 98765 43210" },
  {
    key: "business",
    label: "Aapka business kaunsa hai? What type of business do you have?",
    placeholder: "e.g. Shop, Restaurant, Services, Startup",
  },
  {
    key: "website",
    label: "Aapko kaisi website chahiye? What kind of website do you want?",
    placeholder: "e.g. Simple, E-Commerce, Portfolio",
  },
  {
    key: "service",
    label: "Humse aap kaun sa service lena chahte ho? Which service do you want from us?",
    placeholder: "Choose or type...",
    options: ["Website (Starter ₹2,999)", "E-Commerce Pro (₹19,999)", "Internal CRM", "Admin Panel"],
  },
  {
    key: "message",
    label: "Kuch aur bataana hai? What do you want from us? 👇",
    placeholder: "Apni requirement likhiye...",
  },
] as const;

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  time: string;
};

export function WhatsAppChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (open && step === 0 && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages((m) => [
          ...m,
          {
            id: crypto.randomUUID(),
            type: "bot",
            text: "Namaste! 👋 Main yahan aapki madad ke liye hoon. Thodi si details lete hain — phir aapko WhatsApp pe connect kar denge. Chaliye shuru karte hain!",
            time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
        setIsTyping(false);
        setStep(1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [open, step, messages.length]);

  useEffect(() => {
    if (open && step >= 1 && step <= QUESTIONS.length && !isTyping) {
      const q = QUESTIONS[step - 1];
      const alreadyAsked = messages.some((m) => m.type === "bot" && m.text === q.label);
      if (!alreadyAsked) {
        setIsTyping(true);
        const timer = setTimeout(() => {
          setMessages((m) => [
            ...m,
            { id: crypto.randomUUID(), type: "bot", text: q.label, time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) },
          ]);
          setIsTyping(false);
          inputRef.current?.focus();
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [open, step, messages, isTyping]);

  const currentQuestion = step >= 1 && step <= QUESTIONS.length ? QUESTIONS[step - 1] : null;

  const sendReply = () => {
    const value = input.trim();
    if (!value) return;

    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), type: "user", text: value, time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) },
    ]);
    setAnswers((a) => ({ ...a, [currentQuestion!.key]: value }));
    setInput("");

    if (step >= QUESTIONS.length) {
      setStep(QUESTIONS.length + 1);
      setRedirecting(true);
      const allData = { ...answers, [currentQuestion!.key]: value };
      const labels: Record<string, string> = {
        name: "Name",
        phone: "Phone",
        business: "Business Type",
        website: "Website Type",
        service: "Service",
        message: "Message",
      };
      const waText = [
        "Hi, I need your help with a website / service. Here are my details:",
        "",
        ...Object.entries(allData).map(([k, v]) => `${labels[k] || k}: ${v}`),
      ].join("\n");
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
      setTimeout(() => {
        window.open(waUrl, "_blank");
        setRedirecting(false);
        setOpen(false);
        setStep(0);
        setAnswers({});
        setMessages([]);
      }, 1500);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendReply();
    }
  };

  return (
    <>
      {/* Floating button - bottom right */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Open chat"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </button>

      {/* Chat window - WhatsApp theme */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[99] flex h-[calc(100vh-8rem)] max-h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl shadow-2xl sm:bottom-24 sm:right-6 sm:h-[520px] sm:w-[380px]"
          style={{
            backgroundColor: "#ECE5DD",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          }}
        >
          {/* Header - WhatsApp teal */}
          <div
            className="flex items-center gap-3 px-4 py-3 text-white"
            style={{ backgroundColor: "#075E54" }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_PATH} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">Tech Astra</p>
              <p className="text-xs text-white/80 truncate">Typically replies instantly</p>
            </div>
          </div>

          {/* Chat background pattern */}
          <div
            className="flex-1 flex flex-col overflow-hidden bg-[#ECE5DD]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cdc4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] rounded-lg px-3 py-2 shadow-sm"
                    style={
                      msg.type === "user"
                        ? { backgroundColor: "#D9FDD3", marginLeft: "auto" }
                        : { backgroundColor: "#FFFFFF", marginRight: "auto" }
                    }
                  >
                    <p className="text-sm text-gray-800 break-words">{msg.text}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5 text-right">{msg.time}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-lg px-3 py-2 shadow-sm bg-white">
                    <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                  </div>
                </div>
              )}
              {redirecting && (
                <div className="flex justify-start">
                  <div className="rounded-lg px-3 py-2 shadow-sm bg-white">
                    <p className="text-sm text-gray-800">Redirecting to WhatsApp...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area - only show when waiting for user and not redirecting */}
            {currentQuestion && !redirecting && (
              <div
                className="flex items-center gap-2 border-t border-gray-300/50 p-2"
                style={{ backgroundColor: "#F0F2F5" }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={currentQuestion.placeholder}
                  className="flex-1 rounded-lg border-0 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
                <button
                  type="button"
                  onClick={sendReply}
                  disabled={!input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white disabled:opacity-50"
                  style={{ backgroundColor: "#25D366" }}
                  aria-label="Send"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Quick options for service question */}
            {currentQuestion?.options && !redirecting && (
              <div className="px-2 pb-2 flex flex-wrap gap-1.5">
                {currentQuestion.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      const newAnswers = { ...answers, [currentQuestion.key]: opt };
                      setMessages((m) => [
                        ...m,
                        {
                          id: crypto.randomUUID(),
                          type: "user",
                          text: opt,
                          time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
                        },
                      ]);
                      setAnswers(newAnswers);
                      setInput("");
                      const nextStep = step + 1;
                      if (nextStep > QUESTIONS.length) {
                        setStep(QUESTIONS.length + 1);
                        setRedirecting(true);
                        const labels: Record<string, string> = {
                          name: "Name",
                          phone: "Phone",
                          business: "Business Type",
                          website: "Website Type",
                          service: "Service",
                          message: "Message",
                        };
                        const waText = [
                          "Hi, I need your help with a website / service. Here are my details:",
                          "",
                          ...Object.entries(newAnswers).map(([k, v]) => `${labels[k] || k}: ${v}`),
                        ].join("\n");
                        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
                        setTimeout(() => {
                          window.open(waUrl, "_blank");
                          setRedirecting(false);
                          setOpen(false);
                          setStep(0);
                          setAnswers({});
                          setMessages([]);
                        }, 1500);
                      } else setStep(nextStep);
                    }}
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 shadow-sm"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
