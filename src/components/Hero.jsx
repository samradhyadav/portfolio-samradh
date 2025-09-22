import { delay } from "motion";
import profilePic from "../assets/pfp.png";
import { motion } from "motion/react"

const container = (delay) =>({
    hidden: { x:-100, opacity:0},
    visible:{
        x: 0,
        opacity: 1,
        transition: {duration:0.5, delay:delay},
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="whitespace-nowrap pb-8 text-4xl font-italic tracking-tight lg:mt-16 lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-600 to-blue-600
 ">
              Samradh Singh Yadav
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-clip-text text-4xl tracking-tight text-transparent bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300

">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-italic tracking-tighter text-2xl">
            I'm a final-year B.Tech student at IIT Jammu, majoring in Chemical Engineering and a minor in Computer Science Engineering. Recently, I was selected for the prestigious Amazon ML Summer School 2025, which deepened my exposure to cutting-edge machine learning concepts. I also completed my internship at BPCL and there I achieved impactful results. My growing interest in software development has driven me to build and deploy full-stack projects, where I’ve explored technologies like React, Node.js, and MongoDB while solving real-world problems. These projects have strengthened my problem-solving skills and nurtured my passion for creating impactful applications. Beyond academics, I’m a state-level cricket player and currently leading IIT Jammu's cricket team in the INTER-IIT Sports Meet.
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-end px-6 lg:px-16">
          <motion.img
            initial= {{ x:100, opacity:0}}
            animate= {{ x:0, opacity:1}}
            transition= {{duration:1, delay:1.2}}
            src={profilePic}
            alt="Samradh"
            className="w-86 h-auto rounded-4xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
