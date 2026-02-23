import img from "../assets/beneffit.png";
import img1 from "../assets/bank.png";
import img2 from "../assets/fast.png";
import img3 from "../assets/skill.png";
import img4 from "../assets/leagues.png";
import img11 from "../assets/solved.png";
import img12 from "../assets/faster.png";
import img13 from "../assets/leaguesnew.png";
import img14 from "../assets/our.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import { motion } from "framer-motion";
function Section5(){
    return(
        <section className="bg-black lg:h-260 h-450 px-[20px] pt-10" id="reviews">
            <div className="">
<motion.img src={img} alt="" className="w-[139px] h-[51px] flex justify-center mx-auto"
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
/>
<motion.h1 className="lg:text-[64px] text-[50px] leading-[50px] text-center text-white flex justify-center"
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>Know the Game. Play It Right.</motion.h1>
            </div>


            <div className="flex lg:flex gap-5 justify-center mt-20 hidden lg:block ">

<div>
    <img src={img1} alt="" className="w-[650px] h-[350px]" />
</div>


<div>
     <img src={img2} alt="" className="w-[450px] h-[350px]" />
</div>

            </div>


 <div className="flex lg:flex  gap-5 justify-center mt-5 hidden lg:block">

<div>
    <img src={img3} alt="" className="w-[450px] h-[350px]" />
</div>


<div>
     <img src={img4} alt="" className="w-[650px] h-[350px]" />
</div>

            </div>


<div className="mt-10 lg:hidden block">

<motion.div className="bg-[#181717] #181717 h-85 pt-10 px-[20px] rounded-xl border "
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>

    <div className="leading-[20px]">
    <h1 className="text-[26px] text-white">Bankroll Problems?</h1>
    <img src={img11} alt="" className="w-20" />
    <p className="text-[13px] text-[#FFFFFFBF] leading-[20px] mt-3">Stop waiting to rebuild after a rough stretch. Start fresh with real capital, today.</p>
    </div>
<div className="flex justify-center mt-5">
    <img src={frame1} alt="" className="w-40" />
</div>

</motion.div>

<motion.div className="bg-[#181717] #181717 h-85 pt-10 px-[20px] rounded-xl border  mt-4"
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
    <div className="flex justify-center">
    <img src={frame2} alt="" className="w-[95%]" />
    </div>

    <div className="leading-[20px] mt-10">
        <h1 className="text-[26px] text-white">Fast Wins,</h1>
        <img src={img12} alt="" className="w-40" />
        <p className="text-[13px] text-[#FFFFFFBF] leading-[20px] mt-2">Meet your targets and get paid within 7 days—guaranteed. No mystery timelines, no "processing delays."</p>
    </div>
</motion.div>


</div>




<div className="mt-4 lg:hidden block">

<motion.div className="bg-[#181717] #181717 h-100 pt-10 px-[20px] rounded-xl border "
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>

    <div className="leading-[20px]">
    <h1 className="text-[26px] text-white">Play What You Know Best</h1>
    <img src={img13} alt="" className="w-50" />
    <p className="text-[13px] text-[#FFFFFFBF] leading-[20px] ">Bet football Sundays, basketball Tuesdays, baseball Wednesdays. Your capital works across every league, every game, all year round.</p>
    </div>
<div className="flex justify-center mt-5">
    <img src={frame3} alt="" className="w-40" />
</div>

</motion.div>

<motion.div className="bg-[#181717] #181717 h-85 pt-10 px-[20px] rounded-xl border  mt-4"
 initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
>
    <div className="flex justify-center">
    <img src={frame4} alt="" className="w-[95%]" />
    </div>

    <div className="leading-[20px] mt-10">
        <h1 className="text-[26px] text-white">Your Skill, Your Brain</h1>
        <img src={img14} alt="" className="w-30" />
        <p className="text-[13px] text-[#FFFFFFBF] leading-[20px] mt-2">Simple math: skilled plays + serious capital = serious profits.</p>
    </div>
</motion.div>

</div>

        </section>
    )
}
export default Section5