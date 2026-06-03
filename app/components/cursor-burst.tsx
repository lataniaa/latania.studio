"use client"

import { useEffect } from "react"

export default function CursorBurst() {
  useEffect(() => {
    const stage = document.getElementById("cursor-stage")
    if (!stage) return

    const IMAGES = [
      "https://i.pinimg.com/1200x/0a/60/80/0a60809ea7d4b97f2c47b18a02a45142.jpg",
      "https://i.pinimg.com/736x/8f/22/a0/8f22a09b021328488f023e05abcd1aa2.jpg",
      "https://i.pinimg.com/736x/61/35/b7/6135b758065e9ea0d32b47c7b816a828.jpg",
      "https://i.pinimg.com/736x/67/52/a9/6752a900f8dfd24b84bc942647dd7d49.jpg",
      "https://i.pinimg.com/1200x/b6/e7/e2/b6e7e2e54c32e38be59c932351a969a4.jpg",
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