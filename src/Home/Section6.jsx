import { useState } from "react";
import { motion } from "framer-motion";
function Section6() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Are The Platform Rules",
      answer:
        "WagerFunding is a social play skill-based platform that allows users to showcase their sports prediction ability without risking real money. Users can participate in challenges, complete performance goals, and earn real USD rewards when funded accounts perform successfully. All users must comply with WagerFunding’s Terms of Service, KYC, and Fair Play Policy to maintain account eligibility.",
    },
    {
      question: "Am I Playing On A Demo Account Or Live Account",
      answer:
        "All accounts on WagerFunding are live accounts with simulated cash. You’re trading on real odds data in real time, but the funds used in your account are simulated. When your simulated account performs successfully and passes evaluation, the profits earned are paid out as real USD rewards.",
    },
    {
      question: "What content is prohibited?",
      answer:
        "Users must avoid fraudulent activity, abuse of platform systems, and violations of community standards. Accounts violating policies may be suspended or permanently banned.",
    },
    {
      question: "Guidelines for community engagement",
      answer:
        "Respect other users, avoid harassment, and follow fair play guidelines. Community violations may result in restrictions.",
    },
  ];

  return (
    <section className="bg-black lg:h-200 h-auto pb-10" id="faq">
      <div className="lg:pt-30 px-5 lg:px-0">
        <motion.h1 className="rounded-lg text-white flex justify-center text-4xl font-semibold"
        initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          FAQ
        </motion.h1>

       <motion.h1 className="lg:text-[64px] text-[50px] text-center text-white flex justify-center leading-[50px]"
       initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
       >Know the Game. Play It Right.</motion.h1>

       
        <motion.div className=" mx-auto space-y-4 pt-16"
        initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div className="flex justify-center mx-auto lg:w-200 ">
              <div
                key={index}
                className="border border-[#FFFFFF1A] bg-black rounded-2xl overflow-hidden transition-all duration-300  "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-5 py-4"
                >
                  <span className="font-medium text-[#a9a6a6ff] text-sm lg:text-xl text-left">
                    {faq.question}
                  </span>

                  <span className="text-2xl font-bold text-white">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-96 py-4" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="px-5 text-[#a9a6a6ff]">
                    {faq.answer}
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Section6;
