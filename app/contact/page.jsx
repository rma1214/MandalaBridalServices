"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Let's Glamify You!</h3>
            {/* items */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Our Location</h4>
                  <p className="leading-relaxed">
                    1214 Sohar Drive
                    <br />
                    East Viilage, NY 1214
                  </p>
                </div>
              </div>
              {/* end item */}
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/phone.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone Number</h4>
                  <div className="pt-1 flex-1">
                    <p>Phone: +1 201 1214 2003</p>
                    
                  </div>
                </div>
              </div>
              {/* end item */}
              {/* item */}
              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/email.svg" fill alt="" />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email Address</h4>
                  <div className="flex flex-col gap-1">
                    <p>mandala@beauty.com</p>
                  </div>
                </div>
              </div>
              {/* end item */}
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
