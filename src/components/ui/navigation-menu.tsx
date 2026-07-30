import * as React from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Navigation } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Expertise & Services", href: "#services" },
  { name: "Experience", href: "#skills" },
  { name: "Research", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

const EXPAND_SCROLL_THRESHOLD = 15

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true)
  const [activeHash, setActiveHash] = React.useState("#hero")

  const { scrollY } = useScroll()
  const lastScrollY = React.useRef(0)
  const scrollPositionOnCollapse = React.useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current

    if (isExpanded && latest > previous && latest > 100) {
      setExpanded(false)
      scrollPositionOnCollapse.current = latest
    } else if (
      !isExpanded &&
      latest < previous &&
      (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD || latest < 50)
    ) {
      setExpanded(true)
    }

    if (latest > scrollPositionOnCollapse.current) {
      scrollPositionOnCollapse.current = latest
    }

    lastScrollY.current = latest
  })

  const handleNavClick = (e: React.MouseEvent, href: string | null) => {
    e.stopPropagation()
    if (!isExpanded) {
      setExpanded(true)
      return
    }

    if (href) {
      setActiveHash(href)
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <motion.nav
        initial={false}
        animate={{
          scale: isExpanded ? 1 : 0.92,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        onClick={(e) => !isExpanded && handleNavClick(e, null)}
        className={cn(
          "relative flex items-center overflow-hidden rounded-full border border-white/30 bg-white/20 backdrop-blur-md backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] h-11 sm:h-12 transition-all duration-300 ease-out",
          isExpanded
            ? "px-2 sm:px-3 max-w-[92vw]"
            : "px-3 cursor-pointer hover:scale-105 active:scale-95 bg-white/20",
        )}
      >
        <div className="flex-shrink-0 flex items-center text-[#6C5CE7] transition-transform duration-300">
          <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>

        <div
          className={cn(
            "flex items-center gap-0.5 sm:gap-1.5 transition-all duration-300 ease-in-out origin-left",
            isExpanded
              ? "opacity-100 max-w-[500px] ml-2 sm:ml-3 pointer-events-auto"
              : "opacity-0 max-w-0 ml-0 overflow-hidden pointer-events-none",
          )}
        >
          {navItems.map((item) => {
            const isActive = activeHash === item.href
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-[13px] sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full transition-all duration-200 whitespace-nowrap tracking-wide",
                  isActive
                    ? "text-[#6C5CE7] bg-gradient-to-r from-purple-100/80 to-indigo-100/80 border border-purple-200/60 shadow-sm drop-shadow-[0_2px_4px_rgba(108,92,231,0.2)]"
                    : "text-slate-800 hover:text-[#6C5CE7] hover:bg-purple-50/70 hover:shadow-sm",
                )}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      </motion.nav>
    </header>
  )
}
