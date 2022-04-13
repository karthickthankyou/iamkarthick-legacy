import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useStore } from 'src/pages/_app'

export interface ICursorProps {}

const getMidBlend = (type = 'Default') => {
  if (type === 'IMAGE')
    return { mixBlendCls: ' w-2 h-2 rounded-full', offset: 4 }
  if (type === 'LINK')
    return {
      mixBlendCls:
        ' w-16 h-16 mix-blend-darken border-2 border-black rounded-3xl',
      offset: 32,
    }
  return {
    offset: 48,
    mixBlendCls:
      'rounded-full mix-blend-difference backdrop-grayscale w-24 h-24',
  }
}

const Cursor = () => {
  const { hoverTargetType, show } = useStore((state) => state)
  const { offset, mixBlendCls } = getMidBlend(hoverTargetType)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 10, stiffness: 50 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - offset)
      cursorY.set(e.clientY - offset)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY, offset])

  if (!show) return null
  return (
    <motion.div
      className={`fixed top-0 flex left-0  transition-all mix-blend-darken bg-white z-50   shadow-xl pointer-events-none  shadow-black/20 ${mixBlendCls}`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      {hoverTargetType === 'LINK' && (
        <div className='bottom-0 p-1 mx-auto mt-auto text-xs font-semibold uppercase '>
          CLICK
        </div>
      )}
    </motion.div>
  )
}

export default Cursor
