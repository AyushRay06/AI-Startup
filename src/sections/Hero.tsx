"use client"

import { Button } from "@/components/button"
import starsBg from "@/assets/stars.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const Hero = () => {
  //bg start animation with scroll for depth
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])
  return (
    <motion.section
      //ref to target/refer the particular section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 70,
      }}
      className="h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      //USING IN LINE CSS FOR THE BACKGROIUND STAR IMAGE
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
    >
      {/* THE HERO SECTION PALNET THINGY */}

      {/* shadow */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* THE BIG PURPLE PLANET */}
      <div className="absolute h-64 w-64 lg:h-[500px] lg:w-[500px] bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* FIRST RING */}
      <motion.div
        //to cover the -translate-x,y-1/2
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        //to animate
        animate={{
          rotate: 360,
        }}
        //for rotation duration
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] lg:h-[640px] lg:w-[640px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        {/* PLANET on the ring left-0 top-1/2 */}
        <div className="absolute h-3 w-3  rounded-full bg-zinc-800 top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute h-3 w-3 rounded-full bg-zinc-800 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/* 2nd Ring */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[484px] w-[484px] lg:hidden rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {/* PLANET on 2nd Ring */}
        <div className="absolute h-3 w-3 bg-zinc-800  rounded-full top-1/2 left-full -translate-x-1/2  -translate-y-1/2">
          {/* RING on Planet which is on the 2nd ring of the Main Planet */}
          <div className="absolute h-[64px] w-[64px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        </div>

        <div className="absolute h-4 w-4 bg-zinc-900 rounded-full top-0 left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
      </motion.div>
      {/* 3rd Ring */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
        className="absolute h-[699px] w-[699px]   lg:h-[800px] lg:w-[800px] border rounded-full border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        {/* PLANET on ring 3rd  ... cordinatest ir top an dleft through trial an error */}
        <div className="absolute h-3 w-3 lg:h-4 lg:w-4 bg-slate-800 rounded-full top-1/4 left-9">
          {/* RING on the planet which is on the 3rd ring of the main planet */}
          <div className="absolute h-[59px] w-[59px] border rounded-full border-white/20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        </div>
      </motion.div>
      {/* 4th Ring */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 90,
        }}
        className="absolute h-[899px] w-[899px] lg:h-[1000px] lg:w-[1000px] border rounded-full border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        {/* PLANET on the 4th ring */}
        <div className="absolute h-3 w-3 lg:h-4 lg:w-4  bg-zinc-500 rounded-full top-32 left-[764px] lg:left-[830px]">
          {/* RING on planet whixh is on the 4th ring of the main planet */}
          <div className="absolute h-[80px] w-[80px] border rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="container relative mt-16">
        <h1 className="text-center text-8xl md:text-9xl lg:text-[200px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-center mt-6 text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          tenetur veniam eaque et nihil quia praesentium quasi rem facere? Optio
          non laboriosam maiores ducimus voluptas quisquam molestias voluptatum
          dolorum culpa
        </p>

        <div className="flex justify-center mt-10">
          <Button />
        </div>
      </div>
    </motion.section>
  )
}
