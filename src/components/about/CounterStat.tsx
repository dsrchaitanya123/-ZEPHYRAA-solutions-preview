"use client";
import { motion } from "framer-motion";

const CounterStat = ({ value, label }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-start"
    >
      <span className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
        {value}
      </span>
      <span className="text-gray-500 text-sm font-medium mt-1 uppercase tracking-wide">
        {label}
      </span>
    </motion.div>
  );
};

export default CounterStat;
