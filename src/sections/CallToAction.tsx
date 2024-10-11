"use client"

import Starbg from "@/assets/stars.png"
import Gridbg from "@/assets/grid-lines.png"
import { Button } from "@/components/button"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion"
import { RefObject, useEffect, useRef } from "react"

//for follow mouse hover, we created a custom hook
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return
    const { top, left } = to.current.getBoundingClientRect()
    mouseX.set(event.x - left)
    mouseY.set(event.y - top)
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return [mouseX, mouseY]
}
//MAIN FUNCTION
export const CallToAction = () => {
  //For parallex effect or the depth for the star when scrolling
  const sectionRef = useRef<HTMLElement>(null)
  const borderedDivRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef)

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`
  return (
    <section className="p-20 md:p-28" ref={sectionRef}>
      <motion.div
        ref={borderedDivRef}
        animate={{
          backgroundPositionX: Starbg.width,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        //we have a group class at the end. Grop:helps to change any thing in teh childring div, it is declared in the parent div
        className="border border-white/10 py-28 rouned-xl overflow-hidden relative group"
        style={{
          backgroundPositionY,
          backgroundImage: `url(${Starbg.src})`,
        }}
      >
        {/*this one for initial masking */}
        <div
          //we have a grop-hover class to help as manage teh bg-mask
          className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-1000"
          style={{
            backgroundImage: `url(${Gridbg.src})`,
          }}
        ></div>
        {/* this one for mouse hover */}
        <motion.div
          className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  opacity-0 group-hover:opacity-100 transition duration-1000 "
          style={{
            maskImage,
            backgroundImage: `url(${Gridbg.src})`,
          }}
        ></motion.div>
        <div className="container">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-center max-w-lg mx-auto">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-lg text-white/70 text-center mt-10 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              beatae blanditiis aliquid.
            </p>
            <div className="text-center mt-10">
              <Button />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
