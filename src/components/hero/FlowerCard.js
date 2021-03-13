import React from 'react'; 
import { useSpring, animated } from 'react-spring'; 

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 30}px,${y / 8 - 10}px,0)`

function FlowerCard() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 8, tension: 450, friction: 100 } }))

    return (
        <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className="base" style={{ transform: props.xy.interpolate(trans1) }}> </animated.div>
            <animated.div className="top" style={{ transform: props.xy.interpolate(trans2) }}> </animated.div>
        </div>
    )
}

export default FlowerCard; 

/* -------------------------------------------------------------------------- */
/*                         About the Flower component                         */
/*  This component consists of three divs, displaying two layered images and 
    animating them using React Spring's parallax animation. 

    For more information check out the React Spring docs! 
*/
/* -------------------------------------------------------------------------- */