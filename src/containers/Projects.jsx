import React, { useState } from "react";  
import { AnimatePresence, motion } from "framer-motion";  
import { Leaf1, Leaf2 } from "../assets";  
import { ProjectsData } from "../utils/helper";  
import { FaGithub } from "react-icons/fa6";  

const Projects = () => {  
  return (  
    <section  
      id="projects"    
      className="flex justify-center items-center flex-col gap-12 my-12"  
    >  
      <div className="w-full flex items-center justify-center pt-24">  
        <motion.div  
          initial={{ opacity: 0, width: 0 }}  
          animate={{ opacity: 1, width: 200 }}  
          exit={{ opacity: 0, width: 0 }}  
          transition={{ delay: 0.4 }}  
          className="flex items-center justify-around w-52"  
        >  
          <img src={Leaf1} className="w-6 h-auto object-contain" />  
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">  
            Projects  
          </p>  
          <img src={Leaf2} className="w-6 h-auto object-contain" />  
        </motion.div>  
      </div>  

      {/* Main section */}  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">  
        <AnimatePresence>  
          {ProjectsData && ProjectsData.map((project) => (  
            <ProjectCard key={project.id} project={project} />  
          ))}  
        </AnimatePresence>  
      </div>  
    </section>  
  );  
};  

const ProjectCard = ({ project }) => {  
  const [isHovered, setIsHovered] = useState(false)
  return (  
    <motion.div   
      className="relative cursor-pointer rounded-md overflow-hidden shadow-lg" 
      onMouseEnter={()=>setIsHovered(true)}  
      onMouseLeave={()=>setIsHovered(false)}
    >  
      <motion.img   
        whileHover={{ scale: 1.1 }}  
        src={project.imgSrc}  
        alt={`Project: ${project.name}`} // Added alt for accessibility  
        className="w-full h-full object-cover rounded-lg"  
      />  
     {
      isHovered && (
        <motion.div   
        className="absolute inset-0 backdrop-blur-md
         bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2
          opacity-0 hover:opacity-100 transition-opacity duration-300" // Adjusted for opacity on hover  
          
        whileHover={{ scale: 1.1 }}  
      >  
        <p className="text-xl text-primary">{project?.name}</p>  
        <a  
          href={project?.gitURL}  
          className="text-3xl text-white hover:text-primary"  
        >  
          <FaGithub />  
        </a>  
      </motion.div>  
      )
     }
    </motion.div>  
  );  
};  

export default Projects;