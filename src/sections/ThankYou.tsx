import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6"
      >
        Thank You
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-zinc-400 text-center max-w-lg leading-relaxed"
      >
        希望能给大家一些启发
        <br />
        不管你是什么角色，AI 都可以成为你的超级搭档
      </motion.p>
    </div>
  );
}
