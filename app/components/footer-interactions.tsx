"use client"

import { useEffect } from "react"

export default function FooterInteractions() {
  useEffect(() => {
    // Runaway button
    const btn = document.getElementById("runaway")
    const area = document.getElementById("playground")
    const msg = document.getElementById("anx-msg")
    if (!btn || !area || !msg) return

    let shownOnce = false

    area.style.position = "relative"
    area.style.overflow = "hidden"

    const originParent = btn.parentNode as HTMLElement
    const btnRectInit = btn.getBoundingClientRect()
    const ph = document.createElement("span")
    ph.style.display = "inline-block"
    ph.style.width = btnRectInit.width + "px"
    ph.style.height = btnRectInit.height + "px"
    originParent.insertBefore(ph, btn)

    const areaRect = area.getBoundingClientRect()
    const initLeft = btnRectInit.left - areaRect.left
    const initTop = btnRectInit.top - areaRect.top

    area.appendChild(btn)
    btn.style.position = "absolute"
    btn.style.left = initLeft + "px"
    btn.style.top = initTop + "px"

    function moveRandom() {
      if (!btn || !area) return
      const a = area.getBoundingClientRect()
      const b = btn.getBoundingClientRect()
      const maxX = a.width - b.width
      const maxY = a.height - b.height
      const pad = 8
      const x = Math.max(pad, Math.floor(Math.random() * (maxX - pad)))
      const y = Math.max(pad, Math.floor(Math.random() * (maxY - pad)))
      btn.style.left = x + "px"
      btn.style.top = y + "px"
    }

    const handleMouseEnter = () => {
      if (!shownOnce && msg) {
        msg.classList.add("show")
        shownOnce = true
      }
      moveRandom()
    }

    btn.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("resize", moveRandom)

    // Accordéon
    const accordeonItems = document.querySelectorAll(".accordion-item")
    accordeonItems.forEach((item) => {
      const header = item.querySelector(".accordion-header")
      header?.addEventListener("click", () => {
        item.classList.toggle("active")
      })
    })

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("resize", moveRandom)
    }
  }, [])

  return null
}