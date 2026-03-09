/** Color4Bg gradient palettes — one per section */
export const palettes: Record<string, string[]> = {
  cover:    ["#0a2540", "#134e5e", "#13ACBA", "#0d3b4f"],
  part1:    ["#1a1a3e", "#2d2b55", "#13ACBA", "#0e4d5c"],
  part2:    ["#2d1b4e", "#1a1a3e", "#6e3cbf", "#3b1f7a"],
  part3:    ["#1b3a2f", "#0d4f3c", "#22c55e", "#134e3e"],
  part4:    ["#3b2f1b", "#4d3a1a", "#f59e0b", "#5c4a2e"],
  part5:    ["#3e1a2e", "#4d1b3a", "#ec4899", "#6b2150"],
  part6:    ["#1a2d4e", "#0e3b6b", "#3b82f6", "#1e40af"],
  part7:    ["#2d1b4e", "#0a2540", "#13ACBA", "#6e3cbf"],
  thanks:   ["#0a2540", "#134e5e", "#13ACBA", "#0d3b4f"],
}

export type SectionKey = keyof typeof palettes
