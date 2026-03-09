/**
 * [INPUT]: 依赖 @/components 的 GradientBg/Navigation/ImageLightbox/Section，
 *          依赖 @/sections 的全部 9 个 section，依赖 @/hooks/useKeyboardNav
 * [OUTPUT]: App 根组件 — 全屏分段式演示文稿
 * [POS]: 应用入口，组合 section 渲染 + 导航 + 键盘控制 + 灯箱
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useState, useCallback, useRef } from "react"
import GradientBg from "@/components/GradientBg"
import Navigation from "@/components/Navigation"
import ImageLightbox from "@/components/ImageLightbox"
import Section from "@/components/Section"
import useKeyboardNav from "@/hooks/useKeyboardNav"

import Cover from "@/sections/Cover"
import Part1 from "@/sections/Part1"
import Part2 from "@/sections/Part2"
import Part3 from "@/sections/Part3"
import Part4 from "@/sections/Part4"
import Part5 from "@/sections/Part5"
import Part6 from "@/sections/Part6"
import Part7 from "@/sections/Part7"
import ThankYou from "@/sections/ThankYou"

const SECTIONS = ["cover", "part1", "part2", "part3", "part4", "part5", "part6", "part7", "thanks"]

export default function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const handleSectionVisible = useCallback((index: number) => {
    setCurrentSection(index)
  }, [])

  const handleNavigate = useCallback((index: number) => {
    const el = sectionRefs.current[index]
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const handleImageClick = useCallback((src: string) => {
    setLightboxSrc(src)
  }, [])

  /* ── 键盘导航：方向键 / 空格翻页 ── */
  const handleKeyNav = useCallback((dir: 1 | -1) => {
    const next = Math.max(0, Math.min(SECTIONS.length - 1, currentSection + dir))
    handleNavigate(next)
  }, [currentSection, handleNavigate])

  useKeyboardNav(handleKeyNav)

  const sectionComponents = [
    <Cover key="cover" />,
    <Part1 key="part1" onImageClick={handleImageClick} />,
    <Part2 key="part2" />,
    <Part3 key="part3" />,
    <Part4 key="part4" />,
    <Part5 key="part5" />,
    <Part6 key="part6" />,
    <Part7 key="part7" />,
    <ThankYou key="thanks" />,
  ]

  return (
    <>
      <GradientBg />
      <Navigation
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />

      <main className="relative z-10">
        {SECTIONS.map((id, index) => (
          <Section
            key={id}
            id={id}
            ref={(el: HTMLElement | null) => {
              sectionRefs.current[index] = el
            }}
            onVisible={() => handleSectionVisible(index)}
          >
            {sectionComponents[index]}
          </Section>
        ))}
      </main>

      <ImageLightbox
        src={lightboxSrc}
        onClose={() => setLightboxSrc(null)}
      />
    </>
  )
}
