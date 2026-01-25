// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 120 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
