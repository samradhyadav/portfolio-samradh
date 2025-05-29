import { PROJECTS } from "../assets/constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl font-bold">Projects</motion.h2>
      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-start lg:flex-row lg:items-start lg:justify-center gap-6"
          >
            {/* Image Section */}
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
             className="-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="w-11/12 max-w-xs rounded shadow-md sm:w-3/4 lg:w-[150px] lg:h-auto"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4 px-1">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
