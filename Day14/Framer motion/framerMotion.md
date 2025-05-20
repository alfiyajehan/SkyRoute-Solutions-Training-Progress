# FRAMER MOTION->
Framer motion is an open source animation libraryspecifically designed for react.

It allowa developer to create animation and interact with the minimal code 

Framer motion is built on the foundation of framer library and provides a declarative API for defining animations, making it easy to create complex motion designs.

It is used to create 
1.Smooth animation
2.Enhamcing user experience
3.Easy to use


npm i motion 
import {motion} from 'motion/react';
<motion.tag>     </motion.tag>

In framer motion all the animation part will be written as an attributes.

animate={{
        x:1000
      }}

# PROPERTIES->
# animate(final properties)->
1.x
2.y
3.rotate
4.scale  

# transition->
5.duration
6.delay
7.repeat 
timing function(ease)  

# initial(initial properties)

# keyframe motion-> 
in the form of array

# drag animation->
drag
whileDrag={{}}
dragConstraints={{

}}
dragDirectionLock="true"

> dragConstarints={{}}
# hover animation->
whileHover-{{}}

# tap animation->
whileTap()={{}}


# SCROLLING BASED ANIMATION ->
useScroll()

const scrollProgress = useScroll().scrollYProgress
