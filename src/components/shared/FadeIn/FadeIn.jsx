import {motion} from 'motion/react'

const FadeIn = (props) => {
  const {
    children,
    delay = 0,
    direction = 'up',
    className = '',
    as = 'section',
  } = props

  const MotionComponent = motion[as]

  const directions = {
    up: {y: 20},
    down: {y: -20},
    none: {y: 0},
  }

  return (
    <MotionComponent
      className={className}
      initial={{
        opacity: 0,
        y: directions[direction].y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{once: true, margin: '-50px'}}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  )
}

export default FadeIn