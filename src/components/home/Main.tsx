import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import face from "../../assets/face.jpg";
import n from "../../assets/n.png";
import j from "../../assets/j.png";

function Main() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"], // Animation lasts longer while scrolling
  });

  // Smooth and slow animation with useSpring
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50, // Lower stiffness makes animation smoother
    damping: 15, // Reduces sudden stopping
    mass: 1, // Keeps motion natural
  });

  // Images start at full size (scale: 1) and shrink smoothly (scale: 0.7)
  const imageScale = useTransform(smoothScroll, [0, 1], [1, 0.8]);
  
  // Use transform offsets to maintain initial positions but add movement
  const nTranslateX = useTransform(smoothScroll, [0, 1], [0, 42]);
  const nTranslateY = useTransform(smoothScroll, [0, 1], [0, 16]);
  
  const jTranslateX = useTransform(smoothScroll, [0, 1], [0, -42]);
  const jTranslateY = useTransform(smoothScroll, [0, 1], [0, -20]);

  // Text starts at normal size (scale: 1) and grows slightly (scale: 1.1)
  const textScale = useTransform(smoothScroll, [0, 1], [1, 1.1]);
  
  // Arrow opacity fades as user scrolls down (starts at 1, goes to 0)
  const arrowOpacity = useTransform(smoothScroll, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="pt-32 pb-20 px-4 bg-black text-white flex flex-col items-center">
      <div className="relative w-full max-w-xl flex justify-center items-center">
        {/* "n" Image */}
        <motion.div 
          className="absolute -left-32 -top-16 w-[450px] z-20"
          style={{ 
            scale: imageScale,
            translateX: nTranslateX,
            translateY: nTranslateY
          }}
        >
          <img
            src={n}
            alt="n"
            className="w-full -rotate-6"
          />
        </motion.div>

        {/* Face Image */}
        <motion.div className="relative z-10 shadow-lg" style={{ scale: imageScale }}>
          <img
            src={face}
            alt="face"
            className="w-56 rotate-[9deg] shadow-lg border-8 border-white"
          />
        </motion.div>

        {/* "j" Image */}
        <motion.div
          className="absolute -right-32 -bottom-20 w-[450px] z-20"
          style={{ 
            scale: imageScale,
            translateX: jTranslateX,
            translateY: jTranslateY
          }}
        >
          <img
            src={j}
            alt="j"
            className="w-full rotate-[-10deg]"
          />
        </motion.div>
      </div>

      {/* Enlarged text */}
      <motion.p
        className="text-center text-gray-400 max-w-xl mt-24 text-lg"
        style={{ scale: textScale }}
      >
        Hi, I'm <b className="text-white">Nietzchan Jake</b>, an awwward-winning interactive
        web designer currently doing cool stuff at PiggyVest, and building the Garage.
      </motion.p>

      <div className="mt-16">
        <motion.div 
          className="animate-bounce text-2xl text-gray-400"
          style={{ opacity: arrowOpacity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}

export default Main;