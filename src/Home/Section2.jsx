import img from "../assets/how.png";
import check from "../assets/Check.png";
import challenge from "../assets/challenge.png";
import profit from "../assets/profit.png";
import pass from "../assets/pass.png";
import { motion } from "framer-motion";
function Section2(){
    return(
       <section className="bg-black lg:h-180 h-320 px-[20px] pt-10 lg:pt-10" id="work">
        <motion.div className="flex justify-center"
        initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            <img src={img} alt="" className="lg:w-80 w-60" />
        </motion.div>


        <motion.h1 className="lg:text-[64px] text-[45px] font-bold text-white flex justify-center text-center lg:w-200 leading-[60px] mx-auto mt-10"
         initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >Complete the Challenge. Unlock Real Rewards.</motion.h1>

        
        <motion.p className="lg:text-[23px] text-[20px] text-white flex justify-center mt-5 text-center "
         initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >If you can perform under pressure, we’ll bankroll your next level.</motion.p>

        <div className="flex flex-col lg:flex-row justify-center lg:gap-10 gap-25 mt-35">


            <motion.div className="border border-[#FFFFFF4A] lg:w-[389px] h-[150px] flex relative rounded-2xl"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
<div className="absolute lg:top-[-100px] top-[-80px] lg:w-90 w-70 left-1/2 -translate-x-1/2"><img src={challenge} alt="" className="" /></div>
                <div className="flex justify-center items-end px-[20px] pb-5" >
                    <p className="text-white text-[20px]">Pick your level, trust your skills and go for the win</p>
                    <img src={check} alt="" className="bg-[#00FFB9] w-[44px] rounded-lg" />
                </div>
            </motion.div>


          
            <motion.div className="border border-[#FFFFFF4A] lg:w-[389px] h-[150px] flex relative rounded-2xl"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
<div className="absolute lg:top-[-100px] top-[-80px] lg:w-90 w-70 left-1/2 -translate-x-1/2"><img src={pass} alt="" className="" /></div>
                <div className="flex justify-center items-end px-[20px] pb-5" >
                    <p className="text-white text-[20px]">Crush the challenge and earn access to real bankrolls. </p>
                    <img src={check} alt="" className="bg-[#00FFB9] w-[44px] rounded-lg" />
                </div>
            </motion.div>




           
            <motion.div className="border border-[#FFFFFF4A] lg:w-[389px] h-[150px] flex relative rounded-2xl"
             initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
<div className="absolute lg:top-[-90px] top-[-80px] lg:w-70 w-60 left-1/2 -translate-x-1/2"><img src={profit} alt="" className="" /></div>
                <div className="flex justify-center items-end px-[20px] pb-5" >
                    <p className="text-white text-[20px]">Trade, Play and profit like a pro, perform well and scale up</p>
                    <img src={check} alt="" className="bg-[#00FFB9] w-[44px] rounded-lg" />
                </div>
            </motion.div>



        </div>
       </section>
    )
}
export default Section2