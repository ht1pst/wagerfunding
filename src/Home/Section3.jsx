import profit from "../assets/profit.png";
import { useState } from "react";

function Section3() {
  const [activeCategory, setActiveCategory] = useState("instant");
  const [activeIndex, setActiveIndex] = useState(null);

  const tableData = {
    instant: [
      {
        char1: "$1k",
        char2: "$5k",
        char3: "$10k",
        char4: "$25k",
        char5: "$30k",
      },
    ],

    step: [
      {
        char1: "$1k",
        char2: "$9k",
        char3: "$15k",
        char4: "$25k",
        char5: "$35k",
        char6: "$45k",
       
      },
    ],

    stepp: [
      {
        char1: "$10k",
        char2: "$22k",
        char3: "$32k",
        char4: "$40k",
        char5: "$50k",
        char6: "$55k",
      },
    ],
  };

 const tableDets = {
  instant: [
    {
      labels: [
         "PROF.TARGET",
        "PROF.TARGET",
        "MAX DRAW",
        "PROF.TARGET",
        "MAX DRAWT",
        "PROF.TARGET",
        "MAX DRAW",
      ],
      columns: [
        ["Phase1", "5%", "10%", "2%", "10%", "10%", "10%"],
        ["Phase2", "5%", "10%", "2%", "10%", "10%", "10%"],
      
      ],
    },
  ],

  step: [
    {
      labels: [
         "PROF.TARGET",
        "PROF.TARGET",
        "MAX DRAW",
        "PROF.TARGET",
        "MAX DRAWT",
        "PROF.TARGET",
        "MAX DRAW",
      ],
      columns: [
        ["Phase1", "5%", "10%", "2%", "10%", "10%", "10%"],
        ["Funded", "5%", "10%", "2%", "10%", "10%", "10%"],
      ],
    },
  ],

  stepp: [
    {
      labels: [
       "PROF.TARGET",
        "PROF.TARGET",
        "MAX DRAW",
        "PROF.TARGET",
        "MAX DRAWT",
        "PROF.TARGET",
        "MAX DRAW",
      ],
      columns: [
        ["Funded", "5%", "10%", "2%", "10%", "10%", "10%"],
      ],
    },
  ],
};




const prices = {
  instant: [35, 60, 120, 250, 300],
  step: [39, 79, 129, 199, 249, 299],
  stepp: [49, 89, 149, 209, 269, 329],
};
  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (
    <section className="bg-black h-330 px-[20px] pt-10">
      <div>
        <img src={profit} alt="" className="lg:w-80 w-60 flex justify-center mx-auto" />
        <h1 className="lg:text-[64px] text-[50px] text-center font-bold text-white flex justify-center mx-auto leading-[50px]">
          Start Your Challenge Now
        </h1>
        <p className="lg:text-[23px] text-[18px] text-white flex justify-center text-center lg:w-270 mx-auto mt-5">
          Select a capital tier that fits your strategy. Meet performance goals,
          control drawdowns, And gain access to larger bankrolls. backed by our
          support.
        </p>
      </div>

      <div className="flex lg:justify-center justify-around gap-1 bg-[#191919] lg:w-[800px] rounded-2xl mx-auto mt-7 h-[63px]">
        <h1
          className={`lg:text-[24px] text-[21px] lg:w-[258px] w-[100px]  rounded-2xl flex justify-center text-center leading-[25px] items-center ${
            activeCategory === "instant"
              ? "bg-[#00FFB9] text-black font-bold"
              : "text-white"
          }`}
          onClick={() => changeCategory("instant")}
        >
          INSTANT FUNDING
        </h1>

        <h1
          onClick={() => changeCategory("step")}
          className={`lg:text-[24px] text-[21px] flex rounded-2xl justify-center lg:w-[258px] w-[100px] items-center ${
            activeCategory === "step"
              ? "bg-[#00FFB9] text-black font-bold"
              : "text-white"
          }`}
        >
          STEP1
        </h1>

        <h1
          onClick={() => changeCategory("stepp")}
          className={`lg:text-[24px] text-[21px] flex flex-wrap rounded-2xl justify-center lg:w-[258px] w-[100px] items-center ${
            activeCategory === "stepp"
              ? "bg-[#00FFB9] text-black font-bold"
              : "text-white"
          }`}
        >
          STEP2
        </h1>
      </div>

   <div className="flex justify-center items-center mt-10">
  {tableData[activeCategory].map((item, index) => (
    <div
      key={index}
      className="bg-[#191919] w-[800px] min-h-[63px] rounded-xl 
                 flex flex-wrap gap-4 px-[20px] py-3 mx-auto justify-center
                 items-center text-white text-[24px] font-bold"
    >
      {Object.values(item).map((value, i) => (
        <p
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`cursor-pointer ${
            activeIndex === i ? "text-[#00FFB9]" : ""
          }`}
        >
          {value}
        </p>
      ))}
    </div>
  ))}
</div>


   <div>
  {tableDets[activeCategory]?.map((item, index) => (
    <div key={index} className="flex justify-center">
      <div className="bg-black text-white rounded-xl mt-4 flex  gap-6 justify-between lg:w-[792px] h-[407px] border border-[#FFFFFF1A] lg:text-[22px] text-[18px]">

        {/* Left Labels */}
        <div className="pl-5 gap-5 flex flex-col lg:pt-5 pt-10">
          {item.labels.map((label, i) => (
            <p key={i}>{label}</p>
          ))}
        </div>

        {/* Dynamic Columns */}
        <div className="flex gap-5  pr-4">
          {item.columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="bg-[#191919] lg:w-[251px] w-[70px] flex flex-col items-center gap-5 border border-[#FFFFFF1A] rounded-4xl lg:pt-5 pt-10"
            >
              {col.map((value, i) => (
                <p key={i}>{value}</p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  ))}
</div>


<div className="flex flex-col lg:flex-row items-center gap-10 lg:justify-between lg:px-[20px] lg:w-[776px] bg-[#191919] lg:h-[92px] h-[170px]  rounded-xl mx-auto mt-7 pt-3">

    <div className="flex gap-3 items-end bg-[#FFFFFF1A] lg:justify-between justify-center lg:px-[10px] lg:w-[172px] w-[290px]  rounded-lg">
       <h1 className="text-[40px] text-white font-semibold text-[20px]">
  ${activeIndex !== null
    ? prices[activeCategory][activeIndex]
    : prices[activeCategory][0]}
</h1>
        <h1 className="text-[#FFFFFF80]">Plan Price</h1>
    </div>


    <div>

        <button
  className="bg-white text-[#014B37] h-5 lg:w-[204px] w-[240px] lg:mr-[10px]  rounded-sm border-0 font-bold
             shadow-[0_0_10px_20px_rgba(255,255,255,3.5)]"
>
  Buy Now
</button>
    </div>
</div>

    </section>
  );
}

export default Section3;
