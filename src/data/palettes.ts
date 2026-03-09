/** Color4Bg gradient palettes — one per section */
export const palettes: Record<string, string[]> = {
  cover:    ["#86DFE9", "#A4EFF4", "#FDFFF0", "#D6F2C7"],
  part1:    ["#0D98BA", "#0CA0B1", "#0BA9A8", "#0AB19F"],
  part2:    ["#A7DDBC", "#8FC5AA", "#78AE99", "#609687"],
  part3:    ["#3155A0", "#2984C3", "#5ABAD5", "#ABEDE6"],
  part4:    ["#0E7FB0", "#88C5F9", "#FFF8F1", "#EEDAD3"],
  part5:    ["#A0BCF6", "#AFC0F1", "#BEC3EB", "#CCC7E6"],
  part6:    ["#D2E2FA", "#EBFAFF", "#D4F5FF", "#BEE1FA"],
  part7:    ["#F6C9B9", "#FDD2BF", "#FFD9CA", "#FFE5DB"],
  thanks:   ["#86DFE9", "#A4EFF4", "#FDFFF0", "#D6F2C7"],
}

export type SectionKey = keyof typeof palettes
