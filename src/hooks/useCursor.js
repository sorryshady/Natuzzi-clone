import { useState, useEffect } from 'react'

export function useCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [hoveredText, setHoveredText] = useState('')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const handleMouseEnter = (e) => {
    setHovering(true)
    const target = e.target
    if (target.getAttribute('data-text')) {
      setHoveredText(target.getAttribute('data-text'))
    }
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }

  return {
    mousePosition,
    hovering,
    handleMouseEnter,
    handleMouseLeave,
    hoveredText,
  }
}
