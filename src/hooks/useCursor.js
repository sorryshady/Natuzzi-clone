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
    if (parseFloat(window.innerWidth) <= 806) {
      setMobile(true)
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const handleMouseClick = (e) => {
    console.log(e.target)
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
