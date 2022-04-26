import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useStore } from 'src/pages/_app'
import PlayIcon from '@heroicons/react/outline/PlayIcon'

export interface ICursorProps {}

const getMidBlend = (type = 'Default') => {
  if (type === 'IMAGE')
    return { mixBlendCls: ' w-2 h-2 rounded-full', offset: 4 }
  if (type === 'VIDEO')
    return {
      mixBlendCls: ' w-14 h-14 rounded-full bg-white/50 ',
      offset: 28,
    }

  if (type === 'LINK')
    return {
      mixBlendCls:
        ' w-24 h-24 mix-blend-darken border-2 border-black rounded-full',
      offset: 48,
    }
  return {
    offset: 48,
    mixBlendCls:
      'rounded-full mix-blend-difference bg-white backdrop-grayscale w-24 h-24',
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
      className={`fixed top-0 flex left-0  transition-all duration-75   z-50   shadow-xl pointer-events-none  shadow-black/20 ${mixBlendCls}`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      {hoverTargetType === 'LINK' && (
        <div className='bottom-0 p-1 mx-auto mt-auto mb-2 text-xs font-bold uppercase'>
          CLICK
        </div>
      )}
      {hoverTargetType === 'VIDEO' && (
        <div className='m-auto uppercase '>
          <PlayIcon className='w-12 h-12' />
        </div>
      )}
    </motion.div>
  )
}

export default Cursor
