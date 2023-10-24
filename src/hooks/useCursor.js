import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cursorActions } from '../store/cursor-slice'

export function useCursor() {
  const dispatch = useDispatch()

  useEffect(() => {
    const mouseMove = (e) => {
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
      }
      dispatch(cursorActions.setMousePosition(newPosition))
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [dispatch])
}
