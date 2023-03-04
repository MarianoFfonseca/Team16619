import React from "react";
import TableVariables from "../assets/TableVariables.png";
import TableVariablesQ2 from "../assets/TableVariablesQ2.png";
import TableVariablesQ3 from "../assets/TableVariablesQ3.png";
import ImageOfCodeQ1 from "../assets/ImageOfCodeQ1.png";
import ImageOfCodeQ2 from "../assets/ImageOfCodeQ2.png";
import ImageOfCodeQ3 from "../assets/ImageOfCodeQ3.png";
import Model1 from "../assets/Model1.png";
import Model2 from "../assets/Model2.png";
import Model3 from "../assets/Model3.png";
import Model4 from "../assets/Model4.png";
import Model5 from "../assets/Model5.png";
import Model6 from "../assets/Model6.png";
import Model7 from "../assets/Model7.png";
import Model8 from "../assets/Model8.png";
import Model9 from "../assets/Model9.png";
import { motion } from "framer-motion";

function DifferentDetails({ openDetail }) {
  if (openDetail.title === "Variables") {
    return (
      <>
        {" "}
        <h1 className="text-5xl font-bold mt-32">{openDetail.title}</h1>
        <h1 className="text-2xl  mt-12">Question 1</h1>
        <img src={TableVariables} alt="" />
        <h1 className="text-2xl  mt-12">Question 2</h1>
        <img src={TableVariablesQ2} alt="" />
        <h1 className="text-2xl  mt-12">Question 3</h1>
        <img src={TableVariablesQ3} alt="" />
      </>
    );
  }
  if (openDetail.title === "Code Section") {
    return (
      <>
        <h1 className="text-5xl font-bold mt-32">{openDetail.title}</h1>
        <p className="text-lg">
          Here is the code that we used to calculate the variables for our
          model. We used the data from the table above to calculate the
          variables. We used the following equation to model the immediate
          financial differences in purchasing a car vs. an E-Bike.
        </p>
        <h1 className="text-2xl font-semibold mt-6">Code Question 1</h1>
        <img src={ImageOfCodeQ1} className="mx-4 max-w-[800px]" alt="" />
        <h1 className="text-2xl font-semibold mt-16">Code Question 2</h1>
        <img src={ImageOfCodeQ2} className="mx-4 max-w-[800px]" alt="" />
        <h1 className="text-2xl font-semibold mt-16">Code Question 3</h1>
        <img src={ImageOfCodeQ3} className="mx-4 max-w-[800px]" alt="" />
      </>
    );
  }
  if (openDetail.title === "Our Model") {
    return (
      <>
        <h1 className="text-5xl font-bold mt-32">{openDetail.title}</h1>
        <div className="h-[0.5px] mt-12 bg-black w-full"></div>
        <h1 className="mt-12 font-semibold text-2xl">Model 1</h1>
        <p>
          The chance that E-Bike popularity will increase over the coming years
          can be calculated by evaluating the financial and economic benefits,
          as well as the practical advantages that E-Bikes have to offer. If the
          net benefit of the cost of an E-Bike and the cost of a car Cc is
          greater than 0, then owning an E-Bike is financially and economically
          beneficial.
        </p>
        <img src={Model1} className="mx-4 max-w-[800px] my-6" alt="" />
        <p>
          The chance that the market size for E-Bikes will increase over the
          coming years can be calculated by comparing recent data to extract
          recent increases in the market size and demand. We also calculated the
          estimated increase in the market size from 2022 to 2023 using
          projected data.
        </p>
        <img src={Model2} className="mx-4 max-w-[800px] my-6" alt="" />
        <p>
          We used the following equation to model the immediate financial
          differences in purchasing a car vs. an E-Bike.
        </p>
        <img src={Model3} className="mx-4 max-w-[800px] my-6" alt="" />
        <p>
          {" "}
          With this we figured out that buying an E-Bike is 95% cheaper than
          buying a car with its initial cost of purchasing. This seems like
          reasonable evidence of why E-Bikes are becoming so much more popular.
        </p>
        <div className="h-[0.5px] mt-12 bg-black w-full"></div>
        <h1
          className="text-2xl font-semibold mt-12
 "
        >
          Model 2
        </h1>
        <p className="text-lg">
          The market for electric bikes may benefit in a number of ways from the
          concern over renewable energy. People are searching for alternate
          forms of transportation that are more environmentally friendly and
          sustainable as they become more conscious of the damaging effects that
          fossil fuels have on the environment.
        </p>
        <p>
          {" "}
          One such alternative that can aid in lowering carbon emissions and
          promoting a cleaner environment is electric motorcycles, which operate
          on electricity rather than gasoline or diesel fuel. The market for
          electric bikes may benefit in a number of ways from the concern over
          renewable energy. People are searching for alternate forms of
          transportation that are more environmentally friendly and sustainable
          as they become more conscious of the damaging effects that fossil
          fuels have on the environment.
        </p>
        <img src={Model4} className="mx-4 max-w-[800px] my-6" alt="" />
        <p>
          The amount of people who care about clean energy has increased over
          the years, with many Americans wanting the government to prioritize
          using clean, renewable energy instead of non-renewable resources like
          gas and oil. The equation below shows the growth in awareness of
          clean, renewable energy which can help determine how the interest will
          peak over time and give a better understanding of who will choose to
          own an E-bike over a car.
        </p>
        <img src={Model5} className="mx-4 max-w-[800px] my-6" alt="" />
        <p>
          With the equation below, we showed that purchasing an E-Bike is 95%
          cheaper than buying a car, only considering the initial cost. This
          supports the claim of how E-Bikes are becoming much more popular and
          shows how the costs differ both at the beginning and over time.
        </p>{" "}
        <img src={Model6} className="mx-4 max-w-[800px] my-6" alt="" />
        <div className="h-[0.5px] mt-12 bg-black w-full"></div>
        <h1
          className="text-2xl font-semibold mt-12
 "
        >
          Model 3
        </h1>
        <img src={Model7} className="mx-4 max-w-[800px] my-6" alt="" />
        <img src={Model8} className="mx-4 max-w-[800px] my-6" alt="" />
        <p className="text-xl">
          25 mpg avg with the idea of just 10% of car trips under 2 miles which
          is assumed to be nearly 5 million cars off of the roads then there is
          approximately 2.3 billions gallons saved per year
        </p>
        <img src={Model9} className="mx-4 max-w-[800px] my-6" alt="" />
        <p className="text-xl">
          On average a car emits about 4.6 metric tons of carbon emissions per
          year. Taking out 5 million cars would lead to about 23 million metric
          tons of carbon emissions that would not be put into the environment
          each year.
        </p>
      </>
    );
  }
}

function DetailPart({ openDetail, setopenDetail }) {
  return (
    <motion.div
      key={openDetail.title}
      style={{
        background: openDetail.textColor,
        color: openDetail.mainColor,
        height: "100%",
      }}
      className="cursor-pointer z-20 overflow-y-auto overflow-x-hidden grid px-[25%] justify-center gap-y-6
       content-start justify-items-center border-2 border-black
        border-opacity-50 rounded-2xl absolute top-0 left-0 right-0 w-full  pb-8"
      exit={{ y: 1000 }}
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      onClick={() => setopenDetail(null)}
    >
      <DifferentDetails openDetail={openDetail} />
    </motion.div>
  );
}

export default DetailPart;
