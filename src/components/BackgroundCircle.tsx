'use client';
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center mt-20 "
    >
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[100px] w-[100px]  animate-ping" />
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[200px] w-[200px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[300px] w-[300px]  animate-ping" />
      <div className="absolute border border-[#F7ab0a] opacity-20 mt-52 rounded-full h-[500px] w-[500px]  animate-pulse" />
      <div className="absolute border border-[#F7ab0a] opacity-20 mt-52 rounded-full h-[650px] w-[650px]  animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircle;
