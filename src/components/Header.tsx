'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="sticky top-0 p-5 md:max-w-7xl mx-auto flex justify-between items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SocialIcon
          url="https://twitter.com/jaketrent"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://facebook.com/jaketrent"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/jaketrent"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          bgColor="transparent"
          fgColor="gray"
        />
        <span className=" cursor-pointer uppercase text-gray-400 text-sm hidden md:inline-flex">
          get in touch
        </span>
      </motion.div>
    </header>
  );
};

export default Header;
