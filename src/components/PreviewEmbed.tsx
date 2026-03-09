interface PreviewEmbedProps {
  src: string;
  title: string;
  height?: number;
}

export default function PreviewEmbed({
  src,
  title,
  height = 360,
}: PreviewEmbedProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10">
      <div className="bg-zinc-900 px-4 py-2 flex justify-between items-center text-xs text-zinc-500">
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
  );
}
