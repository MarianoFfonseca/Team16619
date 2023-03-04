import { useState } from "react";
import "./App.css";
import DataParts from "./DataParts.json";
import { motion, AnimatePresence } from "framer-motion";
import MenuPart from "./components/MenuPart";
import DetailPart from "./components/DetailPart";
import LoadingScene from "./components/LoadingScene";
function App() {
  let delay = 1.5;
  function handleDelay() {
    delay = delay + 0.2;
    return delay;
  }
  const [openDetail, setopenDetail] = useState(null);
  return (
    <div className="App relative overflow-x-hidden">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 3,
        }}
        className="fixed grid justify-center justify-items-center content-center z-30 top-0 left-0 right-0 "
      >
        <div className="px-6 py-2 bg-white rounded-b-md">Team # 16619</div>{" "}
      </motion.div>
      <AnimatePresence>
        {/* App loader  */}
        <MenuPart
          setopenDetail={setopenDetail}
          handleDelay={handleDelay}
        ></MenuPart>
        {openDetail && (
          <DetailPart
            key={openDetail.title}
            openDetail={openDetail}
            setopenDetail={setopenDetail}
          ></DetailPart>
        )}
        <LoadingScene></LoadingScene>
      </AnimatePresence>
    </div>
  );
}

export default App;
