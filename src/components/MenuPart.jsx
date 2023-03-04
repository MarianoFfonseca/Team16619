import React from "react";
import DataParts from "../DataParts.json";
import { motion } from "framer-motion";
function MenuPart({ setopenDetail, handleDelay }) {
  return (
    <div className="z-10  grid grid-flow-col grid-cols-3  fixed top-0 left-0 right-0 w-screen h-screen  ">
      {DataParts.map((item) => {
        return (
          <motion.div
            onClick={() => setopenDetail(item)}
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: handleDelay(),
            }}
            key={item.title}
            style={{
              background: item.textColor,
              color: item.mainColor,
            }}
            className="cursor-pointer h-full grid justify-items-center justify-center content-center text-xl font-semibold"
          >
            {item.title}
          </motion.div>
        );
      })}
    </div>
  );
}

export default MenuPart;
