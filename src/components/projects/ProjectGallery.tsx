import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../services/data";

export default function ProjectGallery() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex justify-center px-12 py-8">
      <div className="flex gap-6 overflow-x-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col transition-all duration-300 rounded-lg ${
              expandedIndex === index
                ? "w-[750px] h-[350px] flex-row p-4 bg-[#0f172a]"
                : "w-[350px] h-[350px] cursor-pointer"
            }`}
            onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            style={{
              cursor: expandedIndex === index ? "default" : "pointer",
            }}
          >
            {/* Image */}
            <div
              className={`rounded-lg bg-cover bg-center flex-none ${
                expandedIndex === index ? "w-1/2 h-full" : "w-full h-full"
              }`}
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            {/* Expanded Details */}
            {expandedIndex === index && (
              <motion.div
                className="w-1/2 text-white p-4 flex flex-col justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="mt-2 flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Live Site →
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Code →
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
