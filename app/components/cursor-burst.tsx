"use client"

import { useEffect } from "react"

export default function CursorBurst() {
  useEffect(() => {
    const stage = document.getElementById("cursor-stage")
    if (!stage) return

    const IMAGES = [
      "/images/cursor-burst/1.png",
      "/images/cursor-burst/2.png",
      "/images/cursor-burst/3.png",
      "/images/cursor-burst/4.png",
      "/images/cursor-burst/5.png",
    ]

    const MIN_MOVE_PX = 170
    const MAX_BURSTS = 20

    IMAGES.forEach((src) => {
      const i = new Image()
      i.src = src
    })

    let idx = 0
    let lastX: number | null = null
    let lastY: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top

      if (lastX !== null && lastY !== null) {
        const dist = Math.hypot(x - lastX, y - lastY)
        if (dist < MIN_MOVE_PX) return
      }
      lastX = x
      lastY = y

      const bursts = stage.querySelectorAll(".burst")
      if (bursts.length >= MAX_BURSTS) bursts[0].remove()

      const img = document.createElement("img")
      img.className = "burst"
      img.src = IMAGES[idx]
      img.style.left = x + "px"
      img.style.top = y + "px"
      img.addEventListener("animationend", () => img.remove(), { once: true })
      stage.appendChild(img)

      idx = (idx + 1) % IMAGES.length
    }

    stage.addEventListener("mousemove", handleMouseMove)

    return () => {
      stage.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return null
}