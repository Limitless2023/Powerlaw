/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: PreviewEmbed 组件
 * [POS]: components 的 iframe 预览容器，被 Part5 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

interface PreviewEmbedProps {
  src: string
  title: string
  height?: number
}

export default function PreviewEmbed({
  src,
  title,
  height = 360,
}: PreviewEmbedProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10">
      <div className="bg-black/50 backdrop-blur-xl px-4 py-2 flex justify-between items-center text-xs text-white/40">
        <span>{title}</span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 transition-colors"
        >
          Open ↗
        </a>
      </div>
      <iframe
        src={src}
        title={title}
        className="w-full bg-white border-none"
        style={{ height }}
      />
    </div>
  )
}
