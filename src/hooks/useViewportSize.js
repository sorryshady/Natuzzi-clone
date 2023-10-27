import { useState, useEffect } from 'react'

function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setViewportSize({
        width: parseFloat(window.innerWidth),
        height: parseFloat(window.innerHeight),
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return viewportSize
}

export default useViewportSize
