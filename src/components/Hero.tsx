'use client';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hello, The Name's Sarim Khan",
      'Software Developer',
      'Engineer',
      'Artist!',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8  px-10 text-center overflow-hidden z-10">
      <BackgroundCircle />
      <Image
        src={'/images/sarim.jpeg'}
        height={144}
        width={144}
        alt="sarim image"
        className="rounded-full m-auto"
      />

      <div className="z-20 mx-auto">
        <span className="uppercase text-gray-400 tracking-[7px]">
          Web Developer
        </span>

        <h1>
          <span className="text-white text-4xl">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-4">
          <a href="#about">
            <button className="uppercase heroButton">about</button>
          </a>

          <a href="#">
            <button className="uppercase heroButton">service</button>
          </a>

          <a href="#experience">
            <button className="uppercase heroButton">skills</button>
          </a>

          <button className="uppercase heroButton">projects</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
