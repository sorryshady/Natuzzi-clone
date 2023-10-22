import { useState, useEffect } from 'react'
export function useCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [hoveredText, setHoveredText] = useState('')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    const handleResize = () => {
      if (parseFloat(window.innerWidth) <= 806) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }
    handleResize()

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMouseClick = (e) => {
    setHoveredText('Loading...')
    setClicked(true)
  }
  const completeLoad = () => {
    setClicked(false)
  }
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
    clicked,
    handleMouseClick,
    completeLoad,
    handleMouseEnter,
    handleMouseLeave,
    hoveredText,
    mobile,
  }
}
