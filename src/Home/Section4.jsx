import caro1 from "../assets/caro1.png";
import caro2 from "../assets/caro2.png";
import caro3 from "../assets/caro3.png";
import caro4 from "../assets/caro4.png";
import caro5 from "../assets/caro5.png";
import caro6 from "../assets/caro6.png";
import caro7 from "../assets/caro7.png";
import img1 from "../assets/10.png";
import img2 from "../assets/1000.png";
import img3 from "../assets/25.png";
import { motion } from "framer-motion";
function Section4(){
    return(
       <section className="bg-black lg:h-150 h-250 px-[20px] pt-10" >
        <div>
            <motion.h1 className="lg:text-[64px] text-[50px] text-center leading-[50px] text-white flex justify-center"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >Bigger Sports Leagues. Bigger Wins.</motion.h1>


            <motion.p className="lg:text-[20px] text-[18px] text-[#E6E6E6] lg:w-140 text-center flex mx-auto mt-5"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >Whether it’s hoops, baseball, or beyond. we power your play. You call the shots, we cover the cost.</motion.p>
        </div>


<motion.div className="overflow-hidden lg:w-[80%] xl:w-[45%]  w-[90%] mx-auto"
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>

<div className="animate-marque whitespace-nowrap justify-center flex ">

        <div className="flex justify-center lg:gap-10  gap-5 mt-10">

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro1} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro2} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro3} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro4} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro5} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro6} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro3} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro1} alt="" />
</div>
        </div>

        <div className="flex justify-center lg:gap-10  gap-5 mt-10 pl-5">

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro4} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro2} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro3} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro4} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro5} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro6} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro3} alt="" />
</div>

<div className="bg-[#00FFB9] flex justify-center w-[83px] h-[84px] rounded-2xl">
<img src={caro1} alt="" />
</div>
</div>
        </div>
</motion.div>

<div className="flex flex-col lg:flex-row  justify-center lg:gap-10  gap-5 items-center mt-20">
    <motion.img src={img1} alt="" className="w-[300px] h-[133px]"
     initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    />


      <motion.img src={img2} alt="" className="w-[300px] h-[113px]"
       initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />


        <motion.img src={img3} alt="" className="w-[300px] h-[133px]" 
         initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
</div>
       </section>
    )
}
export default Section4