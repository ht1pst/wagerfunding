import img from "../assets/Checkout.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import bit from "../assets/bitcoin.png";
import { useState } from "react";
function ChaSection1(){
const [selected, setSelected] = useState(null);
const [menuOpen, setMenuOpen] = useState(false);

    return(
        <section  className="min-h-screen bg-black lg:h-420 h-680 px-[20px] "
              style={{
                backgroundImage: `url(${img})`,
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
      <div className="hidden md:flex text-[#00FFB9] gap-10 text-[16px] font-semibold">
        <Link to="/#home">Home</Link>
        <Link to="/#work">How It Works</Link>
        <Link to="/#reviews">Reviews</Link>
        <Link to="/challenge">Challenges</Link>
      <Link to="/#faq">FAQs</Link>
       
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

          <Link to="/#home">Home</Link>
        <Link to="/#work">How It Works</Link>
        <Link to="/#reviews">Reviews</Link>
        <Link to="/challenge">Challenges</Link>
      <Link to="/#faq">FAQs</Link>
          <a href="#" className="font-semibold">
            Login
          </a>

          <button className="bg-[#014B37] text-white px-6 py-2 rounded-xl">
            Start A Challenge
          </button>
        </div>
      )}
    </header>

<div className="pt-15 lg:px-[20px]">
    <h1 className="chance text-white lg:text-[64px] text-[35px] text-center flex justify-center">START YOUR CHALLENGE</h1>

    <div className="flex flex-col lg:flex-row justify-center gap-[37px] mt-10">
 
<div>

   <p className="text-[32px]  text-white">Billing Information</p>

<div className="lg:h-[474px] h-[580px] text-white lg:w-[590px] mt-3 bg-white/10 backdrop-blur-[5px] border border-[#FFFFFF1A] rounded-xl px-[20px] pt-5">
    <div className="flex lg:flex-row flex-col gap-[12px]">
        <div>
            <p className="text-[15px] text-white">First Name</p>
            <input type="text" className="lg:w-[275px] w-[100%] px-3 h-[40px] bg-black rounded-xl mt-3" />
        </div>
        <div>
              <p className="text-[15px] text-white">Last Name</p>
            <input type="text" className="lg:w-[275px] w-[100%] px-3 h-[40px] bg-black rounded-xl mt-3" />
        </div>
    </div>

 <div className="mt-4">
     <p className="text-[15px] text-white">Email Address</p>
    <input type="text" className="lg:w-[560px] w-[100%] h-[40px] px-3 bg-black rounded-xl mt-3" />
        </div>


 <div className="mt-4">
              <p className="text-[15px] text-white">Country</p>
            <input type="text" className="lg:w-[560px] w-[100%] px-3 h-[40px] bg-black rounded-xl mt-3" />
        </div>



         <div className="mt-4">
              <p className="text-[15px] text-white">Street Address</p>
            <input type="text" className="lg:w-[560px] w-[100%] px-3 h-[40px] bg-black rounded-xl mt-3" />
        </div>



         <div className="mt-4">
              <p className="text-[15px] text-white">Town/City</p>
            <input type="text" className="lg:w-[560px] w-[100%] px-3 h-[40px] bg-black rounded-xl mt-3" />
        </div>
</div>
</div>



<div className="mt-20 lg:mt-0">
    

    <p className="text-[24px] text-white">Apply Coupon</p>

    <div className="bg-white/10 backdrop-blur-[5px] border border-[#FFFFFF1A] lg:h-[98px] h-[130px] pt-2 lg:px-2  rounded-lg lg:w-[428px] mt-4 ">
        <p className="text-[#FFFFFF80] px-[20px] ">If you have a coupon code, please apply it below</p>
        <div className="flex  lg:gap-8 justify-between px-[20px] mt-3 lg:items-center items-center">
        <input type="text" name="" id="" placeholder="coupon code"  className="text-[#FFFFFF80] lg:w-[246px] w-[150px] bg-black h-[40px] rounded-lg px-3"/>
        <button className="bg-white text-black text-[10px] lg:h-2 h-[1px] flex justify-center items-center lg:w-[104px] w-[50px]  rounded-sm border-0 font-bold shadow-[0_0_10px_20px_rgba(255,255,255,3.5)] mr-10">
Apply
</button>
        </div>
    </div>
<p className="text-[24px] text-white mt-8">Your Order Summary</p>
<div className="bg-white/10 backdrop-blur-[5px] border border-[#FFFFFF1A] rounded-xl px-[20px] h-[335px] pt-2 mt-4">
    <p className="text-[24px] text-[#FFFFFF80]">Product</p>


    <div className="flex justify-between items-center mt-2">
        <p className="text-[24px] text-white">Product x1 </p>
        <p className="text-[24px] text-white">$256.00</p>
    </div>


    <div className="flex justify-between items-center mt-2">
<p className="text-[18px] text-[#FFFFFF80]">Add - ons</p>
<p className="text-[20px] text-white">$3.99</p>
    </div>


    <div className="flex justify-between items-center mt-2">
        <p className="text-[18px] text-[#FFFFFF80]">Coupon added</p>
<p className="text-[20px] text-white">$3.99</p></div>


    <div className="flex justify-between items-center mt-2">
        <p className="text-[18px] text-[#FFFFFF80]">Add - ons</p>
<p className="text-[20px] text-white">$3.99</p>
    </div>


    <div className="flex justify-between items-center mt-2">
        <p className="text-[18px] text-[#FFFFFF80]">Sub Total</p>
<p className="text-[20px] text-white">$253.99</p>
</div>

<div className="border border-l-0 border-r-0 border-t-0 border-[#FFFFFF80] pt-4"></div>

 <div className="flex justify-between items-center mt-5">
        <p className="text-[24px] text-white">Total</p>
<p className="text-[36px] text-white">$253.99</p>
</div>

</div>


<p className="text-[24px] text-white mt-8">Payment Method</p>

<div className="bg-white/10 backdrop-blur-[5px] border border-[#FFFFFF1A] rounded-xl h-[281px] px-[20px] pt-6 mt-5">
    
<div className="flex items-center gap-[16px]">
    <input
  type="radio"
  checked={selected === "option1"}
  onClick={() =>
    setSelected(selected === "option1" ? null : "option1")
  }
 />

   <p className="text-[18px] text-white">Crypto Payments</p> 

   <img src={bit} alt="" className="w-[32px]" />
</div>

<div className="flex items-center gap-[16px] mt-3">
    <input
  type="radio"
  checked={selected === "option1"}
  onClick={() =>
    setSelected(selected === "option1" ? null : "option1")
  }
 />

   <p className="text-[18px] text-white">Credit Card</p> 
</div>


<div className="flex items-center gap-[16px] mt-3">
    <input type="checkbox" name="" id="" />
    <p className="text-[16px] text-[#FFFFFFCC] w-[334px] ">I have read and agree to the website terms and conditions *</p>
</div>

<div className="px-[20px]">
<button
  className="bg-white text-[#014B37] h-5 lg:w-[344px] w-[100%]  rounded-sm border-0 font-bold
             shadow-[0_0_10px_20px_rgba(255,255,255,3.5)] mt-10 "
>
  START A CHALLENGE
</button>
</div>

</div>


</div>



    </div>





</div>
<div className="flex justify-center mt-20">

<div className="flex  flex-col lg:flex-row bg-white/10 backdrop-blur-[5px] border border-[#FFFFFF1A] text-[18px] rounded-xl text-white lg:justify-around gap-15 px-[40px] lg:h-[325px] h-[655px] w-[1240px] pt-10">

    <div className="flex flex-col lg:gap-[120px] gap-[20px]">
<img src={logo} alt="" className="h-[32px] w-[72px]"/>
<p>All rights Reserved</p>
    </div>


    <div className="flex flex-col gap-[20px]">
<p className="text-[#808080] text-[16px]">QUICK LINKS</p>
<a href="#">Home</a>
<a href="#">How it works</a>
<a href="#">Challenges</a>
<a href="#">Contact</a>
<a href="#">FAQs</a>
    </div>

     <div className="flex flex-col gap-[20px]">
        <p className="text-[#808080] text-[16px]">COMPANY</p>
<a href="#">Terms & Condition</a>
<a href="#">Privacy</a>
     </div>
    
</div>

</div>

        </section>
    )
}
export default  ChaSection1