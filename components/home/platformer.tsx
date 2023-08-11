"use client"

import { useRef } from "react"

export default function Platformer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvas = canvasRef.current
  const context = canvas?.getContext("2d")

  if (canvas !== null && context !== null) {
  }

  console.log("canvas created")

  return (
    <div className="w-full my-6">
      <canvas
        className="w-full h-36"
        width={window.innerWidth}
        height="120"
        ref={canvasRef}
      />
    </div>
  )
}
