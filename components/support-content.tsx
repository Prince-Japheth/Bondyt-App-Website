"use client";

import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { Send, Check, CheckCheck } from "lucide-react";
import { FAQSection } from "@/components/faq-section";
import { Loader } from "@/components/loader";

export function SupportContent() {
  // Message state
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can we help you today?", type: "received", status: "read" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Add a new message and send to WhatsApp
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add message to chat
    const newMessage = { id: messages.length + 1, text: inputValue, type: "sent", status: "sent" };
    setMessages([...messages, newMessage]);

    // Send to WhatsApp
    const phoneNumber = "15096170531";
    const encodedMessage = encodeURIComponent(inputValue);
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setInputValue("");
  };

  // Handle enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Simulate status updates
  useEffect(() => {
    if (messages.length > 1) {
      const lastMessage = messages[messages.length - 1];

      if (lastMessage.type === "sent") {
        const timer1 = setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === lastMessage.id ? { ...msg, status: "delivered" } : msg
            )
          );
        }, 2000);

        const timer2 = setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === lastMessage.id ? { ...msg, status: "read" } : msg
            )
          );
        }, 3000);

        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    }
  }, [messages]);

  const statusIcons = {
    sent: <Check className="h-4 w-4 text-gray-500" />,
    delivered: <CheckCheck className="h-4 w-4 text-gray-500" />,
    read: <CheckCheck className="h-4 w-4 text-blue-500" />,
  };

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SiteHeader />

          <motion.main className="mx-auto py-12" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.div variants={fadeInUp} className="text-center">
              <h1 className="mb-4 font-nohemi text-4xl font-medium md:text-5xl">Get in touch</h1>
              <p className="mx-auto max-w-2xl text-gray-600">
                Have any questions? Type out your message in the chat box and send; a customer care representative will
                reach back to you immediately.
              </p>
            </motion.div>

            <div className="mx-auto mt-16 grid p-4 lg:p-20 gap-8 md:grid-cols-3" 
              style={{ backgroundColor: '#f3f5fc' }}>
              {/* FAQ Section - hidden on mobile, shown first on desktop */}
              <motion.div variants={fadeInUp} className="hidden md:block md:col-span-2">
                <div className="transform scale-75 origin-top-left" style={{ width: "135%" }}>
                  <FAQSection />
                </div>
              </motion.div>

              {/* Chat Section */}
              <motion.div variants={fadeInUp} className="md:col-span-1">
                <div className="p-5 bg-white rounded-2xl">
                  <h2 className="mb-6 text-[28px] font-medium text-[#333333] text-center">Contact Us</h2>
                  <div
                    ref={chatContainerRef}
                    className="p-6 shadow-sm min-h-[385px] flex flex-col overflow-y-auto rounded-xl"
                    style={{
                      maxHeight: "385px",
                      backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2023873-8GXTDA1MBFpKCDOSMGJxsRYOagM4Vh.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex-1">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`max-w-[80%] mb-4 ${msg.type === "sent" ? "self-end lg:ms-16" : ""}`}
                        >
                          <p
                            className={`px-4 py-2 text-sm relative ${msg.type === "sent" ? "bg-[#ccecac]" : "bg-white"}`}
                            style={{ borderRadius: "10px" }}
                          >
                            {msg.text}
                            {msg.type === "sent" && (
                              <span className="absolute bottom-1 right-2">
                                {statusIcons[msg.status]}
                              </span>
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <Input
                      type="text"
                      placeholder="Type your message here..."
                      className="flex-1"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      style={{
                        backgroundColor: "#f5f4f4",
                        borderRadius: "9999px",
                        border: "none",
                      }}
                    />
                    <Button
                      size="icon"
                      className="w-12 h-12"
                      style={{
                        backgroundColor: "#25D366",
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={handleSendMessage}
                    >
                      <Send className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section - shown on mobile only */}
              <motion.div variants={fadeInUp} className="md:hidden">
                <div className="transform scale-75 origin-top-left" style={{ width: "135%" }}>
                  <FAQSection />
                </div>
              </motion.div>
            </div>
          </motion.main>

          <SiteFooter />
        </>
      )}
    </div>
  );
}