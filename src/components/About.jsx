import aboutMe from "../assets/about2.jpg"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
        About 
        <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center">
                    <img className="rounded-2xl w-2/3" src= {aboutMe} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-2xl" > 
                            Originally from Jhansi, Uttar Pradesh, and raised in Bhilai, Chhattisgarh, my journey into coding began in college, sparked by curiosity and nurtured through mentorship from seniors, collaborative projects with friends, and the unwavering support of my family, especially my brother, whose encouragement has always pushed me to strive for more.
                            Over time, I’ve built a solid foundation in Data Structures, Frontend Development (React, Tailwind), and core Computer Science concepts including Operating Systems, DBMS, Computer Networks, and Machine Learning. I thrive in environments where continuous learning is embraced and ideas evolve into impactful solutions.
                            Whether it's on the cricket field or behind the screen, I bring the same energy: passion, resilience, and a relentless drive to grow.</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About