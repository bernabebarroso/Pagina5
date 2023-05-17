import style from "./History.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const History = (props) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
        duration: 1.5,
      },
    },
    hidden: { opacity: 0 },
  };

  const childVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className={style.container}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        className={style.historyBox}
      >
        <motion.span variants={childVariants} className={style.firstLine}>
          Desde 1990 ayudando a construir sueños juntos.
        </motion.span>
        <motion.span variants={childVariants} className={style.secondLine}>
          Hoy pueden ser los tuyos.
        </motion.span>
      </motion.div>
    </div>
  );
};

export default History;
