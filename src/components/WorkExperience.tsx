'use client';
import React from 'react';
import WorkCard from './WorkCard';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col justify-evenly items-center text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[24px]  text-gray-500 text-3xl ">
        Experience
      </h3>
      <div className="mx-auto w-full flex space-x-5 snap-x snap-mandatory overflow-x-scroll p-10">
        {/* cards */}
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
