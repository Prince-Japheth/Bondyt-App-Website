"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ChevronDown } from 'lucide-react';

const categories = [
  "General Questions",
  "Profile and Matching",
  "Messaging and Communication",
  "Live Stream and Broadcast",
  "Safety and Privacy",
  "Date Booking",
  "Gifting and Refunds",
  "Subscriptions and Payments",
  "Adverts",
  "Referrals and Rewards"
];

const faqsByCategory = {
  "General Questions": [
    {
      question: "What is Bondyt?",
      answer: "Bondyt is a modern dating app designed to connect individuals looking for meaningful relationships using smart matching algorithms and engaging features.",
    },
    {
      question: "How does Bondyt work?",
      answer: "Create a profile, set your preferences, and start swiping through potential matches. When you both express interest, you can connect and chat to get to know each other better.",
    },
    {
      question: "Is Bondyt free to use?",
      answer: "Yes, Bondyt offers a free version with essential features. Premium subscriptions are available for those seeking additional benefits like unlimited swipes and advanced filters.",
    }
  ],
  "Profile and Matching": [
    {
      question: "How do I create my profile on Bondyt?",
      answer: "Sign up using your email, phone number, or social media accounts. Complete your profile by adding photos, writing a bio, and setting your match preferences.",
    },
    {
      question: "How does Bondyt match me with potential dates?",
      answer: "Our algorithm considers factors such as your location, interests, and activity on the app to suggest compatible matches tailored to your preferences.",
    },
    {
      question: "Can I update my profile or match preferences?",
      answer: "Absolutely. You can update your profile details and adjust your preferences at any time from your account settings.",
    }
  ],
  "Messaging and Communication": [
    {
      question: "How do I start a conversation on Bondyt?",
      answer: "Once you match with someone, tap the chat icon to send your first message. We also offer conversation starters to help break the ice.",
    },
    {
      question: "What features are available to enhance communication?",
      answer: "Bondyt offers text messaging, emoji reactions, and conversation prompts to facilitate engaging and fun interactions.",
    },
    {
      question: "What should I do if I receive inappropriate messages?",
      answer: "You can report or block any user directly within the chat. Our support team will review the report and take the necessary action to ensure your safety.",
    }
  ],
  "Live Stream and Broadcast": [
    {
      question: "What is the Live Stream feature on Bondyt?",
      answer: "The Live Stream feature allows users to broadcast live sessions or join others' live streams to interact in real time, creating a dynamic and social dating experience.",
    },
    {
      question: "How can I join or host a live stream?",
      answer: "Access the Live Stream tab in the app. To host, simply schedule your broadcast through your profile settings. To join, tap on any live session available in your area or network.",
    },
    {
      question: "Are there any fees for using Live Stream?",
      answer: "Basic live streaming is free. However, certain premium features (such as special effects or spotlight broadcasts) may require a subscription or a one-time fee.",
    }
  ],
  "Safety and Privacy": [
    {
      question: "How does Bondyt protect my personal information?",
      answer: "We use industry-standard encryption, secure servers, and robust privacy policies to safeguard your data. Your personal information is never shared without your consent.",
    },
    {
      question: "What should I do if I feel unsafe or encounter harassment?",
      answer: "Immediately report any incidents using the in-app reporting feature. Our dedicated safety team will review your case and take prompt action.",
    },
    {
      question: "Can I control who sees my profile?",
      answer: "Yes, adjust your privacy settings to control your profile visibility, block specific users, or even hide your profile from those you don't want to connect with.",
    }
  ],
  "Date Booking": [
    {
      question: "How can I book a date through Bondyt?",
      answer: "Use our integrated Date Booking feature to choose a time, venue, and confirm the date directly within the app after mutual agreement with your match.",
    },
    {
      question: "What is the process for confirming a date booking?",
      answer: "Once both parties agree on the details, simply confirm the booking via the app. You'll receive a notification with all the details, including time, location, and any special instructions.",
    },
    {
      question: "Can I cancel or reschedule a date booking?",
      answer: "Yes, you can cancel or reschedule a booking through the app. Please note that cancellation policies may apply, so check the guidelines provided during the booking process.",
    }
  ],
  "Gifting and Refunds": [
    {
      question: "How do I send a gift on Bondyt?",
      answer: "Navigate to the Gifting section in the app, select the gift you wish to send, and follow the prompts to complete the transaction. Gifts can be digital or arrange for a physical delivery depending on the option chosen.",
    },
    {
      question: "What is Bondyt's refund policy for gifts?",
      answer: "Refunds are available if a gift fails to be delivered or if there's an error in processing. Contact our support team with your transaction details to initiate a refund.",
    },
    {
      question: "What should I do if my gift isn't delivered?",
      answer: "Report the issue via our in-app support or help section. Our team will investigate the issue promptly and ensure you receive the gift or a refund as applicable.",
    }
  ],
  "Subscriptions and Payments": [
    {
      question: "What subscription plans does Bondyt offer?",
      answer: "Bondyt offers both free and premium subscription plans. Premium plans provide additional features like unlimited swipes, advanced matching filters, and ad-free browsing.",
    },
    {
      question: "How can I upgrade or cancel my subscription?",
      answer: "You can manage your subscription directly through the app's account settings or via your app store's subscription management interface.",
    },
    {
      question: "What payment methods does Bondyt accept?",
      answer: "We accept various payment methods, including credit/debit cards, mobile money, and other digital payment platforms available in your region.",
    }
  ],
  "Adverts": [
    {
      question: "Does Bondyt display advertisements?",
      answer: "Yes, the free version of Bondyt displays non-intrusive advertisements to support app maintenance and development.",
    },
    {
      question: "Can I purchase ad space on Bondyt?",
      answer: "Currently, advertisement opportunities are available for select partners. Please contact our business development team for more details regarding ad placements.",
    },
    {
      question: "Can I opt out of personalized advertisements?",
      answer: "Yes, you can adjust your ad preferences in the app settings to opt out of personalized ads while still receiving general advertisements.",
    }
  ],
  "Referrals and Rewards": [
    {
      question: "How does Bondyt's referral program work?",
      answer: "Invite your friends to join Bondyt using your unique referral code. When they sign up and start using the app, both you and your friend will earn rewards.",
    },
    {
      question: "What rewards can I earn by referring friends?",
      answer: "Rewards may include free premium days, special in-app badges, and exclusive access to new features. Details are outlined in our referral program terms.",
    },
    {
      question: "How do I check my referral rewards status?",
      answer: "You can track your referral progress and reward status directly in the 'Referrals' section of your Bondyt profile.",
    }
  ]
};

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 bg-white rounded-3xl p-6 lg:p-16">
      <motion.div variants={fadeInUp} className="col-span-4 lg:col-span-1 order-last lg:order-first">
        <h2 className="mb-8 font-nohemi text-4xl font-medium">FAQ's</h2>
        <div className="flex flex-col space-y-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenQuestion(null);
              }}
              className={cn(
                "rounded-lg px-6 py-2 text-left transition",
                activeCategory === category
                  ? "bg-gradient-to-r from-[#F878FF] to-[#CD8DFE] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              )}
              style={{ fontSize: "0.875rem" }}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="col-span-4 lg:col-span-3">
        <h2 className="mb-8 font-nohemi text-4xl font-medium">{activeCategory}</h2>
        <div className="space-y-4">
          {faqsByCategory[activeCategory as keyof typeof faqsByCategory].map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span className={cn("ml-4 transition-transform", openQuestion === index ? "rotate-180" : "")}>
                  <ChevronDown />
                </span>
              </button>
              {openQuestion === index && <div className="border-t p-4 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}