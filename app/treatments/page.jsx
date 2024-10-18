"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "@/components/CursorContext";

const Treatments = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Pamper Yourself with Our Luxurious Bridal Services!
            </h2>
            
            {/* items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Henna Services</h3>
                </div>
                <p className="pl-6 text-[15px]">
                Enjoy stunning henna designs crafted by our skilled artists!
                </p>
              </div>
              {/* end item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Makeup Services</h3>
                </div>
                <p className="pl-6 text-[15px]">
                Whether you desire a bold look or a soft glow, we've got you covered with our expert makeup services!
                </p>
              </div>
              {/* end item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Hair Services</h3>
                </div>
                <p className="pl-6 text-[15px]">
                Elevate your style with our professional hair services, from elegant updos to stunning transformations, tailored to your unique look!
                </p>
              </div>
              {/* end item */}
              {/* item */}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Skincare Services</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Revitalize your skin with our tailored skincare treatments, designed to nourish and enhance your natural glow!
                </p>
              </div>
              {/* end item */}
            </div>
            {/* btn */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Treatments;
