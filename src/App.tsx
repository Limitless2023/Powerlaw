import { useState, useCallback, useRef } from "react"
import GradientBg from "@/components/GradientBg"
import Navigation from "@/components/Navigation"
import ImageLightbox from "@/components/ImageLightbox"
import Section from "@/components/Section"

import Cover from "@/sections/Cover"
import Part1 from "@/sections/Part1"
import Part2 from "@/sections/Part2"
import Part3 from "@/sections/Part3"
import Part4 from "@/sections/Part4"
import Part5 from "@/sections/Part5"
import Part6 from "@/sections/Part6"
import Part7 from "@/sections/Part7"
import ThankYou from "@/sections/ThankYou"

import { palettes } from "@/data/palettes"

const SECTIONS = [
  { id: "cover", key: "cover" as const },
  { id: "part1", key: "part1" as const },
  { id: "part2", key: "part2" as const },
  { id: "part3", key: "part3" as const },
  { id: "part4", key: "part4" as const },
  { id: "part5", key: "part5" as const },
  { id: "part6", key: "part6" as const },
  { id: "part7", key: "part7" as const },
  { id: "thanks", key: "thanks" as const },
]

export default function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [bgColors, setBgColors] = useState(palettes.cover)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const handleSectionVisible = useCallback((index: number) => {
    setCurrentSection(index)
    const key = SECTIONS[index].key
    setBgColors(palettes[key])
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

  const sectionComponents = [
    <Cover key="cover" />,
    <Part1 key="part1" onImageClick={handleImageClick} />,
    <Part2 key="part2" onImageClick={handleImageClick} />,
    <Part3 key="part3" onImageClick={handleImageClick} />,
    <Part4 key="part4" onImageClick={handleImageClick} />,
    <Part5 key="part5" onImageClick={handleImageClick} />,
    <Part6 key="part6" onImageClick={handleImageClick} />,
    <Part7 key="part7" onImageClick={handleImageClick} />,
    <ThankYou key="thanks" />,
  ]

  return (
    <>
      <GradientBg colors={bgColors} />
      <Navigation
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />

      <main className="relative z-10">
        {SECTIONS.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
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
