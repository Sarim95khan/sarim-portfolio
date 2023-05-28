import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const WorkCard = () => {
  return (
    <article
      className="mt-24 flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[900px] mx-auto
    snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity
     duration-200 overflow-hidden"
    >
      {/* <Image/> */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/sarim.jpeg"
          height={64}
          width={64}
          alt="cards"
          className="rounded-full md:h-[128px] md:w-[128px] object-cover object-start "
        />
      </motion.div>
      <div className="text-white px-0 md:px-10">
        <h3 className="text-3xl font-light">CEO of World</h3>
        <p className="text-xl font-bold mt-1">SARIM</p>
        <div className="flex space-x-2 my-2">
          {/* Tech */}
          {/* Tech */}
          {/* Tech */}
        </div>
        <h4 className="uppercase text-gray-300 my-2">Start Work... End ...</h4>
        <ul className="list-disc space-y-2 text-white ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default WorkCard;
