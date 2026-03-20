import { BrowserRouter, Routes, Route } from "react-router-dom"
import Portal from "@/pages/Portal"
import VibeCoding from "@/pages/VibeCoding"

const base = import.meta.env.BASE_URL

export default function App() {
  return (
    <BrowserRouter basename={base}>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/vibe-coding" element={<VibeCoding />} />
      </Routes>
    </BrowserRouter>
  )
}
