'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col md:flex-row items-center justify-evenly text-center md:text-left max-w-7xl mx-auto px-10 text-gray-200 space-y-8"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl ">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <Image
          src={'/images/sarim.jpeg'}
          height={144}
          width={144}
          alt="image"
          className="-mb-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] flex-shrink-0 "
        />
      </motion.div>
      <div className="px-0 md:px-10 space-y-10">
        <h3 className="text-3xl font-semibold text-gray-400">
          Here is a{' '}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
          background
        </h3>

        <p className="text-sm leading-snug">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          voluptas minus dolor ipsam veniam accusantium, explicabo ipsum a saepe
          expedita temporibus, beatae, cupiditate voluptates odio hic tempore in
          perspiciatis! Consequatur!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
