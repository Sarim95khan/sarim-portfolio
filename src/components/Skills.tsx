'use client';
import React from 'react';
import Skill from './Skill';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className=" relative flex flex-col justify-center items-center
    md:text-left xl:px-10 xl:flex-row max-w-[2000px] xl:space-y-0 min-h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[24px]  text-gray-500 text-3xl  ">
        Skills
      </h3>
      <h3 className="absolute top-36 md:tracking-[3px]500 uppercase text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-col-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
