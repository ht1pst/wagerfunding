import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import img from "../assets/heroimg.png";
import img2 from "../assets/Group 18.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Hero(){
      const [menuOpen, setMenuOpen] = useState(false);

   return(
   <section 
  className="min-h-screen h-250 bg-black"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>

<header className="flex items-center justify-between px-6 md:px-[40px] pt-5 relative">

      {/* Logo */}
      <div>
        <img src={logo} alt="" className="lg:w-28 md:w-35 w-18" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex text-[#014B37] gap-10 text-[16px] font-semibold">
        <Link to="/">How It Works</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/challenge">Challenges</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/contact">Contact Us</Link>
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

          <Link to="/">How It Works</Link>
          <Link to="/review">Reviews</Link>
          <Link to="/challenge">Challenges</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact Us</Link>

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
 <div className="absolute left-15 top-40 lg:block hidden">
    <img src={img2} alt="" className="w-140" />
 </div>
<div>
    <div className="flex flex-col lg:gap-14 leading-[52px]" >
    <h1 className="lg:text-[80px] font-semibold text-[60px]">YOUR SKILL.</h1>
   
  <img src={img2} alt="" className="" />

    <h1 className="lg:text-[75px] font-semibold z-20 text-[50px] ">SHARED PROFIT.</h1>
    </div>
    <p className="text-white lg:w-100 lg:text-center mt-4">Pick your challenge, prove consistency, and trade with our capital, profit like a pro, risk-free.</p>
    <div className="flex flex-col lg:flex-row lg:gap-10 gap-7  items-center lg:mt-10 mt-10 justify-center">
<button
  className="bg-white text-black h-10 lg:w-[204px] w-[100%]  rounded-sm border-0 font-bold
             shadow-[0_0_10px_7px_rgba(255,255,255,3.5)]"
>
  START A CHALLENGE
</button>
<button className="h-13 lg:w-[224px] w-[100%] border border-1 border-white rounded-xl text-[16px] text-white">How We Work</button>
    </div>
</div>

<div>
    <img src={img} alt="" className="w-150" />
</div>



</div>

   </section>
   ) 
}
export default Hero;