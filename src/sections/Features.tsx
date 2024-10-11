"use client"
import { DotLottiePlayer } from "@dotlottie/react-player"
import Image from "next/image"
import productImage from "@/assets/product-image.png"
import { IconSparkles } from "@tabler/icons-react"

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
  return (
    <div className="border border-white/20 rounded-2xl flex py-3 items-center gap-5 lg:flex-1 ">
      <div className="h-12 w-12 border border-white/20 rounded-xl  ml-3 inline-flex items-center justify-center ">
        <DotLottiePlayer src={tab.icon} className="h-6 w-6" autoplay loop />
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
