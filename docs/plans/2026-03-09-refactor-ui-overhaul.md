# Refactor + UI Overhaul Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Eliminate all code duplication, fix dead code, add keyboard navigation, unify to warm single-palette design with white typography.

**Architecture:** Extract 3 shared components (fade, SectionHeader, TabBar) + 1 hook (useKeyboardNav). Simplify GradientBg to single palette with animation. Clean all section files to use shared components. Remove phantom props and dead dependencies.

**Tech Stack:** React 19 + TypeScript + Tailwind 4 + Framer Motion + Vite 7. Fonts: Outfit (display/body) + JetBrains Mono (code).

---

### Task 1: Shared Motion Utility

**Files:**
- Create: `src/lib/motion.ts`

**Step 1: Create fade utility**

```ts
/** 统一动画工厂 — 渐入上移效果 */
export const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 * i },
})
```

---

### Task 2: SectionHeader Component

**Files:**
- Create: `src/components/SectionHeader.tsx`

Animated h2 (title) + p (subtitle), white text. Replaces 7 inline copies.

---

### Task 3: TabBar Component

**Files:**
- Create: `src/components/TabBar.tsx`

Props: `tabs: string[]`, `active: number`, `onChange: (i: number) => void`. Glass-strong active style. Replaces 4 inline copies.

---

### Task 4: useKeyboardNav Hook

**Files:**
- Create: `src/hooks/useKeyboardNav.ts`

Listen for ArrowUp/ArrowDown/ArrowLeft/ArrowRight/Space. Call navigate callback with direction. No UI — pure logic.

---

### Task 5: Fix GlassCard — Remove Dead Accent Code

**Files:**
- Modify: `src/components/GlassCard.tsx`

Remove `ACCENT_COLORS` constant, remove `accent` prop from interface.

---

### Task 6: Simplify GradientBg — Single Palette, Keep Animation

**Files:**
- Modify: `src/components/GradientBg.tsx`
- Delete conceptually: `src/data/palettes.ts` (inline the single palette)

Remove `colors` prop. Hardcode `["#F6C9B9","#FDD2BF","#FFD9CA","#FFE5DB"]`. Keep `loop: true`. Remove color comparison logic. Keep DOM cleanup for re-mount safety.

---

### Task 7: Typography + Global Styles

**Files:**
- Modify: `src/index.css`
- Modify: `index.html` (add Google Fonts link for Outfit + JetBrains Mono)

White text system: headings `text-white`, body `text-white/80`, secondary `text-white/60`, muted `text-white/40`. Update glass classes for warm background context.

---

### Task 8: Refactor All Sections

**Files:**
- Modify: `src/sections/Cover.tsx`
- Modify: `src/sections/Part1.tsx`
- Modify: `src/sections/Part2.tsx`
- Modify: `src/sections/Part3.tsx`
- Modify: `src/sections/Part4.tsx`
- Modify: `src/sections/Part5.tsx`
- Modify: `src/sections/Part6.tsx`
- Modify: `src/sections/Part7.tsx`
- Modify: `src/sections/ThankYou.tsx`

For each:
1. Replace inline `fade()` with import from `lib/motion`
2. Replace inline header with `<SectionHeader>`
3. Replace inline tab bar with `<TabBar>` (where applicable)
4. Remove `onImageClick` prop from sections that don't use it (Part2-Part7)
5. Remove all `void _onImageClick` hacks
6. Update text colors to white system
7. Remove `accent` prop from all GlassCard usages

---

### Task 9: Clean App.tsx

**Files:**
- Modify: `src/App.tsx`

1. Remove palette imports and color state
2. Remove `onImageClick` from sections that don't need it
3. Add `useKeyboardNav` hook
4. Simplify GradientBg usage (no props)

---

### Task 10: Remove Dead Dependencies

**Files:**
- Modify: `package.json`

Remove: `class-variance-authority`, `lucide-react`. Run `npm install` to update lockfile.

---

### Task 11: Verify Build

Run: `cd /Users/limitless/Desktop/Projects/vibe-coding-sharing && npm run build`
Expected: Clean build, no errors.
