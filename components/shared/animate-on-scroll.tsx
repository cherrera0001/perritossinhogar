"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimateOnScrollProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "left" | "right"
  className?: string
}

const variants = {
  up: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } },
}

export function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={variants[direction].initial}
      whileInView={variants[direction].animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
