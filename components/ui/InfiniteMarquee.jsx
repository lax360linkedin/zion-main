import { motion } from "framer-motion";

const InfiniteMarquee = ({
  items,
  direction = "left",
  speed = 40,
  renderItem,
}) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
