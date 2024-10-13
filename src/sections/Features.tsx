"use client"
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player"
import Image from "next/image"
import productImage from "@/assets/product-image.png"
import { IconSparkles } from "@tabler/icons-react"
import { useEffect, useRef } from "react"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
]

const FeatureTab = (tab: (typeof tabs)[number]) => {
  const tabRef = useRef<HTMLDivElement>(null)
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null)

  //since we need to animate or alter to values ie X an Y % hence we will ned to motion value
  const xPercent = useMotionValue(100)
  const yPercent = useMotionValue(0)
  //we are alterning the x and y % using  useMotionValue
  const maskImage = useMotionTemplate`radial-gradient(100px 50px at ${xPercent}% ${yPercent}%, black, transparent)`
  //useeffect to animate the values
  useEffect(() => {
    //to ensure tht the time interval is smooth as the x distance is way more than the y distance for mask image
    if (!tabRef.current) return
    const { height, width } = tabRef.current?.getBoundingClientRect()
    const circumference = height * 2 + width * 2
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ]
    //duration
    animate(xPercent, [0, 100, 100, 0, 0], {
      duration: 4,
      times,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    })
    animate(yPercent, [0, 0, 100, 100, 0], {
      times,
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    })
  }, [])

  //custom funtion to manage the animaton of icon  on hover or mouse enter
  const handleTabHover = () => {
    if (dotlottieRef.current === null) return
    //to set the animation to initial after hover so that when over again the logo should animate
    dotlottieRef.current.seek(0)
    dotlottieRef.current.play()
  }

  return (
    <div
      ref={tabRef}
      //when hover over the tab icon animation
      onMouseEnter={handleTabHover}
      className="border border-white/20 rounded-2xl flex py-3 items-center gap-5 lg:flex-1 relative "
    >
      {/* -m-px as absolutly positioned elemnts go inside the parent , so to match the border alignment with thre parent border */}
      {/* "mask-image to show the border color in a selected part of the border" */}
      {/* to Achive the anmation all we need to do is alter the x and y % value on the mask-image which will be done using useMotionValue by framr motion */}
      <motion.div
        style={{
          maskImage,
        }}
        className="absolute inset-0 -m-px border border-[#A369FF] rounded-2xl"
      ></motion.div>
      <div className="h-12 w-12 border border-white/20 rounded-xl  ml-3 inline-flex items-center justify-center ">
        <DotLottiePlayer
          ref={dotlottieRef}
          src={tab.icon}
          className="h-6 w-6"
          autoplay
        />
      </div>
      <div>{tab.title}</div>
      {tab.isNew && (
        <div className="bg-purple-400 rounded-2xl text-black p-2 font-semibold text-xs">
          new
        </div>
      )}
    </div>
  )
}

export const Features = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-5xl lg:text-7xl font-medium text-center tracking-tighter">
          Elevate your SEO effforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center tracking-tight mt-5 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis,
          vero sint consequuntur molestiae velit tempore illo ipsam .
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className="border border-white/20 rounded-2xl p-2.5 mt-10">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
          {/* <Image
            src={productImage}
            alt=" product Image "
            className="border border-white/20 rounded-2xl"
          /> */}
        </div>
      </div>
    </section>
  )
}
