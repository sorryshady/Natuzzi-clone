import { useState, useEffect } from 'react'

export function useCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e) => {
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
      }
      setMousePosition(newPosition)
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return {
    mousePosition,
  }
}
