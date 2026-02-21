import img from "../assets/checkout.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import bit from "../assets/bitcoin.png";
import { useState } from "react";
function ChaSection1(){
const [selected, setSelected] = useState(null);

    return(
        <section  className="min-h-screen bg-black h-320"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}>
<header className="flex items-center justify-between px-[40px] pt-5">
    <div>
<img src={logo} alt="" className="w-35" />
    </div>

    <div className="flex text-[#014B37] gap-10 text-[16px] font-semibold">
        <Link to="/">How It Works</Link> 
        <Link to="/review">Reviews</Link>
          <Link to="/challenge" >Challenges</Link>
          <Link to="/faq">FAQs</Link>
            <Link to="/contact">Contact Us</Link>
    </div>

    <div className="flex items-center gap-5"> 
        <a href="#" className="text-[#014B37] text-[16px] font-semibold">Login</a>
        <div>
            <button className="flex items-center bg-[#014B37] gap-2 text-white h-10 w-50 justify-center rounded-xl text-[16px] font-semibold">Start A Challenge <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="12px" fill="#ffffff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span></button>
        </div>
    </div>
</header>

<div className="pt-15">
    <h1 className="chance text-white text-[64px] flex justify-center">START YOUR CHALLENGE</h1>

    <div className="flex justify-center gap-[37px] mt-10">
 
<div>

   <p className="text-[32px]  text-white">Billing Information</p>

<div className="h-[474px] w-[590px] mt-3 bg-white/10 backdrop-blur-[5px] border border-[#FFFFFF1A] rounded-xl px-[20px] pt-5">
    <div className="flex gap-[12px]">
        <div>
            <p className="text-[15px] text-white">First Name</p>
            <input type="text" className="w-[274px] h-[40px] bg-black rounded-xl mt-3" />
        </div>
        <div>
              <p className="text-[15px] text-white">Last Name</p>
            <input type="text" className="w-[274px] h-[40px] bg-black rounded-xl mt-3" />
        </div>
    </div>

 <div className="mt-4">
     <p className="text-[15px] text-white">Email Address</p>
    <input type="text" className="w-[560px] h-[40px] bg-black rounded-xl mt-3" />
        </div>


 <div className="mt-4">
              <p className="text-[15px] text-white">Country</p>
            <input type="text" className="w-[560px] h-[40px] bg-black rounded-xl mt-3" />
        </div>



         <div className="mt-4">
              <p className="text-[15px] text-white">Street Address</p>
            <input type="text" className="w-[560px] h-[40px] bg-black rounded-xl mt-3" />
        </div>



         <div className="mt-4">
              <p className="text-[15px] text-white">Town/City</p>
            <input type="text" className="w-[560px] h-[40px] bg-black rounded-xl mt-3" />
        </div>
</div>
</div>



<div>
    

    <p className="text-[24px] text-white">Apply Coupon</p>

    <div className="bg-white/10 backdrop-blur-[5px] border border-[#FFFFFF1A] h-[98px] pt-2 px-2 rounded-lg w-[428px] mt-4 ">
        <p className="text-[#FFFFFF80]">If you have a coupon code, please apply it below</p>
        <div className="flex gap-8 mt-3 items-center">
        <input type="text" name="" id="" placeholder="coupon code"  className="text-[#FFFFFF80] w-[246px] bg-black h-[40px] rounded-lg px-3"/>
        <button className="bg-white text-black text-[10px] h-2 w-[104px]  rounded-sm border-0 font-bold shadow-[0_0_10px_20px_rgba(255,255,255,3.5)]">
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
  className="bg-white text-[#014B37] h-5 w-[344px]  rounded-sm border-0 font-bold
             shadow-[0_0_10px_20px_rgba(255,255,255,3.5)] mt-10 "
>
  START A CHALLENGE
</button>
</div>

</div>


</div>



    </div>





</div>

        </section>
    )
}
export default  ChaSection1