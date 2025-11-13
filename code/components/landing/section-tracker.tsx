"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

function getSectionIdentifier(section: HTMLElement) {
  const id = section.id || section.getAttribute("aria-labelledby") || section.getAttribute("aria-label")
  return id ?? "unknown"
}

function getSectionTitle(section: HTMLElement) {
  const heading = section.querySelector("h1, h2, h3, h4, [aria-label]")
  if (heading?.textContent) {
    return heading.textContent.trim()
  }
  const labelledById = section.getAttribute("aria-labelledby")
  if (labelledById) {
    const labelledBy = document.getElementById(labelledById)
    if (labelledBy?.textContent) {
      return labelledBy.textContent.trim()
    }
  }
  const ariaLabel = section.getAttribute("aria-label")
  if (ariaLabel) {
    return ariaLabel.trim()
  }
  return getSectionIdentifier(section)
}

export function SectionTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"))
    const observedSections = new Set<HTMLElement>()

    sections.forEach((section, index) => {
      section.classList.add("animate-on-scroll")
      section.style.setProperty("--animate-delay", `${index * 0.1}s`)

      if (!section.classList.contains("scroll-mt-24")) {
        section.classList.add("scroll-mt-24")
      }
    })

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.add("is-visible")
        if (!observedSections.has(section)) {
          trackEvent("view_section", {
            section_id: getSectionIdentifier(section),
            section_name: getSectionTitle(section),
          })
          observedSections.add(section)
        }
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
            return
          }

          if (!prefersReducedMotion) {
            target.classList.add("is-visible")
          } else {
            target.classList.add("motion-safe-visible")
          }

          if (!observedSections.has(target)) {
            trackEvent("view_section", {
              section_id: getSectionIdentifier(target),
              section_name: getSectionTitle(target),
            })
            observedSections.add(target)
          }

          obs.unobserve(target)
        })
      },
      {
        threshold: [0.5],
        rootMargin: "0px",
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null
}

