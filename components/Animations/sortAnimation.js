import { motion } from "framer-motion";

export default function SortAnimation({ children, className }) {
  //animation for the sorting of the photos in the photobox
  const SortedAnimation = {
    hidden: {
      right: "30%",
      top: "10%",
      zIndex: 1,
    },
    visible: {
      right: "50%",
      top: "0%",
      zIndex: 3,
      transition: {
        type: "spring",
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={SortedAnimation}>
        {children}
      </motion.div>
    </>
  );
}
