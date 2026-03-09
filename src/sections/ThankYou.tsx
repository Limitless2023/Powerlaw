import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";

interface ThankYouProps {
  onImageClick?: (src: string) => void;
}

export default function ThankYou({ onImageClick: _onImageClick }: ThankYouProps) {
  void _onImageClick;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8">
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
        className="text-lg text-zinc-400 text-center max-w-lg mb-12 leading-relaxed"
      >
        希望能给大家一些启发
        <br />
        不管你是什么角色，AI 都可以成为你的超级搭档
      </motion.p>

      {/* Q&A Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-md"
      >
        <GlassCard accent="teal" className="text-center py-8">
          <div className="text-3xl font-bold text-accent mb-2">Q & A</div>
          <p className="text-zinc-400 text-sm">
            有任何问题，欢迎交流
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
