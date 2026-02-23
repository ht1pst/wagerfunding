import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import img from "../assets/heroimg.png";
import img2 from "../assets/Group 18.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Hero(){
      const [menuOpen, setMenuOpen] = useState(false);

   return(
   <section 
  className="min-h-screen h-250 lg:h-190 bg-black" id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>

<header className="flex items-center justify-between px-6 md:px-[40px] pt-5 relative fixed">

      {/* Logo */}
      <div>
        <img src={logo} alt="" className="lg:w-28 md:w-35 w-18" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex text-[#014B37] gap-10 text-[16px] font-semibold">
        <a href="#home">Home</a>
         <a href="#work">How It Works</a>
        <a href="#reviews">Reviews</a>
        <Link to="/challenge">Challenges</Link>
      <a href="#faq">FAQs</a>
       
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-5">
        <a href="#" className="text-[#014B37] text-[16px] font-semibold">
          Login
        </a>

        <button className="flex items-center bg-[#014B37] gap-2 text-white h-10 px-6 justify-center rounded-xl text-[16px] font-semibold">
          Start A Challenge
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#014B37]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 md:hidden z-50">

           <a href="#home">Home</a>
         <a href="#work">How It Works</a>
        <a href="#reviews">Reviews</a>
        <Link to="/challenge">Challenges</Link>
      <a href="#faq">FAQs</a>

          <a href="#" className="font-semibold">
            Login
          </a>

          <button className="bg-[#014B37] text-white px-6 py-2 rounded-xl">
            Start A Challenge
          </button>
        </div>
      )}
    </header>
  


<div className="flex flex-col lg:flex-row justify-center lg:gap-[125px] gap-[80px]   lg:items-center pt-10 relative px-[20px]">
 <motion.div className="absolute left-15 top-40 lg:block hidden"
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
 >
    <img src={img2} alt="" className="w-140" />
 </motion.div>
<div>
    <div className="flex flex-col lg:gap-14 leading-[32px] lg:leading-[125px]" >
    <motion.h1 className="lg:text-[80px] font-semibold text-[60px]"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >YOUR SKILL.</motion.h1>
   
  <motion.img src={img2} alt="" className="block lg:hidden"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
  />

    <motion.h1 className="lg:text-[75px] font-semibold z-20 text-[50px] "
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
    >SHARED PROFIT.</motion.h1>
    </div>
    <motion.p className="text-white lg:w-100 lg:text-center mt-4"
    initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
    >Pick your challenge, prove consistency, and trade with our capital, profit like a pro, risk-free.</motion.p>
    <div className="flex flex-col lg:flex-row lg:gap-10 gap-7  items-center lg:mt-10 mt-10 justify-center">
<motion.button
  className="bg-white text-black h-10 lg:w-[204px] w-[100%]  rounded-sm border-0 font-bold
             shadow-[0_0_10px_10px_rgba(255,255,255,9.5)]"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
>
  START A CHALLENGE
</motion.button>

<motion.button className="h-13 lg:w-[224px] w-[100%] border border-1 border-white rounded-xl text-[16px] text-white"
initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
>How We Work</motion.button>
    </div>
</div>

<motion.div
initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
>
    <img src={img} alt="" className="w-150" />
</motion.div>



</div>

   </section>
   ) 
}
export default Hero;