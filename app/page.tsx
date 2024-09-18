'use client';

import myPic from '../public/assets/me.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MotionConfig
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 0.3,
        bounce: 0
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="relative">
          <AnimatePresence mode="popLayout" initial={false}>
            {isVisible && (
              <>
                <motion.div
                  initial={{
                    top: '50%',
                    zIndex: '-10',
                    left: '50%',
                    opacity: 0,
                    x: '-50%',
                    filter: 'blur(5px)',
                    y: '-50%'
                  }}
                  animate={{
                    top: '-20px',
                    zIndex: '0',
                    left: '-35px',
                    backgroundColor: '#2b3137',
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    x: 0
                  }}
                  exit={{
                    top: '50%',
                    zIndex: '-10',
                    left: '50%',
                    opacity: 0,
                    x: '-50%',
                    filter: 'blur(5px)',
                    y: '-50%'
                  }}
                  className="absolute  flex size-8  items-center justify-center rounded-full bg-white shadow-lg"
                >
                  <Link href="https://github.com/pritamtirpude" target="_blank">
                    <FaGithub color="#ffffff" size={15} />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{
                    top: '50%',
                    zIndex: '-10',
                    opacity: 0,
                    filter: 'blur(5px)',
                    left: '50%',
                    x: '-50%',
                    y: '-50%'
                  }}
                  animate={{
                    top: '-40px',
                    zIndex: '0',
                    opacity: 1,
                    filter: 'blur(0px)',
                    backgroundColor: '#cd486b',
                    left: '5px',
                    x: 0,
                    y: 0
                  }}
                  exit={{
                    top: '50%',
                    zIndex: '-10',
                    opacity: 0,
                    left: '50%',
                    x: '-50%',
                    filter: 'blur(5px)',
                    y: '-50%'
                  }}
                  className="absolute  flex size-8 items-center justify-center rounded-full bg-white shadow-lg"
                >
                  <Link
                    href="https://www.instagram.com/pritam231991/"
                    target="_blank"
                  >
                    <FaInstagram color="#ffffff" size={15} />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{
                    top: '50%',
                    zIndex: '-10',
                    left: '50%',
                    opacity: 0,
                    filter: 'blur(5px)',
                    x: '-50%',
                    y: '-50%'
                  }}
                  animate={{
                    top: '-40px',
                    zIndex: '0',
                    left: '50px',
                    opacity: 1,
                    filter: 'blur(0px)',
                    backgroundColor: '#1da1f2',
                    x: 0,
                    y: 0
                  }}
                  exit={{
                    top: '50%',
                    zIndex: '-10',
                    left: '50%',
                    opacity: 0,
                    x: '-50%',
                    y: '-50%',
                    filter: 'blur(5px)'
                  }}
                  className="absolute flex size-8 items-center justify-center rounded-full bg-white shadow-lg"
                >
                  <Link href="https://x.com/ptirpude1991" target="_blank">
                    <FaTwitter color="#ffffff" size={15} />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{
                    top: '50%',
                    zIndex: '-10',
                    left: '50%',
                    x: '-50%',
                    filter: 'blur(5px)',
                    y: '-50%',
                    opacity: 0
                  }}
                  animate={{
                    top: '-20px',
                    zIndex: '0',
                    left: '90px',
                    filter: 'blur(0px)',
                    backgroundColor: '#0077B5',
                    opacity: 1,
                    x: 0,
                    y: 0
                  }}
                  exit={{
                    top: '50%',
                    zIndex: '-10',
                    left: '50%',
                    opacity: 0,
                    filter: 'blur(5px)',
                    x: '-50%',
                    y: '-50%'
                  }}
                  className="absolute flex size-8 items-center justify-center rounded-full bg-white shadow-lg"
                >
                  <Link
                    href="https://www.linkedin.com/in/pritam23/"
                    target="_blank"
                  >
                    <FaLinkedin color="#ffffff" size={15} />
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <div
            className="z-30 flex flex-col items-center justify-center gap-2"
            onClick={() => setIsVisible((prevState) => !prevState)}
          >
            <motion.div
              whileTap={{
                scale: 0.8
              }}
            >
              <Image
                className="size-16 cursor-pointer rounded-full shadow-lg"
                src={myPic!}
                alt="my image"
                priority
              />
            </motion.div>

            <h1 className="text-base font-medium">Let&apos;s connect</h1>
          </div>
        </div>
      </main>
    </MotionConfig>
  );
}
